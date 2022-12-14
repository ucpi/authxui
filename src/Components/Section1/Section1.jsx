import React from "react";
import "./Section1.css";
import { Link } from "react-scroll";
import Navbar from "../Navbar/Navbar";
import ComingSoonBar from "../Coming Soon Bar/ComingSoonBar";
import arrow from "../Images/arrow.png";
// import whatsapp from "../Images/whatsapp-logo.png";
// import discord from "../Images/discord-logo.png";
// import twitter from "../Images/twitter-logo.png";
// import gmail from "../Images/gmail-logo.png";
// import polygon from "../Images/polygon-logo.png";
// import ethereum from "../Images/ethereum-logo.png";
// import solana from "../Images/solana-logo.png";
// import polkadot from "../Images/polkadot-logo.png";
import cosmos from "../Images/cosmos-atom-logo.png";
import bnb from "../Images/bnb-logo.png";
import Main from "../../main";
import whatsapp from "../Images/whatsapp.png";
import twitter from "../Images/twitter.png";
import discord from "../Images/discord.png";
import gmail from "../Images/gmail.png";
import solana from "../Images/solana.png";
import ethereum from "../Images/ethereum.png";
import polygon from "../Images/polygon.png";
import polkadot from "../Images/polkadot-logo.png";

const Section1 = () => {
  return (
    <>
      <div className="section-1-main">
        <Navbar />
        <div className="section-1">
          <div className="text">
            <h1>
              <span>On-Chain</span>
              <br /> Identity Bridge
            </h1>
            <p>
              Smart Contract protocol for decentralised Authentication of Web2
              Id's and user account on Blockchain.
            </p>
            <div className="btn-wrapper">
              <a
                className="btn btn-left"
                href="https://ucpi.gitbook.io/authx/"
                target="_blank"
              >
                Get Started
              </a>
              <Link
                activeClass="active"
                className="btn btn-right"
                to="section-4"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                How it Works
              </Link>
            </div>
          </div>
          <div className="img-container">
            <div className="img-wrapper">
              <img src={whatsapp} alt="whatsapp" />
              <img src={discord} alt="discord" />
              <img src={twitter} alt="twitter" />
              <img src={gmail} alt="gmail" />
            </div>
            <div className="img-wrapper arrow-wrapper">
              <img src={arrow} alt="arrow" className="arrow-img" />
            </div>
            <div className="img-wrapper">
              <img src={polkadot} alt="polkadot" />
              <img src={solana} alt="solana" />
              <img src={polygon} alt="polygon" />
              <img src={ethereum} alt="ethereum" />
            </div>
          </div>
        </div>
        <ComingSoonBar />
      </div>
    </>
  );
};

export default Section1;
