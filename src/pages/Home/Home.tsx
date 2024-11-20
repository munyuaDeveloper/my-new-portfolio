import Header from './Header/Header';
import Profile from './Profile/Profile';
import './Home.css';
import FooterBg from "./FooterBg/FooterBg";

export default function Home({id}: {id: string}) {
    return (
        <div className='home-container' id={id || ""}>
            <Header/>
            <Profile/>
            <FooterBg/>
        </div>
    );
}

