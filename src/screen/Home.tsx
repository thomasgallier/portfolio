import React, {useState} from 'react';
import {HomePartData} from "../app/data/HomePart";
import {HomePart} from "../app/interface";
import Navigation from "../components/Navigation";
import HomeContent from "../components/home/HomeContent";

function Home() {
    const [activePart, setActivePart] = useState<HomePart>(HomePartData()[0])

    return (
        <>
            <Navigation activePart={activePart} />
            <HomeContent onUpdateActivePart={setActivePart}/>
        </>
    );
}

export default Home;
