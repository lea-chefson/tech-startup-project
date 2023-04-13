import "./style.css";
import Hero from "./Hero";
import Slider from "./Partners_slider";
import ControlledAccordions from "./collapse";
import Contentsec1 from "./Contentsec1";
// 
import sec2Img from "../../assets/images/section2.png";
import sec3Img from "../../assets/images/section3.png";
import sec4Img from "../../assets/images/section4.png";
import sec5Img from "../../assets/images/section5.png";
import sec6Img from "../../assets/images/section6.png";
import gsLogo from "../../assets/images/GaiaSwapLogo.jpg";
import cryptLogo from "../../assets/images/web_logo.png";
import blockchainLogo from "../../assets/images/blockchainLogo.png";
//
import mainLogo from "../../assets/images/logo2.jpg";

const Home = () => {
  return (
    <main>
      <Hero />
      <Contentsec1
        title="What is Crypteco?"
        bgImg={mainLogo}
        logo={mainLogo}
        para={
          <>
            <p >
              <p class="crypt_intro_1">
              Crypteco was formed by a team of sustainability and blockchain
              technology experts, with a combined 50 years’ experience in these
              respective industries.</p>
              <br />
              <p  class="first_row first_column">
              <p>
              By applying their expertise and passion for sustainability,
              Crypteco have created their initial offering by merging these
              industries through their <span class="gaiaswap_hl">GaiaSwap</span> platform which is a global first
              all in one dedicated eco-commodity trading platform. With <span class="gaiaswap_hl">GaiaSwap </span> 
               in alliance with partnerships with industry leaders of tradable
              eco-commodities we are able to create a fully accessible and
              instantaneous trading tool for Carbon Credits, Renewable Energy
              Credits, Green Bonds, Plastic Recycling Credits and Ecological
              Restoration Credits.</p>
              <img src={gsLogo} alt="crypteco logo" id="gaiaswap_logo"></img>
              </p>
            </p>
            <br />
            <p class="first_row ">
            <img src={blockchainLogo} alt="blockchain illustration" id="blockchain_logo"></img>
              Utilizing the leading blockchain technology the platform offers a
              fully scalable and real-time traceability platform on the Ethereum
              Main net allowing a multitude of industries to feasibly achieve
              their sustainability targets and provide much needed funding for
              additional climate action.
            </p>
          </>
        }
      />
       <ControlledAccordions
      title="The Problem"
      bgImg={sec2Img} 
      ml="10vw"
      bg_color="linear-gradient(45deg,#1B3333ee,#2F4455 ,#376F70ee)"
      para={
        <>
          <p>
            Our future depends on the decisions we make today. We see
            encouraging signs of real change and initiative occurring daily on
            combating our biggest common threat – Climate Change; however, the
            task at hand requires a collective effort at a larger level.
          </p>
          
          <p>
            Crypteco believe that through a combination of their solutions,
            technology and strategic partnerships we can become a global
            leader in the trading of Eco-commodities and provide much needed
            direction and funding for sustainability with a view of creating
            lasting positive impacts on the environment, communities and
            thereby business.
          </p>
        </>
      }
      />
      <ControlledAccordions
       title="The Solution"
       bgImg={sec3Img}
       ml="25vw"
       format="section4"
       para={
         <>
           <p>
             Eco-commodity credits provide individuals, businesses, and large
             organizations the opportunity to offset their negative impacts on
             the environment. Regulations and penalties ensure that negative
             impacts are penalized and force accountability and off-setting
             measures for their activities by creating purchasable credits that
             can used to reduce their impacts. These credits when purchased
             create much needed funding that can be directed into actual
             climate action.
           </p>            
           <p>
             Crypteco through implementation of their GAIASWAP platform can
             provide the largest accessible volume of these credits and direct
             the funding into their Eco-investment initiatives where Crypteco
             uses the funding to direct to further sustainability measures and
             technology creating an ecosystem whereby additional credits are
             created from these investments and can be re-circulated through
             their GAIASWAP platform.
             <br />
             <br />
             Ultimately Crypteco ensure that the Eco-commodity market WILL fund
             Climate action!
           </p>
         </>
       }
       />
            <ControlledAccordions
        title="Our Mission"
        bgImg={sec4Img}
        ml="40vw"
        para={
          <>
            <p>
              Our mission is to have a positive contribution towards a
              sustainable future for all.
           <br />
           <br />
              We believe there is no greater cause than protecting all aspects
              of our environment and dedicating our efforts to positive climate
              action. Our mission is two-fold with initial efforts through the
              GAIASWAP platform to create an all in one globally accessible
              platform by which all Eco-type commodities can be readily accessed
              and traded offering the highest potential for all to achieve their
              sustainability targets.
            </p>
            <p>
              Beyond that our mission will be to fund further climate action
              through partnerships, sponsorships and eco-investments into
              appropriate projects with proven benefits to our environment.
            </p>
          </>
        }
      />
      <ControlledAccordions
        bgImg={sec5Img}
        title="Our Vision"
        ml="55vw"
        format="section4"
        para={
          <>
            <p>
              Our future depends on the decisions we make today. We see
              encouraging signs of real change and initiative occurring daily on
              combating our biggest common threat – Climate Change; however, the
              task at hand requires a collective effort at a larger level.
            </p>
            
            <p>
              Crypteco believe that through a combination of their solutions,
              technology and strategic partnerships we can become a global
              leader in the trading of Eco-commodities and provide much needed
              direction and funding for sustainability with a view of creating
              lasting positive impacts on the environment, communities and
              thereby business.
            </p>
          </>
        }
      />
      <ControlledAccordions
        bgImg={sec6Img}
        title="Our Values"
        ml="70vw"
        para={
          <p>
            At Crypteco, we provide strategic solutions and tools by which can
            facilitate multiple entities in achieving their sustainability goals
            through both real-world solutions using our blockchain platform
            'GAIASWAP' and by directing much needed funding to align with the
            goals of the Paris climate agreement.
          </p>
        }
      />
      <Slider/>
          </main>
          
  );
};

export default Home;
