import React from "react";
import "./ComingSoonBar.css";
import polygon from "../Images/polygon.png";
import ethereum from "../Images/ethereum-logo.png";
import solana from "../Images/solana-logo.png";
import polkadot from "../Images/polkadot-logo.png";
import cosmos from "../Images/cosmos-atom-logo.png";

const ComingSoonBar = () => {
  return (
    <div className="cs-bar">
      <h2>Coming soon on:</h2>
      <div className="img-container">
        <img src={polygon} alt="polygon" />
        <img src={polkadot} alt="polkadot" />
        <img src={solana} alt="solana" />
        <img src={ethereum} alt="ethereum" />
        <img src={cosmos} alt="cosmos" />
      </div>
      <h2>and many more...</h2>
    </div>
  );
};

export default ComingSoonBar;
