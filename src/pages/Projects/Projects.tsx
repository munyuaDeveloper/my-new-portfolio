import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";
import ArdhisasaImage from "../../assets/images/ardhisasa.png";
import SkillcatImage from "../../assets/images/skillcat.png";
import FastlaneImage from "../../assets/images/fastlane.png";
import FastlaneAdminImage from "../../assets/images/fastlane-admin.png";
import KyoskImage from "../../assets/images/kyosk.png";
import EcommerceImage from "../../assets/images/ecommerce.png";
import EcommerceAdmin from "../../assets/images/ecommerce-admin.png";

export default function Projects({id}: {id: string}) {
    const fadeInScreenHandler = (screen: {fadeInScreen: string}) => {
        if (screen.fadeInScreen !== id) return;
        Animations.animations.fadeInScreen(id);
    };

    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const options = {
        loop: true,
        margin: 40,
        nav: false,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1000: {
                items: 2,
            },
        },
    };

    return (
        <div className="mt-14  fade-in" id={id || ""}>
            <ScreenHeading
                title={"My Projects"}
                subHeading={"Below is some of the project I have been involved in."}
            />
            <section className="project-section px-0 mt-4">
                <div className="container mx-auto ">
                    <div className="row">
                        <OwlCarousel
                            className="owl-carousel"
                            id="project-carousel"
                            {...options}
                        >
                            <div className="col-lg-12 shadow-xl mb-10">
                                <div className="project-item">
                                    <div className="project-desc">
                                        <img src={KyoskImage} alt='' />
                                    </div>
                                    <div className="project-info">
                                        <h5>Kyosk Digital Website</h5>
                                        <p>- Stack: Angular, Ionic and Cordova</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 shadow-xl">
                                <div className="project-item">
                                    <div className="project-desc">
                                        <img src={SkillcatImage} alt='' />
                                    </div>
                                    <div className="project-info">
                                        <h5>Skillcat Application</h5>
                                        <p>- Stack: Angular, Ionic and Cordova</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 shadow-xl">
                                <div className="project-item">
                                    <div className="project-desc">
                                        <img src={ArdhisasaImage} alt='' />
                                    </div>
                                    <div className="project-info">
                                        <h5>Ardhisasa</h5>
                                        <p>- Stack: Angular, SCSS, Angular Material, LeafLet and pdfMake</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 shadow-xl">
                                <div className="project-item">
                                    <div className="project-desc">
                                        <img src={FastlaneImage} alt='' />
                                    </div>
                                    <div className="project-info">
                                        <h5>Fastlane Spirits</h5>
                                        <p>- Stack: Angular, SCSS, Bootstrap, and pdfMake</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 shadow-xl">
                                <div className="project-item">
                                    <div className="project-desc">
                                        <img src={FastlaneAdminImage} alt='' />
                                    </div>
                                    <div className="project-info">
                                        <h5>Fastlane Spirits Admin</h5>
                                        <p>- Stack: Angular, SCSS, Bootstrap, and pdfMake</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 shadow-xl">
                                <div className="project-item">
                                    <div className="project-desc">
                                        <img src={EcommerceImage} alt='' />
                                    </div>
                                    <div className="project-info">
                                        <h5>Ecommerce Web Applicatioon  </h5>
                                        <p>- Stack: Angular, SCSS, Bootstrap, and pdfMake</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 shadow-xl">
                                <div className="project-item">
                                    <div className="project-desc">
                                        <img src={EcommerceAdmin} alt='' />
                                    </div>
                                    <div className="project-info">
                                        <h5>Ecommerce Admin Dashboard</h5>
                                        <p>- Stack: Angular, SCSS, Bootstrap, and pdfMake</p>
                                    </div>
                                </div>
                            </div>

                        </OwlCarousel>
                    </div>
                </div>
            </section>
        </div>
    );
}
