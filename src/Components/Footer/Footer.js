import React from "react";
import { Link } from "react-router-dom";
import email from "../../Images/email.png";
import facebook from "../../Images/facebook.png";
import instagram from "../../Images/instagram.png";
import call from "../../Images/phone-call.png";
import twitter from "../../Images/twitter.png";
import location from "../../Images/pin.png";
import linkedin from "../../Images/linkedin.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-1">
        <h3>Quick Links</h3>
        <Link id="links" to="/Home">
          Home
        </Link>
        <Link id="links" to="/Ticket">
          File Ticket
        </Link>
        <Link id="links" to="/#">
          View Ticket
        </Link>
        <Link id="links" to="/Signup">
          Sign Up
        </Link>
        <Link id="links" to="/Login">
          Log In
        </Link>
      </div>

      <div className="footer-2">
        <div className="contact">
          <h3>Contact Us</h3>
        </div>
        <div className="call">
          <div className="call-1">
            <img src={call} alt="call" />
          </div>
          <div className="p">
            <p>+2547xxxxxxxx</p>
          </div>
        </div>
        <div className="email">
          <div className="email-1">
            <img src={email} alt="call" />
          </div>
          <div className="p">
            <p>abc@gmail.com</p>
          </div>
        </div>
        <div className="icons">
          <img src={linkedin} alt="linkedin" />
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
        </div>
      </div>

      <div className="footer-3">
        <img src={location} alt="location" />
        <p>P.O BOX 657-10100</p>
        <p>Nyeri-Kenya</p>
      </div>
    </div>
  );
}

export default Footer;
