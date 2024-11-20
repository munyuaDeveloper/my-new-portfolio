import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./ContactMe.css";
import Footer from "../Home/Footer/Footer";

export default function Contactme({ id }: { id: string }) {
  const fadeInScreenHandler = (screen: { fadeInScreen: string }) => {
    if (screen.fadeInScreen !== id) return;
    Animations.animations.fadeInScreen(id);
  };
  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


  return (
    <div className="main-container " id={id || ""}>
      <Footer />
    </div>
  );
}
