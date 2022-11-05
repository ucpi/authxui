import React from "react";
import "./Navbar.css";
import { ScrollTo } from "react-scroll-to/dist";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>authx</h1>
      <div className="links">
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
      </div>
    </div>
  );
};

export default Navbar;
