import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const showAndHideHandler = () => {
    setShow(!show);
  };
  return (
    <>
      <header>
        <h1 className="logo">DAuth</h1>

        <div
          id="menu-bar"
          className="fas fa-bars"
          onClick={showAndHideHandler}
        ></div>

        <nav className={show ? "navbar active" : "navbar"} id="nav">
          <Link
            activeClass="active"
            to="section-2"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Importance
          </Link>
          <Link
            activeClass="active"
            to="section-3"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Use Cases
          </Link>
          <Link
            activeClass="active"
            to="section-4"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            How It Works?
          </Link>
          <Link
            activeClass="active"
            to="section-5"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            FAQ's
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
