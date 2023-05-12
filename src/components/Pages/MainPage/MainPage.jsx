import React from "react";
import "./MainPage.scss";
import Loader from "react-loaders";

let loader = <Loader type="ball-pulse" />;

export default function MainPage() {
  return (
    <div className="container">
      <p>Work in progress...</p>
      <br />
      {loader}
    </div>
  );
}
