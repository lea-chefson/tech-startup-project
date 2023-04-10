import Fade from "react-reveal/Fade";
// partners images
import partner1 from "../../assets/images/partners/partner1.png";
import partner2 from "../../assets/images/partners/partner2.png";
import partner3 from "../../assets/images/partners/partner3.png";
import partner4 from "../../assets/images/partners/partner4.png";
import partner5 from "../../assets/images/partners/partner5.png";
import partner6 from "../../assets/images/partners/partner6.png";
import partner7 from "../../assets/images/partners/partner7.png";
import partner8 from "../../assets/images/partners/partner8.png";
import partner9 from "../../assets/images/partners/partner9.png";
import partner10 from "../../assets/images/partners/partner10.png";
import partner11 from "../../assets/images/partners/partner11.png";
import partner12 from "../../assets/images/partners/partner12.png";
import partner13 from "../../assets/images/partners/partner13.png";
import partner14 from "../../assets/images/partners/partner14.png";
import teambg from "../../assets/images/teambg.jpg"

const Partners = () => {
  let partnersData = [
    { img: partner1 },
    { img: partner2 },
    { img: partner3 },
    { img: partner4 },
    { img: partner5 },
    { img: partner6 },
    { img: partner7 },
    { img: partner8 },
    { img: partner9 },
    { img: partner10 },
    { img: partner11 },
    { img: partner12 },
    { img: partner13 },
    { img: partner14 },
  ];
  return (
    <section className="partners">
       <div className="img_content" style={{ "--background": `url(${teambg})` }}>
        <div className="overlay" style={{width:"100%", background:"#2E151B88"}}></div>
        <Fade top duration={1000}>
          <h2 style={{color:"#C1F6EC"}}>OUR PARTNERS</h2>
        </Fade>
      </div>
      <div className="cs_container2">
        <div class="text_partners">
          <h2>test</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat dolor vel mattis porttitor. In eu faucibus magna. Vestibulum efficitur odio vel porta accumsan. Aliquam scelerisque et purus et vulputate. Ut et eros sed ipsum maximus aliquet. Fusce sagittis dictum suscipit. Integer lectus elit, vulputate eu egestas vehicula, eleifend fringilla nunc</p>
        </div>
        <div className="partners_wrap">
          {partnersData?.map((v, i) => (
            <div key={i} className="partner_card">
              <Fade bottom duration={1100}>
                <div
                  
                  className="img_box d_flex justify_content_center align_items_center"
                >
                  <img src={v?.img} alt="" />
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
