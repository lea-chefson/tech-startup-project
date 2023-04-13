import React, { useState, useEffect } from "react";
import "./Header.css";
// assets
import logo from "../../assets/images/onlyLogo.png";
import logo2 from "../../assets/images/onlyLogoBlue.png";
import DropDown from "../../components/DropDown/DropDown";
import { langDrpData } from "../../data/LangData";
import { Link } from "react-router-dom";

// ================= Header =======================
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll_header, setScroll_header] = useState(false);

  useEffect(() => {
    // header change when scroll down
    const changeBackground = () => {
      if (window.scrollY >= 66) {
        setScroll_header(true);
      } else {
        setScroll_header(false);
      }
    };
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  });

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <>
      <header className={`header ${scroll_header ? "scroll_header" : ""}`}>
        <div className="cs_container">
          <div className="cs_row header_row">
            <Link onClick={closeMenu} className="nav_logo" to="/">
              <img src={scroll_header ? logo2 : logo} alt="" />
              <span style={{ color: scroll_header ? "#387071" : "#d2e9e3" }}>
                CRYPTECO
              </span>
            </Link>
            <nav className={`menu_list ${menuOpen ? " menuOpened" : ""}`}>
              <img src={logo} alt="" />
              <ul>
                <li>
                  <Link onClick={closeMenu} to="/business/gaiaswap">
                    Our Business {" "}
                    <i className="fa fa-chevron-down"></i>
                  </Link>
                  <ul className="nested_menu">
                    <li>
                      <Link onClick={closeMenu} to="/business/gaiaswap">
                        GaiaSwap
                      </Link>
                    </li>
                    <li>
                      <Link onClick={closeMenu} to="/business/ecoInvestments">
                        Eco-Investments
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/whoweare">
                    Who we Are{" "}
                    <i className="fa fa-chevron-down" area-hidden="true"></i>
                  </Link>
                  <ul className="nested_menu">
                    <li>
                      <Link onClick={closeMenu} to="/whoweare">
                        Our Story
                      </Link>
                    </li>
                    <li>
                      <Link onClick={closeMenu} to="/whoweare">
                        Our Team
                      </Link>
                    </li>
                    <li>
                      <Link onClick={closeMenu} to="/whoweare">
                        Our Community
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link onClick={closeMenu} to="/news">
                    Our News
                  </Link>
                </li>
                <li>
                  <Link onClick={closeMenu} to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
            <DropDown langDrpData={langDrpData} />
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="header_menu_btn"
            >
              {menuOpen ? (
                <i className="fa fa-times" area-hidden="true"></i>
              ) : (
                <i className="fa fa-bars" area-hidden="true"></i>
              )}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="header_backdrop" onClick={closeMenu}></div>
        )}
      </header>
    </>
  );
};

export default Header;
