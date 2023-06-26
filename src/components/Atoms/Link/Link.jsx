import React from "react";
import "./Link.scss";

const Link = ({ href, children, animated, target }) => {
  return (
    <>
      {animated ? (
        <a
          className="animated"
          href={href}
          target={target}
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        <a
          className="normal"
          href={href}
          target={target}
          rel="noopener noreferrer"
        >
          {children}
        </a>
      )}
    </>
  );
};

export default Link;
