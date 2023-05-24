import React, { useState, useEffect } from "react";
import "./Header.scss";
import Link from "../../Atoms/Link/Link";
import Button from "../../Atoms/Button/Button";
import SkullLogo from "../../../assets/icons/skull.png";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}
const Header = () => {
  const scrollDirection = useScrollDirection();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("disable-scroll");
  };

  function MobileView() {
    return (
      <div className="header">
        <div className="icon-container">
          <a href="/">
            <img src={SkullLogo} alt="logo"></img>
          </a>
        </div>
        <div className="menuContainer">
          <div
            className={`hamburgerMenu ${isMenuOpen ? "open" : "closed"}`}
            onClick={handleMenuToggle}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              <li className="mobile-nav-item">
                01. <Link href="#about">About</Link>
              </li>
              <li className="mobile-nav-item">
                02. <Link href="#experience">Experience</Link>
              </li>
              <li className="mobile-nav-item">
                03. <Link href="#work">Work</Link>
              </li>
              <li className="mobile-nav-item">
                04. <Link href="#contact">Contact</Link>
              </li>
              <li className="mobile-nav-item">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Button className="primary smaller">Resume</Button>
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    );
  }

  function DesktopView() {
    return (
      <div className="header">
        <div className="icon-container">
          <a href="/">
            <img src={SkullLogo} alt="logo"></img>
          </a>
        </div>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              01. <Link href="#about">About</Link>
            </li>
            <li className="nav-item">
              02. <Link href="#experience">Experience</Link>
            </li>
            <li className="nav-item">
              03. <Link href="#work">Work</Link>
            </li>
            <li className="nav-item">
              04. <Link href="#contact">Contact</Link>
            </li>
          </ul>
          <div className="btnContainer">
            <a href="/resume.pdf" target="_blank">
              <Button className="primary smaller">Resume</Button>
            </a>
          </div>
        </nav>
      </div>
    );
  }

  return (
    <div className={`header ${scrollDirection === "down" ? "hide" : ""}`}>
      {windowWidth <= 768 ? <MobileView /> : <DesktopView />}
    </div>
  );
};

export default Header;
