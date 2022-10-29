import React from "react";
import "./Section1.css";
import Lottie from "react-lottie";
import animation from "../crypto.json";

const Section1 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
  };
  return (
    <div className="section-1">
      <div className="text">
        <h1>
          <span>On-Chain</span> Identity Bridge
        </h1>
        <p>
          Smart Contract protocol for decentralised Authentication of Web2 Id's
          and user account on Blockchain
        </p>
      </div>
      <div className="lottie">
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};

export default Section1;
