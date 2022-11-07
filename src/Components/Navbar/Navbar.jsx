import React, { useState } from "react";
import "./Navbar.css";
import { ScrollTo } from "react-scroll-to/dist";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const showAndHideHandler = () => {
    setShow(!show);
  };
  return (
    <header>
      <h1 className="logo">authx</h1>

      <div
        id="menu-bar"
        className="fas fa-bars"
        onClick={showAndHideHandler}
      ></div>

      <nav className={show ? "navbar active" : "navbar"} id="nav">
        <ScrollTo>
          {({ scroll }) => (
            <a
              className="list-item"
              onClick={() => scroll({ y: 900, smooth: true })}
            >
              Importance
            </a>
          )}
        </ScrollTo>
        <ScrollTo>
          {({ scroll }) => (
            <a
              className="list-item"
              onClick={() => scroll({ y: 1500, smooth: true })}
            >
              Use Cases
            </a>
          )}
        </ScrollTo>
        <ScrollTo>
          {({ scroll }) => (
            <a
              className="list-item"
              onClick={() => scroll({ y: 2500, smooth: true })}
            >
              How It Works?
            </a>
          )}
        </ScrollTo>
        <ScrollTo>
          {({ scroll }) => (
            <a
              className="list-item"
              onClick={() => scroll({ y: 3500, smooth: true })}
            >
              FAQs
            </a>
          )}
        </ScrollTo>
      </nav>
    </header>
  );
};

export default Navbar;
