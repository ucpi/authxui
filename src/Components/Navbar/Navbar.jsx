import React from "react";
import "./Navbar.css";
import { ScrollTo } from "react-scroll-to/dist";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [showMenuIcon, setShowMenuIcon] = useState(false);
  return (
    <div className="navbar">
      <h1>authx</h1>
      <div className={showMenuIcon ? "links-container mobile-menu-link" : "links-container"}>
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
      {/* Hamburger Menu */}
      <div className="hamburger-menu">
        <a href="#" onClick={() => setShowMenuIcon(!showMenuIcon)}>
          <GiHamburgerMenu />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
