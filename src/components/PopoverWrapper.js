
import React, { useState } from "react";
import { Popover } from '@headlessui/react';
import { usePopper } from 'react-popper';

export default function PopoverWrapper({ children, onClick, disabled }) {
    let [referenceElement, setReferenceElement] = useState();
    let [popperElement, setPopperElement] = useState();
    let { styles, attributes } = usePopper(referenceElement, popperElement);

    return (
        <Popover>
            <Popover.Button disabled={disabled} ref={setReferenceElement} style={{ backgroundColor: "transparent", borderColor: 'transparent', padding: '0', color: 'inherit', cursor: disabled ? '' : 'pointer' }}>
                {children.button}
            </Popover.Button>
            <Popover.Panel
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
            >
                {({ close }) => (
                    Array.isArray(children.panel) ?
                        children.panel.map(
                            (Panel, index) =>
                                <Panel
                                    key={index}
                                    style={{ display: 'block', marginBottom: '3px', cursor: 'pointer' }}
                                    size='24'
                                    onClick={
                                        (e) => {
                                            e.stopPropagation();

                                            onClick(index);
                                            close();
                                        }
                                    }
                                />
                        )
                        : children.panel
                )}
            </Popover.Panel>
        </Popover>
    )
}