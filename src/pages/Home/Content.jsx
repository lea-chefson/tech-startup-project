import Fade from "react-reveal";

const Content = (props) => {
  return (
    <div
      className="home_sections"
      style={{ "--bg-img": `url(${props.bgImg})` }}
    >
      <div className="cs_container text_center text_light">
        <div className="home_sections_text_Content">
          <Fade left cascade duration={1200}>
            <div>
              <h1>{props.title}</h1>
              <div className={`main_text`}>{props.para}</div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Content;
