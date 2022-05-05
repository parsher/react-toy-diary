import React from "react";
import styled from "styled-components";
import DateTime from "./DateTime";
import StyledLink from "./StyledLink";

const Item = styled.li`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 2px;
    max-width: 200px;
`

const Title = styled.div`
    width: 100%;
    font-size: 12px;
    text-align: right;
`;

export default function ListItem({ id, created, title, style = {} }) {


    return (
        <Item style={style}>
            <DateTime created={created} />
            <Title><StyledLink to={`/detail/${id}`}>{title}</StyledLink></Title>
        </Item>
    )
}