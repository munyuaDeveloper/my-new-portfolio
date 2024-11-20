import './Footer.css';
import ScrollService from "../../../utilities/ScrollService";
import { FaArrowUp, FaRegCopyright, FaSquareXTwitter } from 'react-icons/fa6';
import ScreenHeading from '../../../utilities/ScreenHeading/ScreenHeading';
import { CiInstagram, CiLinkedin } from 'react-icons/ci';
import { FaGithubSquare } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className='footer-container bg-red-50 py-5'>
            <div className='footer-parent'>
                <ScreenHeading subHeading={"Lets keep in Touch"} title={"Contact Me"} />

                <div className='flex gap-5 sm:gap-12 justify-center mt-8 text-3xl'>
                    <a href='https://www.linkedin.com/in/peter-munyua' target='_blank' rel="noreferrer" className='bg-white p-3 rounded-full shadow-2xl'>
                        <CiLinkedin className='' />
                    </a>
                    <a href='https://www.linkedin.com/in/peter-munyua' target='_blank' rel="noreferrer" className='bg-white p-3 rounded-full shadow-2xl'>
                        <FaGithubSquare className='' />
                    </a>
                    <div className='bg-white p-3 rounded-full shadow-2xl cursor-pointer'>
                        <FaSquareXTwitter />
                    </div>
                    <div className='bg-white p-3 rounded-full shadow-2xl cursor-pointer'>
                        <CiInstagram />
                    </div>

                </div>
                <div className='flex items-center mt-8 justify-center text-sm sm:text-base'>
                    <FaRegCopyright />
                    <span>2024 Peter. All Rights Reserved.</span>
                </div>
            </div>
            <div className="scroll-container">
                <button
                    className="btn-scroll flex items-center justify-center"
                    onClick={() => ScrollService.scrollHandler.scrollToHome()}
                >
                    <FaArrowUp className='text-white' />
                </button>
            </div>
        </div>

    );
}

