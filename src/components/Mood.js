import { ImSad, ImGrin, ImSmile, ImEvil, ImFrustrated, ImShocked, ImBaffled, ImCrying } from 'react-icons/im';
import React from "react";
import PopoverWrapper from './PopoverWrapper';

const Icons = {
    sad: ImSad,
    grin: ImGrin,
    smile: ImSmile,
    evil: ImEvil,
    frustrated: ImFrustrated,
    shocked: ImShocked,
    baffled: ImBaffled,
    crying: ImCrying
}


export default function Mood(props) {

    const Mood = Icons[props.state];
    if (!Mood) return <></>;

    const panel = [...Object.values(Icons)];
    const keys = [...Object.keys(Icons)];

    const onClick = (index) => {
        props.onClick(keys[index]);
    }

    return (
        <PopoverWrapper onClick={onClick} disabled={props.disabled}>
            {
                {
                    button: <Mood size={props.size} />,
                    panel
                }
            }
        </PopoverWrapper>
    )
}