import React from "react";
import { BsFillSunFill, BsFillCloudSunFill, BsFillCloudLightningRainFill, BsFillCloudSnowFill } from "react-icons/bs";
import PopoverWrapper from "./PopoverWrapper";


const Icons = {
    sun: BsFillSunFill,
    cloud: BsFillCloudSunFill,
    rain: BsFillCloudLightningRainFill,
    snow: BsFillCloudSnowFill
}


export default function Weather(props) {
    const Weather = Icons[props.state];
    if (!Weather) return <></>;

    const panel = [...Object.values(Icons)];
    const keys = [...Object.keys(Icons)];

    const onClick = (index) => {
        props.onClick(keys[index]);
    }

    return (
        <PopoverWrapper onClick={onClick} disabled={props.disabled}>
            {{
                button: <Weather size={props.size} />,
                panel
            }}
        </PopoverWrapper>
    );
}