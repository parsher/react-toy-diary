import StyledLink from './StyledLink';
import styled, { css } from "styled-components";
import { HiPlus, HiPencil } from "react-icons/hi";


const Icon = styled.span`
    margin: auto;
    font-size: 26px;
    color: #fff;
    position: relative;
    top: 1px;

    &[data-tooltip]:before {
        bottom: 25%;
        font-family: arial;
        font-weight: 600;
        border-radius: 2px;
        background: rgba(7, 26, 82, 0.6);
        color: #fff;
        content: ${(props) => `"${props['data-tooltip']}"`};
        font-size: 12px;
        transform: scaleX(0);
        transform-origin: right;
        padding: 5px 7px;
        margin-right: 12px;
        position: absolute;
        right: 100%;
        white-space: nowrap;
        -webkit-transition: all 0.05s ease-out 0s;
        transition: all 0.05s ease-out 0s;
    }
`;

const Button = styled.span`
    box-shadow: 0px 5px 11px -2px rgba(0, 0, 0, 0.18),
        0px 4px 12px -7px rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    display: flex;

    width: 40px;
    height: 40px;

    margin: 20px auto 0;
    position: relative;
    -webkit-transition: all 0.1s ease-out;
    transition: all 0.1s ease-out;

    &:active,
    &:focus,
    &:hover {
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);
    }
`;

const LastButton = styled(Button)`
    width: 56px;
    height: 56px;
    background-color: #071a52;

    ${Icon} {
        position: relative;
        top: 1px;
        left: 0;
        transform: rotateZ(0deg);
        -webkit-transition: all 0.12s ease-out;
        transition: all 0.12s ease-out;
    }
`;

const OtherButton = styled(Button)`
    opacity: 0;
    -webkit-transform: translateY(50px);
    -ms-transform: translateY(50px);
    transform: translateY(50px);

    ${() => {
        const BtnColor = {
            "1": '#071a52',
            "2": '#086972',
            "3": '#17b978',
            "4": '#a7ff83',
        };
        let styles = '';
        for (let i = 0; i < 5; i++) {
            styles += `
               &:nth-last-child(${i + 2}) {
                    -webkit-transition-delay: ${20 + i * 20}ms;
                    transition-delay: ${20 + i * 20}ms;
                    background-color: ${BtnColor[String(i + 2)]};
                }
            `
        }
        return css`${styles}`;
    }}
`;



const Container = styled.div`
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, 0);
    margin: auto;

    &:not(:hover) ${LastButton} {
        background-color: #17b978;
    }

    &:hover ${LastButton} {
        box-shadow: none;

        ${Icon} {
            top: -1px;
            left: -1px;
            transform: rotateZ(135deg);
        }
    }

    &:hover ${OtherButton} {
        opacity: 1;
        -webkit-transform: none;
        -ms-transform: none;
        transform: none;
    }

    &:hover ${Icon}[data-tooltip]:before {
        transform: scaleX(1);
        -webkit-transition: all 0.1s ease-out 0.18s;
        transition: all 0.1s ease-out 0.18s;
    }
`;

function Fab() {
    return (
        <Container>
            <OtherButton>
                <Icon data-tooltip="Write">
                    <StyledLink to={`/detail`} style={{ color: 'unset' }}>
                        <HiPencil size="24" />
                    </StyledLink>
                </Icon>
            </OtherButton>
            <LastButton>
                <Icon>
                    <HiPlus size="24" />
                </Icon>
            </LastButton>
        </Container>
    )
}

export default Fab;
