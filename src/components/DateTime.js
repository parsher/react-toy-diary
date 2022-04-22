import React from "react";
import styled from "styled-components";
import { formatDateTime } from "../utils";

const DateTimeDiv = styled.div`
    font-size: 12px;
`
const Date = styled.div`
    width: 100%;
    font-weight: bold;
`;

const Time = styled.span`
    margin-left: 2px;
    font-weight: normal;
`;

export default function DateTime({ dateTime }) {
    const [date, time] = formatDateTime(dateTime).split('일 ');

    return (
        <DateTimeDiv>
            <Date>{date + '일'}<Time>({time})</Time></Date>
        </DateTimeDiv>
    )
}