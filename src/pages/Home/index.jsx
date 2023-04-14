import "./style.css";
import Hero from "./Hero";
import Slider from "./Partners_slider";
import ControlledAccordions from "./collapse";
import Content from "./Content";
// 
import sec2Img from "../../assets/images/section2.png";
import sec3Img from "../../assets/images/section3.png";
import sec4Img from "../../assets/images/section4.png";
import sec5Img from "../../assets/images/section5.png";
import sec6Img from "../../assets/images/section6.png";
import tsLogo from "../../assets/images/techswapLogo.png";
import blockchainLogo from "../../assets/images/blockchainLogo.png";
//
import mainLogo from "../../assets/images/logo.png";

const Home = () => {
  return (
    <main>
      <Hero />
      <Content
        title="What is TECHAPP?"
        bgImg={mainLogo}
        logo={mainLogo}
        para={
          <>
            <p >
              <p class="tech_intro_1">
              Welcome to TECHAPP, a platform dedicated to providing innovative solutions and tools for businesses and organizations to streamline their workflow and boost productivity in the digital age.</p>
              <br />
              <p  class="first_row first_column">
              <p>
              Our platform offers a wide range of services, including project management tools, cloud storage solutions, team collaboration features, and automation tools. With our user-friendly interface, you can easily manage projects, assign tasks to team members, and monitor progress in real-time.</p>
              <img src={tsLogo} alt="techswap logo" id="techswap_logo"></img>
              </p>
            </p>
            <br />
            <p class="first_row ">
            <img src={blockchainLogo} alt="blockchain illustration" id="blockchain_logo"></img>
            At TECHAPP, we understand the importance of data security and privacy, which is why we implement the latest encryption technology to protect your sensitive information. Our platform also offers reliable cloud storage solutions, so you can access your files anytime, anywhere.
            </p>
          </>
        }
      />
       <ControlledAccordions
      title="Section 1"
      bgImg={sec2Img} 
      ml="10vw"
      bg_color="linear-gradient(45deg,#1B3333ee,#2F4455 ,#376F70ee)"
      para={
        <>
          <p>
          The history of the Olympic Games is a long and fascinating one, dating back to ancient Greece. Today, the Olympics represent the pinnacle of athletic achievement, with athletes from around the world competing in a variety of sports, from track and field to gymnastics to swimming. The Games bring together people from different cultures and backgrounds, celebrating the power of sportsmanship and camaraderie.
          </p>
        </>
      }
      />
      <ControlledAccordions
       title="Section 2"
       bgImg={sec3Img}
       ml="25vw"
       format="section4"
       para={
         <>
           <p>
           The human brain is one of the most complex and fascinating organs in the body. It controls our thoughts, emotions, and behaviors, and it is capable of incredible feats of learning and adaptation. Scientists continue to study the brain to better understand its functions and unlock its mysteries, paving the way for new treatments and therapies for neurological disorders.
           </p>
         </>
       }
       />
            <ControlledAccordions
        title="Section 3"
        bgImg={sec4Img}
        ml="40vw"
        para={
          <>
            <p>
            The art of origami has been a traditional Japanese craft for centuries, and it has gained popularity all around the world. This paper-folding technique requires patience, precision, and creativity, and it can be used to create intricate and beautiful designs, from simple animals to complex geometric shapes.
            </p>
          </>
        }
      />
      <ControlledAccordions
        bgImg={sec5Img}
        title="Section 4"
        ml="55vw"
        format="section4"
        para={
          <>
            <p>
            The world's oceans are home to a rich diversity of marine life, from colorful fish and coral reefs to massive whales and sharks. These vast bodies of water are also essential to the health of our planet, regulating the climate, producing oxygen, and providing a vital source of food and livelihood for millions of people around the world.
            </p>
          </>
        }
      />
      <ControlledAccordions
        bgImg={sec6Img}
        title="Section 5"
        ml="70vw"
        para={
          <p>
           The world of fashion is constantly evolving, with new trends and styles emerging every season. From haute couture to streetwear, designers and fashionistas alike are always on the lookout for the next big thing. Fashion is a form of self-expression, allowing individuals to showcase their unique personality and sense of style to the world.
          </p>
        }
      />
      <Slider/>
          </main>
          
  );
};

export default Home;
