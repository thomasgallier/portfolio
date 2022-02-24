import React from 'react';
import {Strings} from "../../../assets/Strings";

// import { ReactComponent as ChevronDown } from '../../../assets/icons/arrow-down.svg';

export default function HomeIntroduction() {

    const title = <h1 className={"drop-shadow-2xl z-50"}>Hi, I am Thomas<br />A Mobile Developer<br />based in France.</h1>
    const subtitle = <p className={"w-2/3 lg:w-1/3 drop-shadow-2xl z-50"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Blanditiis cumque debitis, ducimus fugit necessitatibus possimus repellendus sunt velit!
    </p>

    const contact = <button className={"bg-white bg-opacity-25 w-full lg:w-fit z-50 transition-all"}>
        { Strings.CONTACT_ME }
    </button>

    return <div className={"relative flex w-full h-full bg-main-introduction bg-no-repeat bg-cover move-bg"}>
        <div className={"absolute bottom-0 top-0 left-4 lg:left-16 right-4 lg:right-16 flex flex-col gap-y-10 justify-center text-left"}>
            { title }
            { subtitle }
            { contact }
        </div>
        <div className={"absolute px-4 lg:px-16 py-6 lg:py-8 bottom-0 right-0 left-0 flex flex-row gap-y-5 bg-black"}>
            <p>See my work</p>
        </div>
    </div>
}
