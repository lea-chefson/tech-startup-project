import "./TeamCard2.css";
import React from "react";



const TeamCard2 = ({ name,
    img,
    role,
    desc,
    fb,
    insta,
    twitter,
    linkedin,
    email,
    readMore,
    i,}) => {

        const openCard = () => {
            document
            .querySelector(".icon-chevron-down")
          document.querySelector(".skw-outer").classList.toggle("expanded");
        };

    return (
        <div class="skw-outer">
            <div class="bg">
                 <h1>{name}</h1>
                 <h5>{role}</h5>
                 </div>
            <div class="skw-coin">
                 <img src={img} alt="" />
            </div>
            <div class="skw-summary">
                <div class='icon_div'>
                <span class="icon_row"><i class="fa-brands fa-linkedin-in"></i></span>
                <span class="icon_row"><i class="fa-solid fa-envelope"></i></span>
                </div>
                <div class="skw-details">
                    <div class="fold">
                        <span class="w1">{desc}</span>
                        <span class="w2"></span>
                        <span class="w3"></span>
                        <span class="w2"></span>
                        <span class="w2"></span>
                        <span class="w3"></span>
                        <span class="w4"></span>
                    </div>
                    <button onClick={openCard} class={"icon icon-chevron-down "+name} id={name}></button>
                </div>
            </div>
        </div>
            );
}

export default TeamCard2;