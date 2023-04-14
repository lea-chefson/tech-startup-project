// partners images
import partner1 from "../../assets/images/partners/partner1.png";
import partner2 from "../../assets/images/partners/partner2.png";
import partner3 from "../../assets/images/partners/partner3.png";
import partner4 from "../../assets/images/partners/partner4.png";
import partner5 from "../../assets/images/partners/partner5.png";

const Slider = () => {

    return (
        <div class="partners">
            <h5 class="fade-in">OUR PARTNERS</h5>
        <div class="slider">
	<div class="slide-track">
		<div class="slide">
			<img src={partner1} height="65" width="250" alt="" />
			<img src={partner2} height="65" width="250" alt="" />
			<img src={partner3} height="65" width="250" alt="" />
			<img src={partner4} height="65" width="250" alt="" />
			<img src={partner5} height="65" width="250" alt="" />
		</div>
	</div>
</div>
</div>
    )
}

export default Slider;