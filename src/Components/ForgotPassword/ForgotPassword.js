import React from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

import Userfront from "@userfront/react";

Userfront.init("demo1234");

function ForgotPassword() {
  return (
    <div className="forgotpassword">
      <form className="forgot-form">
        <div className="forgot-title">
          <h1>E-Ticket System</h1>
          <h2>Forgot Password Form</h2>
        </div>
        <div className="forgot-text">
          <p>
            You are seeing this form because you forgot your password. Please
            key in your <br></br>email address and you will receive an email to
            reset your password in just a few seconds.
          </p>
        </div>
        <div className="forgot-email">
          <label>Email</label>
          <input
            id="address"
            type="email"
            name="email"
            placeholder="abc@gmail.com"
          />
        </div>
        <div className="forgot-button">
          <button>Send</button>
        </div>

        <Link to="/ResetPassword">Reset Password</Link>
      </form>
    </div>
  );
}

export default ForgotPassword;
