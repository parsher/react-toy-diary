import styled from "styled-components"

const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    padding-left: 10px;
    height: 30px;
    margin-top: auto;
    background-color: #dde0ea;
`

export default function Footer() {
    return (
        <StyledFooter>
            2022.04.15. @MinJun
        </StyledFooter>
    )
}