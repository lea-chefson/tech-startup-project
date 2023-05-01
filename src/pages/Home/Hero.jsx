import homeVideo from "../../assets/videos/mainVideo.mp4";
import logo from "../../assets/images/logo.png";
import SimpleSlider from "./slicker";



const Hero = (props) => {

  return (
    <>
      <div className="overlay">
        <div className="scale-in-center">
        <img src={logo} alt="" />
        <h1>TECHAPP</h1>
        </div>
        <div className="div_slider_hero">
          <SimpleSlider className="slider_hero"/>
        </div>
      </div>
      <div className="hero">
        <video controls={false} autoPlay loop={true} muted playsInline>
          <source src={homeVideo} type="video/mp4" />
        </video>
      </div>
      <div className="hero-spacer">
      </div>
    </>
  );
};

export default Hero;
