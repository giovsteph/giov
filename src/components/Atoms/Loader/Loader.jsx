import React from "react";
import "./Loader.scss";
import code from "../../../assets/icons/code.json";
import Lottie from "lottie-react";

export default function Loader() {
  return (
    <div className="container">
      <div className="loader-container">
        <div className="loader">
          <Lottie animationData={code} loop={true} />
        </div>
      </div>
    </div>
  );
}
