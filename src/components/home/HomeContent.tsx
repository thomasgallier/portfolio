import React from 'react';
import {HomePart} from "../../app/interface";
import {HomePartData} from "../../app/data/HomePart";
import {InView} from "react-intersection-observer";

export default function HomeContent(props: { onUpdateActivePart: (part: HomePart) => void }) {

    const { onUpdateActivePart } = props

    return (
        <div className={"snap-y snap-mandatory h-screen w-screen overflow-y-scroll scroll-smooth"}>
            { HomePartData().map((part, index) =>
                <InView
                    threshold={1}
                    onChange={(inView, entry) => inView && onUpdateActivePart(part) }
                    key={index}
                >
                    {({ inView, ref, entry }) =>
                        <div
                            id={part.label}
                            className={`snap-center h-full w-full bg-black text-white`}
                            ref={ref}>
                            {part.component}
                        </div>
                    }
                </InView>
            )}
        </div>
    );
}
