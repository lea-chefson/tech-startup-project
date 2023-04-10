import { useRef } from "react";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import "./TeamCard.css";

const TeamCard = ({
  name,
  img,
  role,
  desc,
  fb,
  insta,
  twitter,
  linkedin,
  email,
  readMore,
  i,
}) => {
  //
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef(null);


  // expend card and scroll
  const scrollToCard = () => {
    let element =  cardRef?.current;
    let yOffset = -100;
    if(expanded){
      setExpanded(false)
    }else{
      yOffset = 80;
      setExpanded(true)
    }
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  //
  return (
    <div ref={cardRef} className="team_card">
      <Fade left duration={1000}>
        <div className="tleft">
          <img src={img} alt={name} />
          <div>
            {fb && (
              <a href={fb} target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            )}
            {insta && (
              <a href={insta} target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-instagram"></i>
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            )}
            {email && (
              <a href={email} target="_blank" rel="noopener noreferrer">
                <i class="fa-solid fa-envelope"></i>
              </a>
            )}
            {twitter && (
              <a href={twitter} target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-twitter"></i>
              </a>
            )}
          </div>
        </div>
      </Fade>
      <Fade right duration={1000}>
        <div className="tright">
          <h1>{name}</h1>
          <h6>{role}</h6>
          <div className={`team_desc ${expanded ? " expended" : ""}`}>
            {desc}
          </div>
          {readMore &&
          <button
            onClick={scrollToCard}
            className="expand_btn"
          >
            {expanded ? "Read less" : "Read more"}
          </button>}
        </div>
      </Fade>
    </div>
  );
};

export default TeamCard;
