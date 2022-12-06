import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './ResetPassword.css'
import Userfront from "@userfront/core"
import Alert from '../Alert/Alert'

//Initialize Userfront Core JS
Userfront.init("demo1234");

Userfront.sendResetLink("joymwendekairi@gmail.com");

//Define the Password Reset form component
class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      passwordVerify: "",
      alertMessage: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setAlertMessage = this.setAlertMessage.bind(this);
  }

  //Whenever an input changes value, change the corresponding state variable
  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    //Reset the alert to empty
    this.setAlertMessage();

    //verify that the passwords match
    if (this.state.password !== this.state.passwordVerify) {
      return this.setAlertMessage("Password must match!");
    }

    //Call Userfront.resetPassword()
    Userfront.resetPassword({
      password: this.state.password,
    }).catch((error) => {
      this.setAlertMessage(error.message);
    });

    // Read token & uuid from the URL
    Userfront.resetPassword({
      password: "myshinynewpassword",
    });

    // Pass token & uuid explicitly
    Userfront.resetPassword({
      password: "myshinynewpassword",
      token: "34765497-f806-4be2-a32e-26df63ce9f7f",
      uuid: "fc7e203f-d70c-4c60-9656-7a4558140ef1",
    });
  }

  setAlertMessage(message) {
    this.setState({ alertMessage: message });
  }

  render() {
    return (
      <div className="resetpassword">
        <Alert message={this.state.alertMessage} />
        <form onSubmit={this.handleSubmit}>
          <div className="reset-header">
            <h2>Reset Password</h2>
          </div>
          <div className="reset-form">
            <p>
              You are seeing this form because you requested for a password
              reset. If you did not request this please ignore and{" "}
              <Link to="/Login" id="reset-login">
                login
              </Link>
            </p>
            <label>New Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />
            <label>Confirm Password</label>
            <input
              type="password"
              name="passwordVerify"
              value={this.state.passwordVerify}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <br></br>
          <div className="reset-button">
            <button type="submit">Reset Password</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ResetPassword;