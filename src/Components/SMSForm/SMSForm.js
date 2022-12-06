import React from "react";
import { ReactDialogBox } from "react-js-dialog-box";
import "react-js-dialog-box/dist/index.css";
import './SMSForm.css'

class SMSForm extends React.Component {
  constructor() {
    super();
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.state = {
      to: "",
      message: "",
      isOpen: false,
    };
    this.sendSMS = this.sendSMS.bind(this);
  }

  openBox = () => {
    this.setState({
      isOpen: true,
      to: "",
      message: "",
    });
  };

  closeBox = () => {
    this.setState({
      isOpen: false,
    });
  };

  onChangeHandler = (e) => {
    this.setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  sendSMS = async(e) => {
    e.preventDefault(e);
    console.log(this.state)
    const response = await fetch("http://localhost:3002/api/messages", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then(() => {
        this.setState({
          to: "",
          message: "",
        });
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.openBox}>Send SMS </button>

        {this.state.isOpen && (
          <>
            <ReactDialogBox
              closeBox={this.closeBox}
              modalWidth="60%"
              headerBackgroundColor="dodgerblue"
              headerTextColor="white"
              headerHeight="65"
              closeButtonColor="white"
              bodyBackgroundColor="white"
              bodyTextColor="black"
              bodyHeight="500px"
              headerText="Send SMS Form"
            >
              <div className="sms-form">
                <form onSubmit={this.sendSMS}>
                  <div className="sendsms">
                    {/* <div className="sms-title">
                      <h2>Message Box</h2>
                    </div> */}
                    <div className="sms-to">
                      <label htmlFor="to">To:</label>
                      <input
                        type="tel"
                        name="to"
                        id="to"
                        onChange={this.onChangeHandler}
                        value={this.to}
                      />
                    </div>
                    <div className="sms-body">
                      <label htmlFor="body">Message:</label>
                      <textarea
                        name="message"
                        id="message"
                        onChange={this.onChangeHandler}
                        value={this.message}
                      />
                    </div>
                  </div>
                  <div className="smsform-button">
                    <button>Send SMS</button>
                  </div>
                </form>
              </div>
            </ReactDialogBox>
          </>
        )}
      </div>
    );
  }
}

export default SMSForm;
