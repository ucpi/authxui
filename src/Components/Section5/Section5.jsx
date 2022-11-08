import React, { useState } from "react";
import "./Section5.css";
import { Element } from "react-scroll";
import { questions } from "./api";
import MyAccordion from "./MyAccordion";

const Section5 = () => {
  const [data, setData] = useState(questions);

  return (
    <>
      <>
        <Element
          id="section-5"
          className="section-5"
          name="example-destination"
        >
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
        </Element>
      </>
    </>
  );
};

export default Section5;
