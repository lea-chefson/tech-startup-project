import "./style_team.css";
/*import "@splidejs/splide/dist/css/splide.min.css";*/
import PartnersSlider from "./Partners_slickers";
import Fade from "react-reveal/Fade";
import TeamCard from "../../components/Card/TeamCard/TeamCard";
// team members images
import team1 from "../../assets/images/team/team1.png";
import team2 from "../../assets/images/team/team2.png";
import team3 from "../../assets/images/team/team3.png";
import default_team from "../../assets/images/team/default_team.jpg";
// bg
import teambg from "../../assets/images/teambg.jpg";
//

const WhoWeAre = () => {
  // team data
  const teamData = [
    {
      name: `Michael Brown`,
      img: team1,
      role: `Web Analytics Specialist`,
      desc: (
        <>
          <p>
          Michael has been working in web analytics for over 8 years. He has a deep understanding of website metrics and analytics tools, and enjoys finding insights that can help businesses improve their online performance. In his free time, Michael enjoys playing basketball and traveling.
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
      name: `Karen Patel`,
      img: team2,
      role: `Content Strategist`,
      desc: (
        <>
          <p>
          Karen has a background in marketing and communications, and has been working as a content strategist for the past 7 years. She has a passion for creating compelling and engaging content that connects with audiences and drives results. In her free time, Karen enjoys reading and trying out new recipes.
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
      name: `Sarah Johnson`,
      img: team3,
      role: `Lead Web Designer`,
      desc: (
        <>
          <p>
          Sarah has been designing websites for over 10 years. She's worked with a variety of clients, from small startups to large corporations, and has a passion for creating beautiful and functional designs that meet the needs of her clients. In her free time, Sarah enjoys hiking and exploring new places.
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
      name: `John Kim`,
      img: default_team,
      role: ` Senior Web Developer`,
      desc: null,
      fb: `/`,
      insta: `/`,
      twitter: `/`,
      linkedin: `/`,
      email: "/",
      desc: (
        <>
          <p>
          John has been developing websites and web applications for over 15 years. He's an expert in a variety of programming languages and frameworks, and has a passion for creating efficient and scalable web solutions. In his free time, John enjoys playing guitar and listening to music.
          </p>
        </>
      ),
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
              <TeamCard
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
