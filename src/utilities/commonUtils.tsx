import Home from '../pages/Home/Home';
import AboutMe from '../pages/AboutMe/AboutMe';
import Resume from '../pages/Resume/Resume';
import ContactMe from '../pages/ContactMe/ContactMe';
import Projects from '../pages/Projects/Projects';

export const TOTAL_SCREENS = [
    {
        screen_name: "Home",
        menu: "Home",
        component: Home,
    },
    {
        screen_name: "AboutMe",
        menu: "About Me",
        component: AboutMe,
    },
    {
        screen_name: "Resume",
        menu: "Resume",
        component: Resume,
    },
    {
        screen_name: "Projects",
        menu: "Projects",
        component: Projects,
    },
    {
        screen_name: "ContactMe",
        menu: "Contact Me",
        component: ContactMe,
    },

];


export const GET_SCREEN_INDEX = (screen_name: string) => {
    if (!screen_name) return -1;

    for (let i = 0; i < TOTAL_SCREENS.length; i++) {
        if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
    }

    return -1;
};
