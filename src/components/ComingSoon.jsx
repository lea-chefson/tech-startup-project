import { Fade } from "react-reveal";
import logo from "../assets/images/onlyLogo.png";

const ComingSoon = ({ pageTitle }) => {
  return (
    <section className="coming_soon d_flex justify_content_center align_items_center flex_column">
      <div className="cs_container">
        <Fade duration={1200} delay={120}>
          <img className="img_fluid" src={logo} alt="" style={{height:"40vh"}}/>
        </Fade>
        <div>
          <br />
          <br />
        </div>
        <Fade duration={1400} delay={170}>
          <h2 className="sec_heading text_blue">{pageTitle}</h2>
        </Fade>
        <div>
          <br />
        </div>
        <Fade duration={1400} delay={170}>
          <h2 className="sec_heading">Coming Soon</h2>
        </Fade>
        <div>
          <br />
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
