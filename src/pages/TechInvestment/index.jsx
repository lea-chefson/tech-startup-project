import React from "react";
import "./style.css";
import Fade from "react-reveal";
const TechInvestment = () => {
  return (
    <>
      <div className="techinvestment">
        <div className="img_content">
          <div className="overlay"></div>
        </div>
        <div className="g_content">
          <Fade top duration={1000} delay={1000}>
            <h2>TechInvestments</h2>
          </Fade>
          <Fade bottom duration={1050} delay={1050}>
            <p>
            At TECHAPP, we are dedicated to providing innovative solutions and tools for businesses and organizations to streamline their workflow and boost productivity in the digital age. With our user-friendly interface and cutting-edge technology, we help businesses of all sizes achieve their goals and stay ahead of the competition.
            </p>
          </Fade>
          <ul>
            <Fade bottom duration={1050} delay={1050}>
              <li>
              1. Our pizzeria uses only the freshest ingredients to make our delicious pies; and,
              </li>
            </Fade>
            <Fade bottom duration={1050} delay={1050}>
              <li>
              2. We offer a variety of toppings to suit every taste, from classic pepperoni to gourmet options like prosciutto and arugula.
              </li>
            </Fade>
          </ul>
          <Fade bottom duration={1050} delay={1050}>
            <p>
            At our pizzeria, we're passionate about making the best pizza possible. From our homemade sauce to our hand-tossed crust, we take pride in every aspect of the pizza-making process.
            </p>
          </Fade>
          <Fade bottom duration={1050} delay={1050}>
            <p>
            We believe that pizza should be a fun and delicious experience for everyone, which is why we offer a range of toppings to suit all preferences. Whether you prefer a classic margherita or something a little more adventurous, we've got you covered.
            </p>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default TechInvestment;
