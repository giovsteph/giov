import React, { useState, useEffect } from "react";
import "./MainPage.scss";
import Loader from "../../Atoms/Loader/Loader";
import Header from "../../Organisms/Header/Header";
import Footer from "../../Molecules/Footer/Footer";
import Sidebar from "../../Molecules/Sidebar/Sidebar";
import ProfilePictureFiltered from "../../../assets/photos/profile-pic-filter.jpg";
import TabPanel from "../../Molecules/TabPanel/TabPanel";
import Card from "../../Molecules/Card/Card";
import Button from "../../Atoms/Button/Button";

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const projects = [
    {
      id: "1",
      title: "DIYers",
      description:
        "The visual discovery engine for people who enjoy DIY. Pinterest based social network, whose main purpose is to help users discover recipes, crafting inspiration, home hacks and more ideas to try.",
      picture: "https://i.ibb.co/rpf4dfR/Screenshot-2023-06-25-at-20-32-26.png",
      technologies: ["React", "HTML5/CSS3", "Firebase"],
      githubLink: "https://github.com/giovsteph/DIYers",
      projectLink: "https://laboratoriadiyers.firebaseapp.com/#/signIn",
    },
    {
      id: "2",
      title: "QR Code Generator",
      description:
        "This project allows you to create a QR Code with text or an url and download it in a PNG format. This project uses the library react-qr-code.",
      picture: "https://i.ibb.co/L174Rvn/Screenshot-2023-06-26-at-14-58-54.png",
      technologies: ["React", "HTML5/CSS3", "Firebase", "Jest"],
      githubLink: "https://github.com/giovsteph/qr-generator",
      projectLink: "https://qr-generator-df60a.web.app/",
    },
    {
      id: "3",
      title: "Bleiben Note",
      description:
        "Bleiben-Note is German for 'Remember-Note', which takes us back to our signature phrase, 'The app that remembers for you'. Simple to-do app with login features.",
      picture: "https://i.ibb.co/Y8xJ7sS/Screenshot-2023-06-26-at-15-06-23.png",
      technologies: ["React", "HTML5/CSS3", "Firebase", "Jest"],
      githubLink: "https://github.com/giovsteph/Bleiben-Note",
      projectLink: "https://bleiben-note.web.app/",
    },
  ];

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
                <div className="about-title">
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
                    <p className="about-techlist">
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
              <div className="experience">
                <div className="experience-title">
                  <span className="numbers">02. </span> Where I've Worked
                </div>
                <TabPanel />
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="container" id="work">
              <div className="work">
                <div className="work-title">
                  <span className="numbers">03. </span> Some things I've built
                </div>
                <div>
                  {projects.map((proj) => (
                    <Card projectData={proj} key={proj.id} />
                  ))}
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="container" id="contact">
              <div className="contact">
                <div className="contact-title">
                  <span className="numbers">04. </span> What's Next?
                </div>
                <div className="contact-text">
                  <h2>Get in touch</h2>
                  <br />
                  <p>
                    I'm currently looking for new opportunities, my inbox is
                    always open. Whether you have a question or just want to say
                    hi, I’ll try my best to get back to you!
                  </p>
                  <br />
                  <a
                    href="mailto:giov.ponce@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="primary smaller hello-btn">
                      Say Hello
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
