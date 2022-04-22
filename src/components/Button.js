import styled from "styled-components"
import { BorderRadius, Color } from "../mixin/Mixins";


const StyleButton = styled.button`
    position: relative;
    display: inline-block;
    padding: 0;
    margin: 0;
    text-align: center;
    vertical-align: middle;
    border: none;
    outline: none;
    cursor: pointer;

    margin-top: 10px;

    width: 120px;
    min-height: 20px;
    line-height: 12px;

    font-weight: bold;

    ${BorderRadius}

    ${Color}

    & + & {
        margin-left: 4px;
    }
`

function Button({ children, ...others }) {
    return (
        <StyleButton {...others}>
            {children}
        </StyleButton>
    )
}


Button.defaultProps = {
    color: 'black'
}


export default Button;