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
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const transOpt = {
    loop: true,
    autoplay: true,
    animationData: transaction,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const verOpt = {
    loop: true,
    autoplay: true,
    animationData: verify,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const smartOpt = {
    loop: true,
    autoplay: true,
    animationData: smartContact,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const doneOpt = {
    loop: true,
    autoplay: true,
    animationData: done,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="section-2">
      <h1>How it works?</h1>
      <div className="steps">
        <div className="lottie lottie-1">
          <Lottie options={goOpt} height={200} width={200} />
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
          <Lottie options={transOpt} height={50} width={400} />
        </div>
      </div>
      <div className="steps">
        <div className="lottie lottie-3">
          <Lottie options={verOpt} height={300} width={300} />
        </div>
        <div className="text text-3">
          <h2>Step 3</h2>
          <p>Verify gwt token and sign sets.</p>
        </div>
      </div>
      <div className="steps">
        <div className="text text-4">
          <h2>Step 4</h2>
          <p>Signature goes to smart contact.</p>
        </div>
        <div className="lottie lottie-4">
          <Lottie options={smartOpt} height={200} width={200} />
        </div>
      </div>
      <div className="steps">
        <div className="lottie lottie-5">
          <Lottie options={doneOpt} height={200} width={200} />
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
