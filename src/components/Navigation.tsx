import React from 'react';
import {HomePart} from "../app/interface";
import {HomePartData} from "../app/data";
import {Strings} from "../assets/Strings";

function NavigationPoint(props: { onClick: () => void; label: string; index: number; active: boolean; }) {
    const { onClick, label, index, active } = props

    const activeStyleText = () => active ? 'opacity-100' : 'opacity-50'

    const transition = ' transition duration-500 ease-in-out '

    return <p key={index} className={'cursor-pointer h-4 font-bold text-left text-sm hover:opacity-100 text-white ' + transition + activeStyleText()} onClick={onClick}>{label}</p>
}

export default function Navigation(props: { onClickNewPart: (part: HomePart) => void; activePart: HomePart; }) {

    const { onClickNewPart, activePart } = props

    return (
        <div className={"fixed top-0 right-0 py-6 px-4 lg:px-16 lg:w-max w-full flex flex-col lg:flex-row lg:gap-y-3 justify-end z-50 text-white items-center"}>
            <div className={"flex flex-row gap-x-4 justify-center"}>
                { HomePartData().map((homePart, index) =>
                    <NavigationPoint
                        key={index}
                        onClick={() => onClickNewPart(homePart)}
                        label={homePart.label.toString()}
                        index={index}
                        active={homePart.label === activePart.label}
                    />
                )}
            </div>
        </div>
    );
}
