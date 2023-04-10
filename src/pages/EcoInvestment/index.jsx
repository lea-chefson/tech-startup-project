import React from "react";
import "./style.css";
import Fade from "react-reveal";
const EcoInvestment = () => {
  return (
    <>
      <div className="ecoinvestment">
        <div className="img_content">
          <div className="overlay"></div>
        </div>
        <div className="g_content">
          <Fade top duration={1000} delay={1000}>
            <h2>Eco-Investments</h2>
          </Fade>
          <Fade bottom duration={1050} delay={1050}>
            <p>
              Crypteco are committed to supporting communities and our ecosystem
              through our Eco-Investment agenda whereby we provide two clear
              avenues for investment into sustainability companies and
              initiates:
            </p>
          </Fade>
          <ul>
            <Fade bottom duration={1050} delay={1050}>
              <li>
                1. We will commit a % of our Profits directly to sustainable
                initiatives; and,
              </li>
            </Fade>
            <Fade bottom duration={1050} delay={1050}>
              <li>
                2. We can provide avenues for Companies, Organizations and
                Investors to invest into sustainable initiatives.
              </li>
            </Fade>
          </ul>
          <Fade bottom duration={1050} delay={1050}>
            <p>
              Crypteco encourage those seeking investment into their
              sustainability initiatives to contact our team to enquire about we
              can provide.
            </p>
          </Fade>
          <Fade bottom duration={1050} delay={1050}>
            <p>
              We are interested in all ideas that serve to support the
              sustainability initiates and it would be our pleasure to discuss
              these at any time.
            </p>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default EcoInvestment;
