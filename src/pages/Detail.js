import React, { useCallback, useLayoutEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router';
import Button from "../components/Button";
import Content from "../components/Content";
import Mood from '../components/Mood';
import DateTime from '../components/DateTime';
import Weather from '../components/Weather';
import Title from '../components/Title';
import Layout from '../layout/Layout';
import StyledLink from '../components/StyledLink';
import { useRecoilState } from 'recoil';
import { userState } from '../store';
import styled from 'styled-components';
import { DiaryAPI } from '../api/diary';
import { UserAPI } from '../api/user';
import { clone } from '../utils';
import { USER_SAVED_LIST_COUNT } from '../const';


const FlexSpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const TitleArea = styled(FlexSpaceBetween)`
    margin-top: 4px;
    margin-bottom: 10px;
`;

const TitleBeforeArea = styled(FlexSpaceBetween)`
    width: 60px;
    margin-right: 6px;
`;

const ButtonArea = styled(FlexSpaceBetween)`
    width: 100%;
    margin-top: 10px;
`;

const RightButtonArea = styled(FlexSpaceBetween)`
`;


const DetailButton = styled(Button)`
    width: 60px;
`;

const DetailTitle = styled(Title)`
    width: 100%;
`;

const DetailContent = styled(Content)`
    width: 100%;
`;


export default function Detail() {
    const navigate = useNavigate();
    const params = useParams();
    const [user, setUser] = useRecoilState(userState);
    const [data, setData] = useState({ title: '', content: '', weather: 'sun', mood: 'grin' });
    const [readOnly, setReadOnly] = useState(true);

    // 다시 렌더링될때 함수를 재사용하기 위해 useCallback을 사용함.
    const fetchData = useCallback(async () => {
        const detailId = params.detailId;
        if (detailId) {
            const data = await DiaryAPI.get(detailId);
            if (data) {
                setData(data);
            }
            setReadOnly(true);
        } else {
            setReadOnly(false);
        }
    }, [params, setData]);

    useLayoutEffect(() => {
        fetchData();
    }, [fetchData]);

    const setDataHandler = (target, value) => {
        setData({ ...data, [target]: value });
    };

    const updateUserDiaryList = async (diaryList) => {
        console.log('userDiaryList', diaryList);
        const modified = await UserAPI.put(user.id, { ...user, diaryList });
        setUser(modified);
    }

    const onClickSave = async () => {
        let cloneDiaryList;
        if (data.id) {
            console.log('data', data);
            const diary = await DiaryAPI.put(data.id, { ...data, userId: user.id });
            const index = user.diaryList.findIndex(({ id }) => id === diary.id);
            if (index >= 0) {
                cloneDiaryList = clone(user.diaryList);
                cloneDiaryList.splice(index, 1, diary);
                await updateUserDiaryList(cloneDiaryList);
            }
        } else {
            console.log('data', data);
            const diary = await DiaryAPI.set({ ...data, userId: user.id });
            cloneDiaryList = clone(user.diaryList);
            if (cloneDiaryList.length === USER_SAVED_LIST_COUNT) {
                cloneDiaryList.pop();
            }
            cloneDiaryList.unshift(diary);
            await updateUserDiaryList(cloneDiaryList);
        }

        setReadOnly(true);
    }

    const onClickDelete = async () => {
        if (data.id) {
            await DiaryAPI.del(data.id);
            navigate('/', { replace: true });
        }
    }

    const onClickModify = () => {
        setReadOnly(false);
    }

    const onClickCancel = () => {
        setReadOnly(true);
    }

    return (
        <Layout>
            <DateTime created={data.created} />

            <TitleArea>
                <TitleBeforeArea>
                    <Weather size='24' state={data.weather} disabled={readOnly} onClick={(value) => setDataHandler('weather', value)} />
                    <Mood size='24' state={data.mood} disabled={readOnly} onClick={(value) => setDataHandler('mood', value)} />
                </TitleBeforeArea>
                <DetailTitle defaultValue={data.title} readOnly={readOnly} onChange={(e) => setDataHandler('title', e.target.value)} />
            </TitleArea>

            <DetailContent defaultValue={data.content} readOnly={readOnly} onChange={(e) => setDataHandler('content', e.target.value)} />

            <ButtonArea>
                <StyledLink to='/'>
                    <DetailButton>목록</DetailButton>
                </StyledLink>
                {
                    readOnly ?
                        (
                            <RightButtonArea>
                                <DetailButton onClick={onClickDelete}>삭제</DetailButton>
                                <DetailButton onClick={onClickModify}>수정</DetailButton>
                            </RightButtonArea>
                        )
                        :
                        (
                            <RightButtonArea>
                                <DetailButton onClick={onClickCancel}>취소</DetailButton>
                                <DetailButton onClick={onClickSave}>저장</DetailButton>
                            </RightButtonArea>
                        )
                }
            </ButtonArea>
        </Layout>
    )
}