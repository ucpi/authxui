import React, { useState } from "react";
import "./Section5.css";
import { questions } from "./api";
import MyAccordion from "./MyAccordion";

const Section5 = () => {
  const [data, setData] = useState(questions);

  return (
    <>
    <section className="section-5">
      <h1 className="heading">
        <span>Have any query?</span>
        <br />
        FAQ's
      </h1>
      <div className="faq-container">
        {data.map((curElem) => {
          const { id } = curElem;
          return <MyAccordion key={id} {...curElem} />;
        })}
      </div>
    </section>
    </>
  );
};

export default Section5;
