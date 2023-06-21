import React, { useState, useEffect } from "react";
import "./MainPage.scss";
import Loader from "../../Atoms/Loader/Loader";
import Header from "../../Organisms/Header/Header";
import Footer from "../../Molecules/Footer/Footer";
import Sidebar from "../../Molecules/Sidebar/Sidebar";
import ProfilePictureFiltered from "../../../assets/photos/profile-pic-filter.jpg";

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
              <div className="about">
                <div class="about-title">
                  <span className="numbers">01. </span> About Me
                </div>
                <div className="about-info">
                  <div className="about-left">
                    <p className="about-bio">
                      Hello there! I'm Giovanna Ponce, a passionate software
                      engineer currently working at Wizeline, where I thrive on
                      tackling diverse projects for multiple clients. Before
                      joining Wizeline, I honed my skills as a front-end
                      developer in a dynamic startup environment. My journey in
                      the tech world began in 2019 when I embarked on an
                      exciting adventure with the{" "}
                      <a
                        href="https://www.laboratoria.la/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Laboratoria
                      </a>{" "}
                      bootcamp. Since then, I've been actively leveraging my
                      expertise in Angular, React, and associated technologies
                      to craft remarkable digital solutions. Let's embark on a
                      journey together, where we can bring your ideas to life in
                      the most innovative and impactful ways!
                    </p>
                    <p>
                      Here are a few technologies I’ve been working with
                      recently:
                    </p>
                    <ul className="about-list">
                      <li>Angular 14</li>
                      <li>React.js</li>
                      <li>Jest</li>
                      <li>Node.js</li>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>SASS</li>
                      <li>Jasmine</li>
                    </ul>
                  </div>
                  <div className="about-right">
                    <img
                      className="framed"
                      src={ProfilePictureFiltered}
                      alt="profile-pic"
                    />
                  </div>
                </div>
              </div>
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
