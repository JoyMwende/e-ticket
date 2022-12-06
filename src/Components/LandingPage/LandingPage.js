import React from "react";
import { Link } from "react-router-dom";
import image from "../../Images/signup.jpg";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landingpage">
      <div className="image">
        <img src={image} alt="parcel" />
      </div>
      <div className="content">
        <div className="text-1">
          <h2>
             Nyeri County Referral Hospital Help Desk System
          </h2>
        </div>
        <div className="text-2">
          <p>Our help desk system automates the process of reporting faulty machines
            around the hospital where the reported cases are immediately responded to.
          </p>
          <p>
            Click the button below to create your account as a staff member of
            the Nyeri County Referral Hospital
          </p>
        </div>
        <div className="join">
          <Link to="/Login" id="join">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
