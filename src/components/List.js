import React, { useState, useLayoutEffect } from "react";
import styled from "styled-components";
import Button from "./Button";
import ListItem from "./ListItem";
import { HiPlus } from "react-icons/hi";
import { Data } from "../api";

const UL = styled.ul`
    padding: 0;
    margin: 0;
`

export default function List() {

    const [showingList, setShowingList] = useState([]);
    const [endIndex, setEndIndex] = useState(10);

    useLayoutEffect(() => {
        setShowingList(Data.list.slice(0, endIndex));
    }, [endIndex]);

    if (!showingList) {
        return (<div>로딩 중 입니다...</div>);
    }

    if (showingList.length === 0) {
        return (<div>데이터가 없습니다.</div>)
    }

    const onClickMore = () => {
        setShowingList(showingList.concat(Data.list.slice(endIndex, endIndex + 10)));
        setEndIndex(endIndex + 10);
    };

    return (
        <div>
            <UL>
                {
                    showingList.map((item) => (
                        <ListItem
                            id={item.id}
                            key={item.id}
                            dateTime={item.dateTime}
                            title={item.title}
                            style={{
                                maxWidth: "100%",
                            }}
                        />
                    ))
                }
            </UL>
            <Button style={{ width: '100%', marginTop: '30px' }} onClick={onClickMore}>
                <HiPlus size='15' />
            </Button>
        </div>
    )
}