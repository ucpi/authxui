import React from "react";
import "./Section2.css";
import Lottie from "react-lottie";
import google from "../google.json";
import transaction from "../transaction.json";
import verify from "../verify.json";
import smartContact from "../smartcontact.json";
import done from "../done.json";

const Section2 = () => {
  const goOpt = {
    loop: true,
    autoplay: true,
    animationData: google,
  };
  const transOpt = {
    loop: true,
    autoplay: true,
    animationData: transaction,
  };
  const verOpt = {
    loop: true,
    autoplay: true,
    animationData: verify,
  };
  const smartOpt = {
    loop: true,
    autoplay: true,
    animationData: smartContact,
  };
  const doneOpt = {
    loop: true,
    autoplay: true,
    animationData: done,
  };
  return (
    <div className="section-2">
      <h1>How it works?</h1>
      <div className="steps step-1">
        <div className="lottie lottie-1">
          <Lottie options={goOpt} />
        </div>
        <div className="text text-1">
          <h2>Step 1</h2>
          <p>Login with Google.</p>
        </div>
      </div>
      <div className="steps step-2">
        <div className="text text-2">
          <h2>Step 2</h2>
          <p>Sign the Transaction.</p>
        </div>
        <div className="lottie lottie-2">
          <Lottie options={transOpt} />
        </div>
      </div>
      <div className="steps step-3">
        <div className="lottie lottie-3">
          <Lottie options={verOpt} />
        </div>
        <div className="text text-3">
          <h2>Step 3</h2>
          <p>Verify jwt token and sign sets.</p>
        </div>
      </div>
      <div className="steps step-4">
        <div className="text text-4">
          <h2>Step 4</h2>
          <p>Signature goes to smart contact.</p>
        </div>
        <div className="lottie lottie-4">
          <Lottie options={smartOpt} />
        </div>
      </div>
      <div className="steps step-5">
        <div className="lottie lottie-5">
          <Lottie options={doneOpt} />
        </div>
        <div className="text text-5">
          <h2>Step 5</h2>
          <p>All done.</p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
