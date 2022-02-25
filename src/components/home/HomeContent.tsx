import React from 'react';
import {HomePart} from "../../app/interface";
import {HomePartData} from "../../app/data";
import {InView} from "react-intersection-observer";

export default function HomeContent(props: { onUpdateActivePart: (part: HomePart) => void }) {

    const { onUpdateActivePart } = props

    return <>
        {
            HomePartData().map((part, index) =>
                <InView
                    threshold={0.5}
                    onChange={(inView, entry) => inView && onUpdateActivePart(part) }
                    key={index}
                >
                    {({ inView, ref, entry }) =>
                        <div
                            id={part.label.toString()}
                            className={`h-full w-full text-white`}
                            ref={ref}>
                            {part.component}
                        </div>
                    }
                </InView>
            )}
    </>
}
