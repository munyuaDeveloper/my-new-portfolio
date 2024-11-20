import { TOTAL_SCREENS } from '../../../utilities/commonUtils';
import './Header.css';
import { useState } from "react";
import { FaBars } from 'react-icons/fa';

interface Screen {
    screen_name: string;
    menu: string;
    component: ({ id }: {
        id: string;
    }) => JSX.Element;
}

export default function Header() {
    const [selectedScreen, setSelectedScreen] = useState(0);
    const [showHeaderOptions, setShowHeaderOptions] = useState(false);

    const getHeaderOptions = () => {
        return TOTAL_SCREENS.map((screen, i) => (
            <div key={screen.screen_name}
                className={getHeaderOptionsClasses(i)}
                onClick={() => switchScreen(i, screen)}
            >
                <span className='text-sm md:text-base'>{screen.menu}</span>
            </div>
        ));
    };

    const getHeaderOptionsClasses = (index: number) => {
        let classes = "header-option ";
        if (index < TOTAL_SCREENS.length - 1)
            classes += "header-option-separator ";

        if (selectedScreen === index) classes += "selected-header-option ";

        return classes;
    };

    const switchScreen = (index: number, screen: Screen) => {
        const screenComponent = document.getElementById(screen.screen_name)
        if (!screenComponent)
            return;

        screenComponent.scrollIntoView({ behavior: 'smooth' });
        setSelectedScreen(index);
        setShowHeaderOptions(false);
    };

    return (
        <div>
            <div className='header-container '
                onClick={() => setShowHeaderOptions(!showHeaderOptions)}
            >
                <div className='header-parent '>
                    <div className='header-hamburger' onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                        <FaBars className='header-hamburger-bars' />
                    </div>
                    <div className='header-logo '>
                        <span className='first-title '>Peter </span>
                        <span className='second-title '>MUNYUA</span>
                    </div>
                    <div className={(showHeaderOptions)
                        ? "header-options show-hamburger-options"
                        : "header-options"}>
                        {getHeaderOptions()}
                    </div>
                </div>
            </div>
        </div>
    )
}

