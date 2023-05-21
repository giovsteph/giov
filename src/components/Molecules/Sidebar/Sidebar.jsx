import React from "react";
import "./Sidebar.scss";
import GitHub from "../../../assets/icons/github";
import Instagram from "../../../assets/icons/instagram";
import LinkedIn from "../../../assets/icons/linkedin";
import Mail from "../../../assets/icons/mail";

export default function Sidebar() {
  let primaryColor = "#924DF9";

  return (
    <>
      <div className="left-sidebar">
        <div className="left-sidebar-icons">
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
      </div>
      <div className="right-sidebar">
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:giov.ponce@gmail.com"
          className="right-sidebar-text"
        >
          giov.ponce@gmail.com
        </a>
      </div>
    </>
  );
}
