import Zoom from "react-reveal/Zoom";



const Content = (props) => {
  return (
    <div
      className="home_sections first"
      style={{ "--bg-img": `url(${props.bgImg})` }}
    >
      <div className="cs_container text_center text_light">
        <div className="home_sections_text_Content first_content">
          <Zoom cascade duration={1000}>
            <div>
              <h1 ><a  id="ancre"></a>{props.title}</h1>
              <div className="home_sections_text_divide">
                <div className={`main_text`} >{props.para}</div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Content;