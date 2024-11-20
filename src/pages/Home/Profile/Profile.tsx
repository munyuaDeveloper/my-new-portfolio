import Typical from 'react-typical';
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";
import { FaDownload, FaGithub } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className='colz'>
                        <div className='colz-icon flex justify-center gap-4'>

                            <a href='https://www.linkedin.com/in/peter-munyua' target='_blank' rel="noreferrer">
                                <CiLinkedin className="text-xl" />
                            </a>
                            <a href='https://github.com/munyuaDeveloper' target='_blank' rel="noreferrer">
                                <FaGithub className="text-xl" />
                            </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className='primary-text'>
                
                            Hello, I'm <span className="highlighted-text">Peter</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className='primary-text'>
                        
                            <h1>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Angular Developer",
                                        1000,
                                        "React Developer",
                                        1000,
                                        "Ionic Developer",
                                        1000,
                                        "Nodejs Developer",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Experienced full-stack developer with 5+ years of development.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options flex px-5">
                        <button className="btn primary-btn"
                            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                        > Let's Discuss!
                        </button>
                        <a href='Peter_Munyua_Resume.pdf' download='PeterMunyuaResume.pdf'>
                            <button className="btn highlighted-btn flex justify-between items-center p-3 text-white">
                                <span>Get My Resume</span>
                                <FaDownload className="text-lg" />
                            </button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>
                    </div>
                </div>
            </div>
        </div>
    );
}
