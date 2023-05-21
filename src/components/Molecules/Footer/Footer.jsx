import React, { useState, useEffect } from "react";
import "./Footer.scss";
import Link from "../../Atoms/Link/Link";
import Branch from "../../../assets/icons/branch";
import GitHub from "../../../assets/icons/github";
import Instagram from "../../../assets/icons/instagram";
import LinkedIn from "../../../assets/icons/linkedin";
import Mail from "../../../assets/icons/mail";

export default function Footer() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const primaryColor = "#924DF9";

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function MobileView() {
    return (
      <div className="footer">
        <div>
          <div className="footer-icons">
            <a
              href="https://github.com/giovsteph"
              target="_blank"
              rel="noreferrer"
              data-testid="github-link"
            >
              <GitHub color={primaryColor} size="25" />
            </a>
            <a
              href="https://instagram.com/giovsteph"
              target="_blank"
              rel="noreferrer"
              data-testid="instagram-link"
            >
              <Instagram color={primaryColor} size="25" />
            </a>
            <a
              href="https://www.linkedin.com/in/giovannaponce/"
              target="_blank"
              rel="noreferrer"
              data-testid="linkedin-link"
            >
              <LinkedIn color={primaryColor} size="25" />
            </a>
            <a
              href="mailto:giov.ponce@gmail.com"
              target="_blank"
              rel="noreferrer"
              data-testid="mail-link"
            >
              <Mail color={primaryColor} size="25" />
            </a>
          </div>
          <Link href="https://github.com/giovsteph/giov" animated>
            Built by Giovanna Ponce <Branch color="#924DF9" size="15" />
          </Link>
          <br />
          <span>Based on the design by </span>
          <Link href="https://github.com/bchiang7" animated>
            Britanny Chiang <span className="icon">↗</span>
          </Link>
        </div>
      </div>
    );
  }

  function DesktopView() {
    return (
      <div className="footer">
        <div>
          <Link href="https://github.com/giovsteph/giov" animated>
            Built by Giovanna Ponce <Branch color="#924DF9" size="15" />
          </Link>
          <br />
          <span>Based on the design by </span>
          <Link href="https://github.com/bchiang7" animated>
            Britanny Chiang <span className="icon">↗</span>
          </Link>
        </div>
      </div>
    );
  }

  return <div>{windowWidth <= 768 ? <MobileView /> : <DesktopView />}</div>;
}
