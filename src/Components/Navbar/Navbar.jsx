import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>UCPI</h1>
      <div className="links">
        <a href="https://twitter.com/UCPI_tech" target="_blank">
          <i class="fa-brands fa-twitter icon"></i>
        </a>
        <a href="https://discord.gg/v6ruvP3v7w" target="_blank">
          <i class="fa-brands fa-discord icon"></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
