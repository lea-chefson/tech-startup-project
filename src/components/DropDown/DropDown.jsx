import { useState } from "react";
import arrowDown from "../../assets/icons/arrow-down.png";
import englishIcon from "../../assets/icons/english.png";
import ClickAwayListener from "../../utils/ClickAwayListener";

const DropDown = (props) => {
  const [langDrp, setLangDrp] = useState([]);
  const [langMenu, setLangMenu] = useState(false);
  return (
    <div className="lang_drpdwn" onClick={() => setLangMenu(!langMenu)}>
      <ClickAwayListener onClickAway={() => setLangMenu(false)}>
        <div>
          <img src={langDrp[1] ? langDrp[1] : englishIcon} alt="" />
          <span>{langDrp[0] ? langDrp[0] : "English"}</span>
        </div>
        <img src={arrowDown} alt="arrowDown" />
        <div className={`drp_wrap ${langMenu ? "showDrp" : "closeDrp"}`}>
          {props.langDrpData.map((d, i) => {
            return (
              <div
                key={i}
                onClick={() => setLangDrp([d.lang, d.img])}
                className="drp_list"
              >
                <img src={d.img} alt="" />
                {d.lang}
              </div>
            );
          })}
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default DropDown;
