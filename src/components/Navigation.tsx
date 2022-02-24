import React from 'react';
import {HomePart} from "../app/interface";
import {HomePartData} from "../app/data/HomePart";

function NavigationPoint(props: { index: number; active: boolean; }) {
    const { index, active } = props

    const activeStyle = () => active ? 'h-4 w-4 bg-white' : 'h-3 w-3 bg-grey_lighter'

    return <span key={index} className={"rounded-full opacity-75 " + activeStyle() } />
}

export default function Navigation(props: { activePart: HomePart }) {

    const { activePart } = props

    return (
        <div className={"fixed top-0 bottom-0 right-8 flex flex-col justify-center items-center gap-y-4 z-50 text-white"}>
            { HomePartData().map((homePart, index) =>
                <NavigationPoint key={index} index={index} active={homePart.label === activePart.label} />
            )}
        </div>
    );
}
