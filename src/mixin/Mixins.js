import { css } from 'styled-components';
import { darken, lighten } from "polished";

export const BorderRadius = ({ theme }) => {
    const radius = theme.shape.radius;
    return css`
        border-radius: ${radius};
    `;
}

export const InputBorder = () => {
    return css`
        border: 1px solid #ccc;
        box-shadow: 1px 1px 1px #999;
        box-sizing: border-box;
    `;
}

export const Color = ({ color, theme }) => {
    const selected = theme.palette[color];
    return css`
            color: ${selected.color};
            background: ${selected.background};
            
            &:hover {
                background: ${lighten(0.1, selected.background)};
            }
            
            &:active {
                background: ${darken(0.1, selected.background)};
            }
        `;
}