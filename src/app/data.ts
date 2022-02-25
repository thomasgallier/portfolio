import {HomePart, HomePartLabel, Project, ProjectLabel} from "./interface";
import HomeIntroduction from "../components/home/part/HomeIntroduction";
import HomeProject from "../components/home/part/HomeProject";
import HomeContact from "../components/home/part/HomeContact";

export const HomePartData = () : HomePart[] => [
    { label: HomePartLabel.INTRODUCTION, component: HomeIntroduction() },
    { label: HomePartLabel.PROJECTS, component: HomeProject() },
    { label: HomePartLabel.CONTACT, component: HomeContact() }
]

export const ProjectData = () : Project[] => [
    {
        label: ProjectLabel.SURGLAB,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at consequuntur distinctio, eius eligendi fugiat inventore laboriosam laborum magni maxime nisi numquam odit qui sunt ut. Asperiores ipsum quis quod?',
        link: 'www.youtube.com',
        year: 2022,
        image: 'bg-project-surglab',
    },
    {
        label: ProjectLabel.RUNLY,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at consequuntur distinctio, eius eligendi fugiat inventore laboriosam laborum magni maxime nisi numquam odit qui sunt ut. Asperiores ipsum quis quod?',
        link: 'www.youtube.com',
        year: 2021,
        image: 'bg-project-runly',
    },
    {
        label: ProjectLabel.FLAVA,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at consequuntur distinctio, eius eligendi fugiat inventore laboriosam laborum magni maxime nisi numquam odit qui sunt ut. Asperiores ipsum quis quod?',
        link: 'www.youtube.com',
        year: 2021,
        image: 'bg-project-surglab',
    },
    {
        label: ProjectLabel.HUVII,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at consequuntur distinctio, eius eligendi fugiat inventore laboriosam laborum magni maxime nisi numquam odit qui sunt ut. Asperiores ipsum quis quod?',
        link: 'www.youtube.com',
        year: 2020,
        image: 'bg-project-surglab',
    },
]
