import Fade from "react-reveal/Fade";
// partners images
import partner1 from "../../assets/images/partners/partner1.png";
import partner2 from "../../assets/images/partners/partner2.png";
import partner3 from "../../assets/images/partners/partner3.png";
import partner4 from "../../assets/images/partners/partner4.png";
import partner5 from "../../assets/images/partners/partner5.png";

// bg
import teambg from "../../assets/images/teambg.jpg";

import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./partners_style.css"

export default function PartnersSlider() {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <section className="partners">
    <div className="img_content" style={{ "--background": `url(${teambg})` }}>
     <div className="overlay" style={{width:"100%", background:"#2E151B88"}}></div>
     <Fade top duration={1000}>
       <h2 style={{color:"#C1F6EC"}}>OUR PARTNERS</h2>
     </Fade>
   </div>
   <div className="partners_content">
     <div class="text_partners">
       <h2>test</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat dolor vel mattis porttitor. In eu faucibus magna. Vestibulum efficitur odio vel porta accumsan. Aliquam scelerisque et purus et vulputate. Ut et eros sed ipsum maximus aliquet. Fusce sagittis dictum suscipit. Integer lectus elit, vulputate eu egestas vehicula, eleifend fringilla nunc</p>
     </div>
     <div className="partners_slider">
   <Slider {...settings}>
              <div className="slidep">
              <img src={partner1} height="100" width="250" alt="" />
              <p className="fade-in slideHero">
        Sustainability and Blockchain technology experts working towards a sustainable future for all.
        </p>
              </div>
              <div className="slidep">
              <img src={partner2} height="100" width="250" alt="" />
                  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
              </div>
              <div className="slidep">
              <img src={partner3} height="100" width="250" alt="" />
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                              </div>
              <div className="slidep">
              <img src={partner4} height="100" width="250" alt="" />
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
              </div>
              <div className="slidep">
              <img src={partner5} height="100" width="250" alt="" />
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
              </div>
              <div className="slidep">
              <img src={partner1} height="100" width="250" alt="" />
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
              </div>
              <div className="slidep">
              <img src={partner2} height="100" width="250" alt="" />
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
              </div>
              <div className="slidep">
              <img src={partner3} height="100" width="250" alt="" />
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
              </div>
              <div className="slidep">
              <img src={partner4} height="100" width="250" alt="" />
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
              </div>
              <div className="slidep">
              <img src={partner5} height="100" width="250" alt="" />
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
              </div>
              <div className="slidep">
              <img src={partner1} height="100" width="250" alt="" />
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
              </div>
              <div className="slidep">
              <img src={partner2} height="100" width="250" alt="" />
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
              </div>
              <div className="slidep">
              <img src={partner3} height="100" width="250" alt="" />
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
              </div>
              <div className="slidep">
              <img src={partner4} height="100" width="250" alt="" />
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
              </div>
          </Slider>
          </div>
          </div>
    </section>
  );
}