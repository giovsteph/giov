import React, { useState, useEffect } from "react";
import "./MainPage.scss";
import Loader from "../../Atoms/Loader/Loader";
import Header from "../../Organisms/Header/Header";

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
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
        </>
      )}
    </>
  );
}
