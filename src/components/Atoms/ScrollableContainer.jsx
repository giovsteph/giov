import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const ScrollableContainer = ({ children }) => {
  return <SimpleBar style={{ maxHeight: "100vh" }}>{children}</SimpleBar>;
};

export default ScrollableContainer;
