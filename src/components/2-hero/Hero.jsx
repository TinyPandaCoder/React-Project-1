import "./hero.css";
import Lottie from "lottie-react";
import developer from "../../../public/animation/developer.json";

const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <img
            className="avatar"
            src="public/icOrg.jpg"
            alt="Mahmoud Alaa Profile"
          />
          <div className="icon-verified"></div>
        </div>
        <h1 className="title">
          Software Designer, founder and amature astronaut.
        </h1>
        <p className="subtitle">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
          error ullam temporibus dolorum qui hic consequatur quibusdam tenetur
          fuga. Minima magnam quos aliquam dolorum, ut quo labore molestias
          asperiores quibusdam.
        </p>
        <div className="all-icons flex">
          <div className="icon  icon-twitter"></div>
          <div className="icon  icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>
      <div className="right-section animation ">
        <Lottie
          style={{ height: 500 }}
          animationData={developer}
          loop={true}
        />
      </div>
    </section>
  );
};

export default Hero;
