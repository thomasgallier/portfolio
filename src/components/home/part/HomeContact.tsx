import React from 'react';
import {Strings} from "../../../assets/Strings";

export default function HomeContact() {

    const text = <p className={"text-xl md:text-xl lg:text-2xl thin text-center"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cum cumque cupiditate fuga illo illum laboriosam non. Dolore labore minus modi necessitatibus nesciunt officiis perspiciatis unde. Aut debitis quibusdam sunt.
    </p>

    const button = <button className={"bg-white bg-opacity-25 w-full lg:w-fit z-50 transition-all"}>
        { Strings.CONTACT_ME }
    </button>

    return <div className={"flex flex-col justify-center items-center w-screen h-full lg:py-40 py-20 gap-y-10 lg:w-1/2 w-4/5 mx-auto"}>
        { text }
        { button }
    </div>
}
