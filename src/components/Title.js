import React from "react";
import styled from "styled-components";
import { BorderRadius, InputBorder } from "../mixin/Mixins";

const Input = styled.input`
    padding: 10px;
    width: 100%;
    max-width: 100%;
    line-height: 12px;

    ${InputBorder}
    ${BorderRadius}
`

export default function Title(props) {
    return (
        <Input {...props} placeholder="제목을 적어주세요" ></Input>
    )
}