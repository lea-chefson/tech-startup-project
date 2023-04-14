import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./layout/Footer/Footer";
import { AnimatePresence } from "framer-motion";
import Header from "./layout/Header/Header";
import Home from "./pages/Home";
import News from "./pages/News";
import NewsBlog from "./pages/News/NewsBlog";
import WhoWeAre from "./pages/WhoWeAre";
import Contact from "./pages/Contact";
import techswap from "./pages/Techswap";
import TechInvestment from "./pages/TechInvestment";
import { useEffect } from "react";
import mainLogo from "./assets/images/logo.png";
import ComingSoon from "./components/ComingSoon";


function App() {
  console.warn = () => {};
  useEffect(() => {
    // window.onload = function () {
      setTimeout(() => {
        document.querySelector('.loader-wrapper').classList.add('d-none');
      },700)
    // };
  },[]);
  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/whoweare" element={<WhoWeAre />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/news-blog/:id" element={<NewsBlog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/business/techswap" element={<ComingSoon pageTitle="TECHSWAP" />}></Route>
          <Route path="/business/techInvestments" element={<ComingSoon pageTitle="Tech-Investments" />}></Route>
        </Routes>
      </AnimatePresence>
      <Footer />
      <GoToTop/>
      <Loader />
      <ScrollToTopRoutes/>
    </>
  );
};


// Website Loader
const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="fixed-loading-wrapper">
        <div className="loader-wrapp">
          <div className="loader-logo">
            <img src={mainLogo} alt="" />
          </div>
          <div className="loader"></div>
        </div>
      </div>
    </div>
  )
};


// Go To Top
const GoToTop = () => {
  useEffect(() => {
    window.onscroll = function () {
      var pageOffset = document.documentElement.scrollTop || document.body.scrollTop;
      let btn = document.getElementById('scrollToTop');
      if (btn) {
        if (pageOffset > 450) {
          btn.classList.add('show-top')
        } else {
          btn.classList.remove('show-top')
        }
      }
    }
  }, []);
  // 
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <div onClick={goToTop} className="go-to-top" id="scrollToTop">
      <i className="fa fa-arrow-up arrow-up"></i>
    </div>
  )
};

// scroll top when route change


function ScrollToTopRoutes() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default App;
