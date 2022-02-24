import React, {useEffect, useState} from 'react';
import {HomePartData} from "../app/data/HomePart";
import {HomePart} from "../app/interface";
import Navigation from "../components/Navigation";
import HomeContent from "../components/home/HomeContent";

function Home() {
    const [activePart, setActivePart] = useState<HomePart>(HomePartData()[0])

    const onClickSetPart = (part: HomePart) => {
        const section = document.getElementById(part.label)
        if (section) {
            section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
            setActivePart(part)
        }
    }

    return (
        <>
            <Navigation
                onClickNewPart={onClickSetPart}
                activePart={activePart}
            />
            <HomeContent
                onUpdateActivePart={setActivePart}
            />
        </>
    );
}

export default Home;
