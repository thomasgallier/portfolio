import {Strings} from "../assets/Strings";

export enum HomePartLabel {
    INTRODUCTION = Strings.INTRODUCTION,
    PROJECTS = Strings.PROJECTS,
    CONTACT = Strings.CONTACT_ME,
}

export enum ProjectLabel {
    RUNLY = Strings.RUNLY,
    FLAVA = Strings.FLAVA,
    SURGLAB = Strings.SURGLAB,
    HUVII = Strings.HUVII,
}

export interface HomePart {
    label: HomePartLabel
    component: JSX.Element
}

export interface Project {
    label: ProjectLabel
    description: string
    link: string
    year: number
    image: string
}
