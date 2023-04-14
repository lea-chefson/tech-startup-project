import React from "react";
import Slider from "react-slick";
import { Button } from "@mui/material";
import { AiOutlineCaretDown } from "react-icons/ai";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };
  return (
   <Slider {...settings}>
              <div className="slide">
              <p className="fade-in slideHero">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
        </p>
        <div className="button-row fade-in">
          <Button variant="contained"><a href="#ancre">Discover More <AiOutlineCaretDown className="icon"/></a></Button>
        </div>
              </div>
              <div className="slide">
                  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                  <div className="button-row fade-in">
          <Button variant="contained"><a href="#ancre">TechSwap</a></Button>
        </div>
              </div>
              <div className="slide">
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
              <div className="button-row fade-in">
          <Button variant="contained"><a href="#ancre">Our Mission</a></Button>
        </div>
                              </div>
              <div className="slide">
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                  <div className="button-row fade-in">
          <Button variant="contained"><a href="#ancre">Our News</a></Button>
        </div>
              </div>
              <div className="slide">
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
              <div className="button-row fade-in">
          <Button variant="contained"><a href="#ancre">Tech-investments</a></Button>
        </div>
              </div>
              <div className="slide">
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
              <div className="button-row fade-in">
          <Button variant="contained"><a href="#ancre">Contact us</a></Button>
        </div>
              </div>
          </Slider>
  );
}