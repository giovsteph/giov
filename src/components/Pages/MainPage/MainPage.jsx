import React, { useState, useEffect } from "react";
import "./MainPage.scss";
import Loader from "../../Atoms/Loader/Loader";
import Header from "../../Organisms/Header/Header";
import Footer from "../../Molecules/Footer/Footer";
import Sidebar from "../../Molecules/Sidebar/Sidebar";

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          {windowWidth <= 768 ? "" : <Sidebar />}
          <div className="mainContainer">
            <div className="container">FIRST SECTION</div>
            <div className="container" id="about">
              ABOUT
            </div>
            <br />
            <br />
            <br />
            <div className="container" id="experience">
              EXPERIENCE
            </div>
            <br />
            <br />
            <br />
            <div className="container" id="work">
              WORK
            </div>
            <br />
            <br />
            <br />
            <div className="container" id="contact">
              CONTACT
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
