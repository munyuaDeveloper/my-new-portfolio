import './FooterBg.css'
import shapeBg from '../../../assets/Home/shape-bg.png';

const FooterBg = () => {
    return (
        <div className='footer-container'>
            <div className='footer-parent'>
                <img src={shapeBg} alt='no internet connection'/>
            </div>
        </div>
    );
};

export default FooterBg
