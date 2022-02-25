import React from 'react';
import {Strings} from "../../../assets/Strings";

import { ReactComponent as ChevronDown } from '../../../assets/icons/arrow-down.svg';
import {HomePartLabel} from "../../../app/interface";
import {HomePartData} from "../../../app/data";

export default function HomeIntroduction() {

    const title = <h1 className={"drop-shadow-2xl z-50"}>Hi, I am Thomas<br />A Mobile Developer<br />based in France.</h1>
    const subtitle = <p className={"w-2/3 lg:w-1/3 drop-shadow-2xl z-50"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Blanditiis cumque debitis, ducimus fugit necessitatibus possimus repellendus sunt velit!
    </p>

    const contact = <button className={"bg-white bg-opacity-25 w-full lg:w-fit z-50 transition-all"} onClick={() => onPressContact()}>
        { Strings.CONTACT_ME }
    </button>

    const name = <p className={"text-xl md:text-2xl lg:text-5xl thin"}>{Strings.PROJECT_NAME}</p>

    const link = (endpoint: string, label: string) => {
        return <a href={endpoint} target="_blank" className={"text-sm thin hidden lg:block"}>{label}</a>
    }

    const topName = () => {
        return <div className={"absolute top-0 left-0 py-6 px-4 lg:px-16 hidden lg:flex flex-col lg:flex-row lg:gap-y-3 z-50 text-white items-center lg:bg-opacity-0 bg-black bg-opacity-25"}>
            <div className={"flex flex-col gap-y-2"}>
                <p className={"lg:block hidden"}>{ name }</p>
                <div className={"flex flex-row gap-x-3"}>
                    { link(Strings.GITHUB, 'Github') }
                    { link(Strings.MALT, 'Malt') }
                </div>
            </div>
        </div>
    }

    const onPressSeeWork = () => document.getElementById(HomePartLabel.PROJECTS.toString())?.scrollIntoView( { behavior: 'smooth', block: 'center' } );
    const onPressContact = () => document.getElementById(HomePartLabel.CONTACT.toString())?.scrollIntoView( { behavior: 'smooth', block: 'center' } );

    return <div className={"relative flex w-full h-screen"}>
        <div className={"absolute bottom-0 top-0 left-8 lg:left-16 right-8 lg:right-16 flex flex-col gap-y-10 justify-center text-left"}>
            { title }
            { subtitle }
            { contact }
        </div>
        <div className={"absolute px-8 lg:px-16 py-6 lg:py-8 bottom-0 right-0 left-0 flex flex-row bg-black"}>
            <div className={"flex flex-row cursor-pointer gap-x-5 items-center"} onClick={() => onPressSeeWork()}>
                <ChevronDown />
                <p>See my work</p>
            </div>
        </div>
        { topName() }
    </div>
}
