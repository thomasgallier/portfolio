import React, {useEffect, useState} from 'react';
import {ProjectData} from "../../../app/data";
import {HomePartLabel, Project} from "../../../app/interface";

import { ReactComponent as ArrowDown } from "../../../assets/icons/arrow-down.svg";

export default function HomeProject() {

    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    const updateSelected = (project: Project) => {
        if (!selectedProject || selectedProject.label !== project.label) setSelectedProject(project)
        else setSelectedProject(null)
    }

    const projectView = (project: Project) => {
        const id = project.label.toString()
        const isSelected = selectedProject?.label.toString() === id
        const selectedStyle = isSelected ? 'project-image opacity-100' : 'max-h-0 opacity-0'
        const textSelectedStyle = isSelected ? 'flex' : 'hidden'
        const arrowStyle = isSelected ? 'rotate-0' : '-rotate-90'
        return <div className={`flex flex-col pt-8 pb-4 border-b border-white w-full items-center h-full gap-y-4`} id={id} key={id}>
            <div className={"flex flex-row justify-between w-full items-center cursor-pointer"} onClick={() => updateSelected(project)}>
                <div className={"flex flex-col gap-y-2"}>
                    <p className={"uppercase font-thin text-5xl"}>{id}</p>
                    <p>{project.year}</p>
                </div>
                <div className={`transition-all ${arrowStyle}`}><ArrowDown /></div>
            </div>
            <div className={`transition-all flex flex-col lg:flex-row lg:gap-y-0 gap-y-5 ${selectedStyle}`}>
                <div className={`${project.image} bg-center bg-cover bg-no-repeat w-full h-full lg:w-2/3 rounded-l-lg`} />
                <div className={`flex-col h-full w-full gap-y-10 lg:w-1/3 bg-grey p-10 rounded-r-lg ${textSelectedStyle}`}>
                    <p className={"text-xl"}>{ project.description }</p>
                    <a target={"_blank"} href={ project.link } className={"text-sm thin border-b border-white w-max mt-auto"} rel="noreferrer">SEE MORE</a>
                </div>
            </div>
        </div>
    }

    return <div className={"flex flex-col h-full w-screen overflow-hidden snap-x snap-mandatory scroll-smooth bg-black px-8 lg:px-16 pb-16 shadow-lg"}>
        { ProjectData().map((project) => projectView(project)) }
    </div>
}
