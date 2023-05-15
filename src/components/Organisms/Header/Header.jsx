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

  return (
    <div className={`header ${scrollDirection === "down" ? "hide" : ""}`}>
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
};

export default Header;
