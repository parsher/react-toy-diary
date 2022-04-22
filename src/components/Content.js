import React from "react";
import styled from "styled-components";
import { BorderRadius, InputBorder } from "../mixin/Mixins";

const TextArea = styled.textarea`
    padding: 10px;
    width: 100%;
    height: 200px;
    max-width: 100%;
    line-height: 12px;

    ${InputBorder}
    ${BorderRadius}
`

export default function Content(props) {
    const placeHolder = '내용을 적어주세요.'

    return (
        <TextArea {...props} placeholder={placeHolder} >
        </TextArea>
    )
}