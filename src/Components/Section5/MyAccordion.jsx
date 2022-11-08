import React from "react";
import { useState } from "react";
import "./MyAccordion.css";

const MyAccordion = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="question">
        <p onClick={() => setShow(!show)}>{show ? "➖" : "➕"}</p>
        <h3>{question}</h3>
      </div>
      {show && <p className="answer">{answer}</p>}
    </>
  );
};

export default MyAccordion;
