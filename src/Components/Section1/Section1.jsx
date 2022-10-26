import React from "react";
import "./Section1.css";
import Lottie from "react-lottie";
import animation from "../crypto.json";

const Section1 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="section-1">
      <div className="lottie">
        <Lottie options={defaultOptions} height={650} width={500} />
      </div>
      <div className="text">
        <h1>
          Auth<span>X</span>
        </h1>
        <p>web2 authentication for web3</p>
      </div>
    </div>
  );
};

export default Section1;
