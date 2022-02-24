import {HomePart} from "../interface";
import {Strings} from "../../assets/Strings";
import HomeIntroduction from "../../components/home/part/HomeIntroduction";
import HomeProject from "../../components/home/part/HomeProject";
import HomeContact from "../../components/home/part/HomeContact";

export const HomePartData = () : HomePart[] => [
    { label: Strings.INTRODUCTION, component: HomeIntroduction() },
    { label: Strings.PROJECTS, component: HomeProject() },
    { label: Strings.CONTACT_ME, component: HomeContact() }
]
