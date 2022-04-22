import React, { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router';
import Button from "../components/Button";
import Content from "../components/Content";
import Mood from '../components/Mood';
import DateTime from '../components/DateTime';
import Weather from '../components/Weather';
import Title from '../components/Title';
import Layout from '../layout/Layout';
import StyledLink from '../components/StyledLink';
import { Data } from '../api';
import styled from 'styled-components';


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
    width: 130px;
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
    const params = useParams();

    const [data, setData] = useState({ title: '', content: '', weather: 'sun', mood: 'grin', dateTime: Date.now() });
    const [readOnly, setReadOnly] = useState(true);

    useLayoutEffect(() => {
        const detailId = params.detailId;

        setReadOnly(!!detailId);
        if (!!detailId) {
            const found = Data.list.find(({ id }) => id === detailId);
            if (found) {
                setData(found);
            } else {
                console.error('data not found')
            }
        }
    }, [params]);


    const setDataHandler = (target, value) => {
        setData({ ...data, [target]: value });
    };

    return (
        <Layout>
            <DateTime dateTime={data.dateTime} />

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
                    !readOnly && (
                        <RightButtonArea>
                            <DetailButton>취소</DetailButton>
                            <DetailButton>저장</DetailButton>
                        </RightButtonArea>
                    )
                }
            </ButtonArea>
        </Layout>
    )
}