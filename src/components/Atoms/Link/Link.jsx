import React from "react";
import "./Link.scss";

const Link = ({ href, children, animated }) => {
  return (
    <>
      {animated ? (
        <a
          className="animated"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        <a
          className="normal"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      )}
    </>
  );
};

export default Link;
