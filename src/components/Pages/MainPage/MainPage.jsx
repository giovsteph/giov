import React, { useState } from "react";
import "./MainPage.scss";
import code from "../../../assets/icons/code.json";

import Lottie from "lottie-react";

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <>
      <div className="container">
        {isLoading ? (
          <div className="loader-container">
            <div className="loader">
              <Lottie animationData={code} loop={true} />
            </div>
          </div>
        ) : (
          <div className="container"></div>
        )}
      </div>
    </>
  );
}
