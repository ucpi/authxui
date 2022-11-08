import React from "react";
import Feature from "./Feature";
import "./Section3.css";

const Section3 = () => {
  const icon = [
    "fa-solid fa-shield-halved",
    "fa-regular fa-address-card",
    "fa-solid fa-recycle",
    "fa-solid fa-wallet",
    "fa-solid fa-coins",
  ];
  const text = [
    "Phone number / email based 2 factor authentication on-chain.",
    "Smart contact authorisation vai OTP instead of private key.",
    "Easy recovery of tokens and NFts from staking smart contracts.",
    "User can link web3 wallet with any web2 id.",
    "On-Chain authenticated web2 social Ids.",
  ];
  return (
    <div className="section-3">
      <h1 className="heading">
        <span>Features</span>
        <br /> Use Cases
      </h1>
      <div className="features-container">
        <Feature icon={icon[0]} text={text[0]} />
        <Feature icon={icon[1]} text={text[1]} />
        <Feature icon={icon[2]} text={text[2]} />
        <Feature icon={icon[3]} text={text[3]} />
      </div>
    </div>
  );
};

export default Section3;
