import React from "react";
import "./style.css";
import Fade from "react-reveal";
import money_bags from "../../assets/images/money_bags.png";

const Techswap = () => {
  return (
    <main>
      <div className="techswap">
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
              Welcome to TECHAPP, a platform dedicated to providing innovative solutions and tools for businesses and organizations to streamline their workflow and boost productivity in the digital age.{" "}
              </p>
            </Fade>
            <Fade bottom duration={1050} delay={1050}>
              <p>
              Our platform offers a wide range of services, including project management tools, cloud storage solutions, team collaboration features, and automation tools. With our user-friendly interface, you can easily manage projects, assign tasks to team members, and monitor progress in real-time.{" "}
              </p>
            </Fade>
            <Fade bottom duration={1050} delay={1050}>
              <p>At TECHAPP, we understand the importance of data security and privacy, which is why we implement the latest encryption technology to protect your sensitive information. Our platform also offers reliable cloud storage solutions, so you can access your files anytime, anywhere.</p>
            </Fade>
            <Fade bottom duration={1050} delay={1050}>
              <p>
              We believe that technology can play a significant role in driving business growth and innovation. Our mission is to provide cutting-edge technology solutions to businesses of all sizes, enabling them to achieve their goals and stay ahead of the competition.{" "}
              </p>
            </Fade>
          </div>
          <div className="techswap_revenue">
            <Fade bottom duration={1000}>
              <h2 className="text_blue">GAIASWAP Revenue Streams</h2>
              <img src={money_bags} alt="" />
              <ul className="cs_list text_start">
                <li>
                Our pizzeria uses only the freshest ingredients to make our delicious pies; and,
                </li>
                <li>
                We offer a variety of toppings to suit every taste, from classic pepperoni to gourmet options like prosciutto and arugula.
                </li>
                <li>
                At our pizzeria, we're passionate about making the best pizza possible. From our homemade sauce to our hand-tossed crust, we take pride in every aspect of the pizza-making process.
                </li>
                <li>
                We believe that pizza should be a fun and delicious experience for everyone, which is why we offer a range of toppings to suit all preferences. Whether you prefer a classic margherita or something a little more adventurous, we've got you covered.
                </li>
              </ul>
            </Fade>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Techswap;
