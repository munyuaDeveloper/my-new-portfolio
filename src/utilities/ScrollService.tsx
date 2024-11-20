import { TOTAL_SCREENS } from './commonUtils';
import { Subject } from 'rxjs';

type VisibilityType = "partial" | "complete";

interface Screen {
    screen_name: string;
    alreadyRendered?: boolean;
}

interface FadeInScreenEvent {
    fadeInScreen: string;
}

interface ScreenInViewEvent {
    screenInView: string;
}

export default class ScrollService {
    static scrollHandler: ScrollService = new ScrollService();
    static currentScreenBroadcaster: Subject<ScreenInViewEvent> = new Subject();
    static currentScreenFadeIn: Subject<FadeInScreenEvent> = new Subject();

    constructor() {
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewport);
    }

    scrollToHireMe = (): void => {
        const contactMeScreen = document.getElementById("ContactMe");
        if (!contactMeScreen) return;
        contactMeScreen.scrollIntoView({ behavior: "smooth" });
    };

    scrollToHome = (): void => {
        const homeScreen = document.getElementById("Home");
        if (!homeScreen) return;
        homeScreen.scrollIntoView({ behavior: "smooth" });
    };

    isElementInView = (elem: HTMLElement, type: VisibilityType): boolean => {
        const rec = elem.getBoundingClientRect();
        const elementTop = rec.top;
        const elementBottom = rec.bottom;

        const partiallyVisible = elementTop < window.innerHeight && elementBottom >= 0;
        const completelyVisible = elementTop >= 0 && elementBottom <= window.innerHeight;

        switch (type) {
            case "partial":
                return partiallyVisible;
            case "complete":
                return completelyVisible;
            default:
                return false;
        }
    };

    checkCurrentScreenUnderViewport = (event: Event): void => {
        if (!event || Object.keys(event).length < 1) return;

        for (const screen of TOTAL_SCREENS as Screen[]) {
            const screenFromDOM = document.getElementById(screen.screen_name);
            if (!screenFromDOM) continue;

            const fullyVisible = this.isElementInView(screenFromDOM, "complete");
            const partiallyVisible = this.isElementInView(screenFromDOM, "partial");

            if (fullyVisible || partiallyVisible) {
                if (partiallyVisible && !screen.alreadyRendered) {
                    ScrollService.currentScreenFadeIn.next({
                        fadeInScreen: screen.screen_name,
                    });
                    screen.alreadyRendered = true;
                    break;
                }
                if (fullyVisible) {
                    ScrollService.currentScreenBroadcaster.next({
                        screenInView: screen.screen_name,
                    });
                    break;
                }
            }
        }
    };
}
