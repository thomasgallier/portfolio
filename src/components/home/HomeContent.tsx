import React, {useState} from 'react';
import {HomePart} from "../../app/interface";
import {HomePartData} from "../../app/data/HomePart";
import {InView} from "react-intersection-observer";

export default function HomeContent(props: { onUpdateActivePart: (part: HomePart) => void }) {

    const { onUpdateActivePart } = props

    return (
        <div className={"snap-y snap-mandatory h-screen w-screen overflow-scroll"}>
            { HomePartData().map((part, index) =>
                <InView threshold={0.5} onChange={(inView, entry) => inView && onUpdateActivePart(part) } key={index}>
                    {({ inView, ref, entry }) =>
                        <div
                            className={`snap-center h-screen w-screen bg-main-${index + 1} bg-no-repeat bg-cover`}
                            ref={ref}>
                            {part.component}
                        </div>
                    }
                </InView>
            )}
        </div>
    );
}
