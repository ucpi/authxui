import React from "react";
import "./Section4.css";
import user from "../Images/user.png";
import userValid from "../Images/user-valid.png";
import whatsapp from "../Images/whatsapp.png";
import twitter from "../Images/twitter.png";
import discord from "../Images/discord.png";
import gmail from "../Images/gmail.png";
import blockchain from '../Images/blockchain.png'

const Section4 = () => {
  return (
    <div className="section-4" id="howitworks">
      <h1 className="heading">
        <span>Procedure</span>
        <br />
        How it Works ?
      </h1>

      <div className="container">
        <div className="user-arrow"></div>
        <div className="chain-arrow"></div>
        <img src={user} alt="user" className="user-img" />
        <img src={userValid} alt="user-valid" className="user-valid" />
        <div className="img-wrapper">
          <img src={whatsapp} alt="whatsapp" />
          <img src={discord} alt="discord" />
          <img src={twitter} alt="twitter" />
          <img src={gmail} alt="gmail" />
        </div>
        <img src={blockchain} alt="blockchain" className="blockchain-img" />
        <p className="step-1">1. User Sign-in on Web2 apps.</p>
        <p className="step-2">2. JWT Token issued by Web2 app or Auth service provider is shared among UCPI Authentication nodes.</p>
        <p className="step-3">3. Each Authentication node seperately verifies the JWT token with the centralised issuer via its APIs and pushes the signed verification data and it's vote on AuthX smart Contract.</p>
        <p className="step-4">4. If all the nodes vote YES, then the Web2 user Id is considered authenticated On-Chain.</p>
      </div>

      <a href="" className="doc-link">
        Learn More
      </a>
    </div>
  );
};

export default Section4;
