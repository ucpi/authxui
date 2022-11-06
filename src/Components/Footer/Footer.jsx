import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="top-left">
          <h1>authx</h1>
          <p>
            AuthX protocol is developed by UCPI to enable the transition of Web2
            to Web3 by allowing people to interact with complex DApps through
            their existing Web2 social ids.
          </p>
        </div>
        <div className="top-right">
          <h2>Join the waitlist</h2>
          <p>We will keep you updated</p>
          <input type="text" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="links">
          <div className="link">
            <a href="https://twitter.com/UCPI_tech" target="_blank">
              <i class="fa-brands fa-twitter icon"></i>
            </a>
          </div>
          <div className="link">
            <a href="https://discord.gg/v6ruvP3v7w" target="_blank">
              <i class="fa-brands fa-discord icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
