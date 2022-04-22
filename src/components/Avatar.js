import React from 'react';
import styled from 'styled-components';
import { Data } from '../api';

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
    const style = {
        width: '50px',
        height: '50px',
        color: 'black',
        fontWeight: 'bold',
    };

    return (
        <Container width={style.width} height={style.height}>
            <Image width={style.width} height={style.height} src={Data.user.avatar} alt={Data.user.name} />
            <Text fontWeight={style.fontWeight}>{Data.user.name}</Text>
        </Container>
    )
}