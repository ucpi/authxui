import React from "react";
import "./Section2.css";
import { Element } from "react-scroll";
import why from "../Images/why.jpg";

const Section2 = () => {
  return (
    <>
      <Element id="section-2" className="section-2" name="example-destination">
        <div className="why-description">
          <h1>
            Why <span>DAuth</span> ?
          </h1>
          <p>
            Exchange are Money Bridge, Oracles are Data Bridge, similarly DAuth
            is Identity Bridge between Web2 and Web3.
          </p>
          <p>
            UX is the biggest barrier in user growth across Web3 applications.
            Masses are not comfortable with wallets, Seed phrase, private key
            and all such stuff. They need easier ways to interact with web3,
            ideally what they have been using in web2.
          </p>
          <p>
            AuthX enables web3 apps to leverage the simplicity and distribution
            of web2 user id's to onboard new users and offer them a smooth UX in
            onboarding and navigating the Web3.
          </p>
        </div>
        <img src={why} alt="" />
      </Element>
    </>
  );
};

export default Section2;
