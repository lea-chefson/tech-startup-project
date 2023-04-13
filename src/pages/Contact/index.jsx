import React from "react";
import "./style.css";
import Fade from "react-reveal";
import linkedin from "../../assets/icons/linkedinMini.png";
import youtube from "../../assets/icons/youtubeMini.png";
import facebook from "../../assets/icons/facebookMini.png";
import instagram from "../../assets/icons/instagramMini.png";
import twitter from "../../assets/icons/twitterMini.png";
import reddit from "../../assets/icons/redditMini.png";
import discord from "../../assets/icons/discordMini.png";
import Letter from "./Letter";
import { autocompleteClasses } from "@mui/material";
const Contact = () => {
  return (
    <main>
      <div className="contact">
        <div className="c_hero">
          <div className="overlay">
            <div className="cs_container3">
              <div className="c_content">
                <Fade top duration={1050} delay={1050}>
                  <h2>Contact Us</h2>
                </Fade>
                <Fade bottom duration={1050} delay={1050}>
                  <p>
                    You can leave your message or inquiry by filling the details
                    below and we’ll get back to you within 1-2 business days.
                  </p>
                </Fade>
                <Fade bottom duration={1050} delay={1050}>
                  <button className="cursor_pointer"><a href="#form">Contact Us</a></button>
                </Fade>
                <ul class="social-icons2">
                <li class="iconz icon--facebook">
    <a href="#">
      <span class="icon__name">Facebook</span>
    </a>
  </li>
  <li class="iconz icon--twitter">
    <a href="#">
      <span class="icon__name">Twitter</span>
    </a>
  </li>
  <li class="iconz icon--linkedin">
    <a href="#">
      <span class="icon__name">LinkedIn</span>
    </a>
  </li>
  <li class="iconz icon--reddit">
    <a href="#">
      <span class="icon__name">Reddit</span>
    </a>
  </li>
  <li class="iconz icon--discord">
    <a href="#">
      <span class="icon__name">Discord</span>
    </a>
  </li>
  <li class="iconz icon--instagram">
    <a href="#">
      <span class="icon__name">Instagram</span>
    </a>
  </li>
  <li class="iconz icon--youtube">
    <a href="#">
      <span class="icon__name">Youtube</span>
    </a>
  </li>

</ul>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_container blue">
          <div className="contact_form d_flex" id="form">
            <div className="cf_left">
              <form method="post"  action="mailto:info@crypteco.io">
                <div className="cs_row">
                  <div className="form_group">
                    <label htmlFor="">First Name</label>
                    <input type="text" required />
                  </div>
                  <div className="form_group">
                    <label htmlFor="">Last Name</label>
                    <input type="text" required />
                  </div>
                </div>
                <div className="cs_row">
                  <div className="form_group">
                    <label htmlFor="">Phone Number</label>
                    <input type="number" required />
                  </div>
                  <div className="form_group">
                    <label htmlFor="">E-mail</label>
                    <input type="email" required />
                  </div>
                </div>
                <div style={{ width: "100%" }}>
                  <label htmlFor="">Message</label>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <input className="submit_button" type="submit" value="Send" style={{width:"40%",color:"#E1B280", cursor:"pointer"}}></input>
              </form>
            </div>
            <div className="cf_right">
              <div  className='invert'>
                <img
                  src="https://www.impactsolar.co.th/application/files/4815/2335/2016/Contact_Us-icon-email.png"
                  alt=""
                />
                <div>
                  <span>Email</span>
                  <p>info@crypteco.io</p>
                </div>
              </div>
              <div className='invert'>
                <img
                  src="https://www.impactsolar.co.th/application/files/6415/2335/2018/Contact_Us-icon-tel.png"
                  alt=""
                />
                <div>
                  <span>Call</span>
                  <p></p>
                </div>
              </div>
              <div  className='invert'>
                <img
                  src="https://www.impactsolar.co.th/application/files/4815/2335/2016/Contact_Us-icon-email.png"
                  alt=""
                />
                <div>
                  <span>Address</span>
                  <p>
                    Crypteco Company Limited, 999 Gaysorn Plaza, 5th Floor, Unit
                    5B-1, Ploenchit Rd., Lumpini, Patumwan, Bangkok 10330,
                    Thailand.
                  </p>
                </div>
              </div>
              <div className="icons_right">
                <a href=""><img  src={facebook}></img></a>
                <a href=""><img  src={twitter}></img></a>
                <a href=""><img  src={youtube}></img></a>
                <a href=""><img  src={instagram}></img></a>
                <a href=""><img  src={reddit}></img></a>
                <a href=""><img  src={discord}></img></a>
                <a href=""><img  src={linkedin}></img></a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
