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
            <div className="container">
              <div className="intro">
                <p className="intro-purple">Hi, my name is</p>
                <p className="title">Giovanna Ponce.</p>
                <p className="title-sub">I build things for the web.</p>
                <div className="bio">
                  <p>
                    I'm a software engineer specialized in front end
                    development. I like to build (and ocassionally design)
                    exceptional applications.
                  </p>
                  <p>
                    Currently, my favorite front end framework is Angular, but I
                    also like to use React.
                  </p>
                  <p>
                    My abilities are currently being used at{" "}
                    <a
                      href="https://www.wizeline.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Wizeline
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="container" id="about">
              <div className="about">About</div>
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
