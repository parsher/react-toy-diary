import Logo from '../components/Logo';
import Avatar from "../components/Avatar";
import styled from 'styled-components';
import StyledLink from '../components/StyledLink';


const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: #dde0ea;
`

export default function Header() {
    return (
        <StyledHeader>
            <StyledLink to='/'><Logo size='50' /></StyledLink>
            <Avatar />
        </StyledHeader>
    )
}