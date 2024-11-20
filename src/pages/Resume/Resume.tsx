import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
import { FaRegBuilding } from 'react-icons/fa';
import { PiToolboxFill } from 'react-icons/pi';
import { GrLocation } from 'react-icons/gr';
import { CiCalendar } from 'react-icons/ci';

import { WorkExperience } from "../../constants/ResumeData"

const Resume = ({ id }: { id: string }) => {

    const fadeInScreenHandler = (screen: { fadeInScreen: string }) => {
        if (screen.fadeInScreen !== id) return;

        Animations.animations.fadeInScreen(id);
    };
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);



    return (
        <div className='bg-red-50 min-w-full py-10'>
            <div className="container screen-container fade-in mx-auto px-5 sm:px-0" id={id || ""}>
                <div className="resume-content">
                    <ScreenHeading title={"My Career Journey"} subHeading={"An Overview of My Professional Background"} />
                    <section className="colorlib-experience mt-10">
                        <div className="colorlib-narrow-content">
                            <div className="mt-10">
                                <div className="timeline-centered relative">
                                    {
                                        WorkExperience.map((experience, index) => (
                                            <article className="timeline-entry" key={index}>
                                                <div className="timeline-entry-inner">
                                                    <div className="timeline-icon bg-orange-500">
                                                        <div className="mt-3 ml-3 text-white">
                                                            <PiToolboxFill className="" />
                                                        </div>
                                                    </div>

                                                    <div className="timeline-label">
                                                        <div className='mb-2'>
                                                            <span className='capitalize flex items-center gap-2 text-orange-600 font-semibold text-xl'>
                                                                {experience.title}
                                                            </span>
                                                        </div>
                                                        <div className='flex flex-col sm:flex-row  gap-6 justify-between'>
                                                            <span className='capitalize flex items-center gap-2 text-orange-600 '>
                                                                <FaRegBuilding className='text-lg' />
                                                                <span>
                                                                    {experience.company}
                                                                </span>

                                                            </span>
                                                            <div className='flex gap-10 '>
                                                                <span className='capitalize flex items-center gap-2 text-orange-600 font-thin italic'>
                                                                    <CiCalendar className='text-lg' />
                                                                    <span className='text-xs sm:text-base'>
                                                                        {experience.dates}
                                                                    </span>
                                                                </span>

                                                                <span className='capitalize flex items-center gap-2 text-orange-600 font-thin italic'>
                                                                    <GrLocation className='text-lg' />
                                                                    <span className='text-xs sm:text-base'>
                                                                        {experience.location}
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <ul className='list-disc pl-6'>
                                                            {
                                                                experience.responsibilities.map((res, index) => (
                                                                    <li className='mt-2' key={index}>{res}</li>
                                                                ))
                                                            }
                                                        </ul>
                                                        <div className="hidden md:flex gap-4 my-5 mx-0 md:mx-5">
                                                            {
                                                                experience.stack.map((stack, index) => (
                                                                    <span key={index} className="bg-red-100 rounded-full py-2 px-4">{stack}</span>
                                                                ))
                                                            }

                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>

    );
};

export default Resume;

