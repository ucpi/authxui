import React from "react";
import "./Feature.css";
import Tilt from 'react-tilt'

const Feature = (props) => {
  return (
    <>
    <Tilt className="Tilt feature" options={{ max : 25 }} style={{ height: 230, width: 270 }} >
    {/* <div className="feature"> */}
      <i className={props.icon}></i>
      <p>{props.text}</p>
    {/* </div> */}
    </Tilt>
    </>
  );
};

export default Feature;
