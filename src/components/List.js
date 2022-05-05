import React, { useLayoutEffect, useCallback } from "react";
import styled from "styled-components";
import Button from "./Button";
import ListItem from "./ListItem";
import { HiPlus } from "react-icons/hi";
import { useRecoilState } from 'recoil';
import { diaryListState, userState } from '../store';
import { DiaryAPI } from "../api/diary";
import { USER_SAVED_LIST_COUNT } from "../const";

const UL = styled.ul`
    padding: 0;
    margin: 0;
`

export default function List() {
    const [diaryList, setDiaryList] = useRecoilState(diaryListState);
    const [user] = useRecoilState(userState);

    // 다시 렌더링될때 함수를 재사용하기 위해 useCallback을 사용함.
    const fetchData = useCallback(async () => {
        if (user && user.diaryList && user.diaryList.length > 0) {
            console.log('user', user);
            setDiaryList(user.diaryList);
        }
    }, [user, setDiaryList]);

    useLayoutEffect(() => {
        fetchData();
    }, [fetchData]);

    const onClickMore = async () => {
        const allList = await DiaryAPI.getList();
        setDiaryList(allList.slice(0, diaryList.length + USER_SAVED_LIST_COUNT));
    };

    return (
        <div>
            <UL>
                {
                    diaryList.map((item) => (
                        <ListItem
                            id={item.id}
                            key={item.id}
                            created={item.created}
                            title={item.title}
                            style={{
                                maxWidth: "100%",
                            }}
                        />
                    ))
                }
            </UL>
            <Button style={{ width: '100%', marginTop: '30px' }} onClick={onClickMore}>
                <HiPlus size='15' />
            </Button>
        </div>
    )
}