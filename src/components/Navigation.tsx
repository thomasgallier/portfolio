import React from 'react';
import {HomePart} from "../app/interface";
import {HomePartData} from "../app/data/HomePart";

function NavigationPoint(props: { onClick: () => void; label: string; index: number; active: boolean; }) {
    const { onClick, label, index, active } = props

    const activeStyleText = () => active ? 'opacity-100' : 'opacity-50'

    const transition = ' transition duration-500 ease-in-out '

    return <p key={index} className={'cursor-pointer h-4 font-bold text-left text-sm hover:opacity-100 text-white ' + transition + activeStyleText()} onClick={onClick}>{label}</p>
}

export default function Navigation(props: { onClickNewPart: (part: HomePart) => void; activePart: HomePart; }) {

    const { onClickNewPart, activePart } = props

    const name = <p className={"text-xl md:text-2xm lg:text-5xl thin"}>Gallier Thomas</p>
    const developer = <p className={"text-sm thin hidden lg:block"}>Mobile Developer</p>

    return (
        <div className={"fixed top-8 left-4 lg:left-16 right-4 lg:right-16 flex flex-col lg:flex-row gap-y-3 justify-between z-50 text-white"}>
            <div className={"flex flex-col gap-y-2"}>
                { name }
                { developer }
            </div>
            <div className={"flex flex-row gap-x-4"}>
                { HomePartData().map((homePart, index) =>
                    <NavigationPoint
                        key={index}
                        onClick={() => onClickNewPart(homePart)}
                        label={homePart.label}
                        index={index}
                        active={homePart.label === activePart.label}
                    />
                )}
            </div>
        </div>
    );
}
