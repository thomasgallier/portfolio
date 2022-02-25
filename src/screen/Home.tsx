import React, {useEffect, useState} from 'react';
import {HomePartData} from "../app/data";
import {HomePart} from "../app/interface";
import Navigation from "../components/Navigation";
import HomeContent from "../components/home/HomeContent";

function Home() {
    const [activePart, setActivePart] = useState<HomePart>(HomePartData()[0])

    const onClickSetPart = (part: HomePart) => {
        const section = document.getElementById(part.label.toString())
        if (section) { section.scrollIntoView( { behavior: 'smooth', block: 'start' } ) }
    }

    return (
        <div className={"bg-main-introduction bg-no-repeat bg-cover bg-fixed move-bg"}>
            <Navigation
                onClickNewPart={onClickSetPart}
                activePart={activePart}
            />
            <HomeContent
                onUpdateActivePart={setActivePart}
            />
        </div>
    );
}

export default Home;
