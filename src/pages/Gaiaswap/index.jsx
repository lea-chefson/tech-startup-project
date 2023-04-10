import React from "react";
import "./style.css";
import Fade from "react-reveal";
import money_bags from "../../assets/images/money_bags.png";

const Gaiaswap = () => {
  return (
    <main>
      <div className="gaiaswap">
        <div
          className="img_content"
          style={{"--background": "url(https://www.impactsolar.co.th/application/files/8315/2508/0720/solar_pump_bannerV1.png)"}}
        >
          <div className="overlay"></div>
          <Fade top duration={1000}>
            <h2 className="text_blue">GAIASWAP</h2>
          </Fade>
        </div>
        <div className="cs_container text_center">
          <div className="g_content">
            <Fade bottom duration={1050} delay={1050}>
              <p>
                GAIASWAP is a dedicated tokenised Eco-commodity trading platform
                on the Ethereum MainNet created by our solution partners at
                Nahmii. It is a scalable layer 2 blockchain infrastructure
                allowing its users to instantly trade Carbon Credits; Renewable
                Energy Credits; Plastic Credits and Ecology Restoration Credits
                globally.{" "}
              </p>
            </Fade>
            <Fade bottom duration={1050} delay={1050}>
              <p>
                GAIASWAP over time will have the largest accessible volume for
                Eco-commodity credits in the world and rewards traders through
                liquidity yields.{" "}
              </p>
            </Fade>
            <Fade bottom duration={1050} delay={1050}>
              <p>GAIASWAP is the NASDAQ of the Eco-commodity Market.</p>
            </Fade>
            <Fade bottom duration={1050} delay={1050}>
              <p>
                With GAIASWAP all types of businesses and organization will be
                able to achieve their sustainability goals at the flick of a
                button.{" "}
              </p>
            </Fade>
          </div>
          <div className="gaiaswap_revenue">
            <Fade bottom duration={1000}>
              <h2 className="text_blue">GAIASWAP Revenue Streams</h2>
              <img src={money_bags} alt="" />
              <ul className="cs_list text_start">
                <li>
                  Liquidation of governance tokens (Owing to decentralization,
                  long-term the Company must hold less than 50%)
                </li>
                <li>
                  Trading fees received from governance tokens not liquidated
                </li>
                <li>
                  Yield on providing credit inventory into the platform (12% -
                  25% estimated)
                </li>
                <li>
                  Providing inventory to external market makers (profit share)
                </li>
                <li>
                  Additional yield by earning platform tokens based on their
                  platform activity (rewards)
                </li>
              </ul>
            </Fade>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Gaiaswap;
