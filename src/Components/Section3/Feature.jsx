import React from "react";
import "./Feature.css";

const Feature = (props) => {
  return (
    <>
      <div className="feature">
        <i className={props.icon}></i>
        <p>{props.text}</p>
      </div>
    </>
  );
};

export default Feature;
