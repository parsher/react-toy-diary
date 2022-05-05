import React, { useCallback, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { userState } from '../store';
import { UserAPI } from '../api/user';
import { USER_ID } from '../const';


const Container = styled.div`
    display: inline-block;
    position: relative;
    text-align: center;
    width: ${(props) => props.width || '50px'};
    height: ${(props) => props.height || '50px'};
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
`;

const Image = styled.img`
    width: ${(props) => props.width || '50px'};
    height: ${(props) => props.height || '50px'};
`

const Text = styled.div`
    color: ${(props) => props.color || 'black'};
    font-weight: ${(props) => props.fontWeight || 'bold'};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export default function Avatar() {
    const [user, setUser] = useRecoilState(userState);

    // 다시 렌더링될때 함수를 재사용하기 위해 useCallback을 사용함.
    const fetchData = useCallback(async () => {
        if (Object.keys(user).length === 0) {
            const data = await UserAPI.get(USER_ID);
            setUser(data);
        }
    }, [user, setUser]);


    useLayoutEffect(() => {
        fetchData();
    }, [fetchData]);

    const style = {
        width: '50px',
        height: '50px',
        color: 'black',
        fontWeight: 'bold',
    };

    return (
        <Container width={style.width} height={style.height}>
            <Image width={style.width} height={style.height} src={user.avatar} alt={user.name} />
            <Text fontWeight={style.fontWeight}>{user.name}</Text>
        </Container>
    )
}