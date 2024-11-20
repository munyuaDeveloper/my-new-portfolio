import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";
import TechStack from "../../assets/Home/tech-stacks.png"
import { FaDownload } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";

export default function AboutMe({id}: {id: string}) {
  const fadeInScreenHandler = (screen: {  fadeInScreen: string;}) => {
    if (screen.fadeInScreen !== id) return;
    Animations.animations.fadeInScreen(id);
  };
  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "Peter is a Front-End Engineer with 6+ years of experience in software engineering, a passion for technology, and a knack for continuous learning. His skill set encompasses a wide range of industry-standard technologies, including Angular, HTML, CSS, JavaScript, React.js, React Native, and Node.js. Peter also has a proven track record in building user-friendly, dynamic interfaces and visually engaging applications, as well as in optimizing performance. On top of this, Peter is highly collaborative, he enjoys delivering solutions that drive business success, and he demonstrates strong mentorship skills, which makes him a valuable addition to any development team.",
    highlights: {
      bullets: [
        "Converting UI/UX designs into pixel-perfect, responsive web pages",
        "Building web applications with React, Angular, and Node.js",
        "Creating RESTful and GraphQL APIs with Express.js",
        "Developing cross-platform apps using Ionic and React Native",
        "Optimizing website performance and load times",
        "Conducting unit and integration testing with Jest, Enzyme, and Cypress"
      ],
      heading: "Core Competencies and Achievements",
    },
  };

  return (
    <div
      className="screen-container container mx-auto text-lg"
      id={id || ""}
    >
      <div className="about-me-parent w-full px-5 sm:px-0 py-10">
        <ScreenHeading
          title={"About Me"}
          subHeading={"My Portfolio Overview"}
        />
        <div className="flex items-center justify-between gap-10 pb-8">
          <div className="about-me-profile w-1/3 h-full">

            <img src={TechStack} />
          </div>
          <div className="flex-1 w-full about-me-details text-justify mt-4">
            <span className="">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="flex flex-col sm:flex-row w-full justify-between items-center">
              <div className="my-14">
                <div className="highlight-heading font-semibold">
                  <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                </div>
                {
                  SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
                    <div className="flex flex-grow items-start gap-2 mt-2" key={i}>
                      <CiCircleCheck className="text-2xl text-orange-500 font-bold" />
                      <span className="text-base">{value}</span>
                    </div>
                  ))
                }
              </div>
              <div className="about-me-options flex ">
                <button
                  className="btn primary-btn"
                  onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                >
                  Let's Discuss!
                </button>
                <a
                  href="Peter_Munyus_Resume.pdf"
                  download="Peter Munyua Resume.pdf"
                >
                  <button className="btn highlighted-btn flex justify-between items-center p-3 text-white">
                    <span>Get My Resume</span>
                    <FaDownload className="text-lg" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
