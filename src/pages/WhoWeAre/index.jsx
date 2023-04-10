import "./style_team.css";
/*import "@splidejs/splide/dist/css/splide.min.css";*/
import PartnersSlider from "./Partners_slickers";
import Fade from "react-reveal/Fade";
import TeamCard3 from "../../components/Card/TeamCard/TeamCard3";
// team members images
import team1 from "../../assets/images/team/team1.jpg";
import team2 from "../../assets/images/team/team2.jpg";
import team3 from "../../assets/images/team/team3.jpg";
import default_team from "../../assets/images/team/default_team.jpg";
// bg
import teambg from "../../assets/images/teambg.jpg";
//

const WhoWeAre = () => {
  // team data
  const teamData = [
    {
      name: `Nicky Purves`,
      img: team1,
      role: `CEO & Founding Member`,
      desc: (
        <>
          <p>
            A professional Civil Engineer in the Oil & Gas industry, Nick
            switched careers when he witnessed first-hand the negative impacts
            these projects were having on our planet.
          </p>
          <p>
            The first act in this new direction was to establish an
            Eco-international Kindergarten in Bangkok Thailand. It’s a great
            place for budding Eco-warriors.
          </p>
          <p>
            Nick then went on to establish a Renewable Energy Company in
            Thailand serving the SEA region and played key role in the
            development of over 100MWp of clean energy.
          </p>
          <p>
            In 2021 the idea of Crypteco and GAIASWAP were developed with a view
            to better serve climate action.
          </p>
        </>
      ),
      fb: `/`,
      insta: `/`,
      twitter: `/`,
      linkedin: `/`,
      email: "/",
    },
    {
      name: `Mark Briscombe`,
      img: team2,
      role: `Advisor & FOunding Member`,
      desc: (
        <>
          <p>
            Mark who holds a Masters in Physics has over 15 years work
            experience across multiple industries. Mark's career began as a
            consultant for Watson Wyatt (now Willis Towers Watson) working on
            financial modelling for all their low/zero carbon energy projects.
          </p>
          <p>
            In 2011 Mark learned of Bitcoin and by 2012 he was actively market
            making for the emerging trading markets, primarily as an
            arbitrageur. At some times, his trading would comprise of single
            digit percentage of the global trading volume for Bitcoin.
          </p>
          <p>
            Blockchain adoption has been Mark's primary goal ever since and in
            early 2017, Mark worked closely with OmiseGo, the team behind
            ‘Plasma’, which was an early scaling solution to expand the utility
            and increase the adoption of Ethereum.
          </p>
          <p>
            Later in 2017 he invented a new scaling solution for Ethereum,
            called Nahmii and became COO of Nahmii AS, a Norwegian company
            devoted to the widespread adoption of blockchain technology.
          </p>
          <p>
            In 2022, Mark and the Nahmii team were awarded one of the most
            important contracts in Blockchain history when the Norwegian state
            bank engaged them for their CBCD Sandbox platform.
          </p>
        </>
      ),
      fb: `/`,
      insta: `/`,
      twitter: `/`,
      linkedin: `/`,
      email: "/",
    },
    {
      name: `Yashovardhan Lohia `,
      img: team3,
      role: `Advisor & Board of Director`,
      desc: (
        <>
          <p>
            ‘Yash’ Lohia is the current Chairman of ESG Council at Indorama
            Ventures PCL “IVL”, a global sustainable chemical company, with more
            than 140 operating sites in 35 countries.
          </p>
          <p>
            He has been recently inducted into The Forum of Young Global
            Leaders, an initiative of the World Economic Forum, in the Class of
            2022.
          </p>
          <p>
            Yash was appointed as an Executive Director on IVL’s Board of
            Directors, and he currently sits on the Sustainability and Risk
            Management Committee.
          </p>
          <p>
            Born in New Delhi, Yash is the elder son of Aloke Lohia, the Founder
            and Group CEO of IVL. He holds a Bachelor of Engineering Business
            Management from Warwick Business School in Warwickshire, UK.
          </p>
        </>
      ),
      fb: `/`,
      insta: `/`,
      twitter: `/`,
      linkedin: `/`,
      email: "/",
    },
    {
      name: `Michael Soon`,
      img: default_team,
      role: `CMO & Board of Director`,
      desc: null,
      fb: `/`,
      insta: `/`,
      twitter: `/`,
      linkedin: `/`,
      email: "/",
    },
  ];

  return (
    <main>
      <div className="team_container">
      <div className="img_content" style={{ "--background": `url(${teambg})` }}>
        <div className="overlay"></div>
        <Fade top duration={1000}>
          <h2 className="section_title">OUR TEAM</h2>
        </Fade>
      </div>
      <section>
            <div className="cs_container2" >
              <div className="team_wrap">
           {teamData?.map((v, i) => (
              <TeamCard3
                key={i}
                name={v.name}
                img={v?.img}
                role={v?.role}
                desc={v?.desc}
                // fb={v?.fb}
                // insta={v?.insta}
                // twitter={v?.twitter}
                linkedin={v?.linkedin}
                email={v?.email}
                i={i}
                readMore={v?.desc ? true : false}
              />
            ))}
          </div>
              </div>
      </section>
      </div>
      <PartnersSlider />
      
    </main>
  );
};

export default WhoWeAre;
