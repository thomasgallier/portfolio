import React from 'react';
import {Strings} from "../../../assets/Strings";

export default function HomeIntroduction() {

    const title = <h1 className={"drop-shadow-2xl z-50"}>Hi, I am Thomas<br />A Mobile Developer<br />based in France.</h1>
    const subtitle = <p className={"w-2/3 lg:w-1/4 drop-shadow-2xl z-50"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Blanditiis cumque debitis, ducimus fugit necessitatibus possimus repellendus sunt velit!
    </p>

    const contact = <button className={"bg-white bg-opacity-25 w-full lg:w-fit z-50 transition-all"}>
        { Strings.CONTACT_ME }
    </button>

    return <div className={"relative flex w-full h-full bg-main-introduction bg-no-repeat bg-cover"}>
        <div className={"absolute bottom-8 right-8 left-8 flex flex-col gap-y-5 items-end text-right"}>
            { title }
            { subtitle }
            { contact }
        </div>
    </div>
}
