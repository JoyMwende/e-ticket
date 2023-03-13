import React, { Component } from "react";
import { connect } from "react-redux";
// import emailjs from "@emailjs/browser";
import "./FileTicket.css";
// import axios from "axios";

import { createTicket } from "../../Redux/Actions/tickets";
import Navbar from "../Navbar/Navbar";
import SMSForm from "../SMSForm/SMSForm";

class AddTicket extends Component {
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.saveTicket = this.saveTicket.bind(this);
    this.newTicket = this.newTicket.bind(this);
    this.state = {
      description: "",
      staff_id: "",
      machine_id: "",
      station_id: "",
      status: "filed",
    };
    this.form = React.createRef();
    this.sendEmail = this.sendEmail.bind(this);
  }
  onChangeHandler = (e) => {
    this.setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  saveTicket() {
    const { description, staff_id, machine_id, station_id, status } = this.state;
    this.props
      .createTicket(description, staff_id, machine_id, station_id, status)
      .then((data) => {
        this.setState({
          description: data.description,
          staff_id: data.staff_id,
          machine_id: data.machine_id,
          station_id: data.station_id,
          status: data.status,
          submitted: true,
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  newTicket() {
    this.setState({
      description: "",
      staff_id: "",
      machine_id: "",
      station_id: "",
      submitted: false,
    });
  }

  //form = useRef();

  sendEmail = async (e) => {
    e.preventDefault();

    console.log(this.state);
    const response = await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then(() => {
        this.setState({
          staff_id: "",
          station_id: "",
          machine_id: "",
          description: "",
        });
      });

    // let path = `/SMSForm`;
    // navigate(path);
  };

  // componentDidMount() {
  //   const getAllTickets = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3000/Ticketnew");
  //       this.setState(this.state);
  //     } catch (err) {
  //       console.log("error");
  //     }
  //   };
  //   getAllTickets();
  // }

  render() {
    return (
      <div className="app-ticket">
        <div className="file-nav">
          <Navbar />
        </div>
        <div className="app__ticket">
          <h2 className="head-text">Create Ticket!</h2>
          {this.state.submitted ? (
            <div
              className="app__flex"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h3>You successfully created a Ticket!</h3>
              <button onClick={this.newTicket}>Create New</button>
              <br></br>
              <button type="button" ref={this.form} onClick={this.sendEmail}>
                Send Email
              </button>
              <br></br>
              <SMSForm />
            </div>
          ) : (
            <form className="app_ticket-form app_flex">
              <div className="form-data">
                <div className="app_steps head-text app_flex">1</div>
                <label htmlFor="pickuploc" className="input-text">
                  Staff ID
                </label>
                <input
                  type="text"
                  name="staff_id"
                  value={this.staff_id}
                  className="input-text"
                  onChange={this.onChangeHandler}
                />
                <label name="senderPhone" className="input-text">
                  Station ID
                </label>
                <select
                  name="station_id"
                  value={this.station_id}
                  onChange={this.onChangeHandler}
                >
                  <option value="select">Select</option>
                  <option>NCRH_001</option>
                  <option>NCRH_002</option>
                  <option>NCRH_003</option>
                  <option>NCRH_004</option>
                  <option>NCRH_005</option>
                  <option>NCRH_006</option>
                  <option>NCRH_007</option>
                  <option>NCRH_008</option>
                  <option>NCRH_009</option>
                  <option>NCRH_010</option>
                  <option>NCRH_011</option>
                  <option>NCRH_012</option>
                </select>
                {/* <input
                type="text"
                className="input-text"
                name="staff_id"
                value={this.staff_id}
                placeholder="STAFF ID"
                onChange={this.onChangeHandler}
              /> */}
                <label htmlFor="tickettype" className="input-text">
                  Machine ID
                </label>
                <select
                  name="machine_id"
                  value={this.machine_id}
                  className="input-text"
                  placeholder="machine_id"
                  onChange={this.onChangeHandler}
                >
                  <option value="select">Select</option>

                  <option>NCRH_001/001</option>
                  <option>NCRH_001/002</option>

                  <option>NCRH_002/001</option>
                  <option>NCRH_002/002</option>
                  <option>NCRH_002/003</option>
                  <option>NCRH_002/004</option>
                  <option>NCRH_002/005</option>
                  <option>NCRH_002/006</option>
                  <option>NCRH_002/007</option>
                  <option>NCRH_002/008</option>
                  <option>NCRH_002/009</option>
                  <option>NCRH_002/010</option>
                  <option>NCRH_002/011</option>
                  <option>NCRH_002/012</option>
                  <option>NCRH_002/013</option>
                  <option>NCRH_002/014</option>
                  <option>NCRH_002/015</option>
                  <option>NCRH_002/016</option>

                  <option>NCRH_003/001</option>
                  <option>NCRH_003/002</option>
                  <option>NCRH_003/003</option>
                  <option>NCRH_003/004</option>
                  <option>NCRH_003/005</option>
                  <option>NCRH_003/006</option>
                  <option>NCRH_003/007</option>
                  <option>NCRH_003/008</option>
                  <option>NCRH_003/009</option>
                  <option>NCRH_003/010</option>
                  <option>NCRH_003/011</option>
                  <option>NCRH_003/012</option>

                  <option>NCRH_005/001</option>
                  <option>NCRH_005/002</option>
                  <option>NCRH_005/003</option>
                  <option>NCRH_005/004</option>
                  <option>NCRH_005/005</option>
                  <option>NCRH_005/006</option>
                  <option>NCRH_005/007</option>
                  <option>NCRH_005/008</option>
                  <option>NCRH_005/009</option>
                  <option>NCRH_005/010</option>
                  <option>NCRH_005/011</option>
                  <option>NCRH_005/012</option>
                  <option>NCRH_005/013</option>
                  <option>NCRH_005/014</option>
                  <option>NCRH_005/015</option>
                  <option>NCRH_005/016</option>

                  <option>NCRH_007/001</option>
                  <option>NCRH_007/002</option>
                  <option>NCRH_007/003</option>
                  <option>NCRH_007/004</option>
                  <option>NCRH_007/005</option>
                  <option>NCRH_007/006</option>
                  <option>NCRH_007/007</option>
                  <option>NCRH_007/008</option>

                  <option>NCRH_008/001</option>
                  <option>NCRH_008/002</option>
                  <option>NCRH_008/003</option>
                  <option>NCRH_008/004</option>
                  <option>NCRH_008/005</option>
                  <option>NCRH_008/006</option>

                  <option>NCRH_009/001</option>
                  <option>NCRH_009/002</option>
                  <option>NCRH_009/003</option>
                  <option>NCRH_009/004</option>
                  <option>NCRH_009/005</option>
                  <option>NCRH_009/006</option>

                  <option>NCRH_010/001</option>
                  <option>NCRH_010/002</option>
                  <option>NCRH_010/003</option>
                  <option>NCRH_010/004</option>
                  <option>NCRH_010/005</option>
                  <option>NCRH_010/006</option>
                  <option>NCRH_010/007</option>
                  <option>NCRH_010/008</option>
                  <option>NCRH_010/009</option>
                  <option>NCRH_010/010</option>

                  <option>NCRH_011/001</option>
                  <option>NCRH_011/002</option>
                  <option>NCRH_011/003</option>
                  <option>NCRH_011/004</option>
                  <option>NCRH_011/005</option>
                  <option>NCRH_011/006</option>
                  <option>NCRH_011/007</option>
                  <option>NCRH_011/008</option>
                  <option>NCRH_011/009</option>
                  <option>NCRH_011/010</option>
                  <option>NCRH_011/011</option>
                  <option>NCRH_011/012</option>
                  <option>NCRH_011/013</option>
                  <option>NCRH_011/014</option>
                  <option>NCRH_011/015</option>
                  <option>NCRH_011/016</option>

                  <option>NCRH_012/001</option>
                  <option>NCRH_012/002</option>
                  <option>NCRH_012/003</option>
                  <option>NCRH_012/004</option>
                  <option>NCRH_012/005</option>
                  <option>NCRH_012/006</option>
                  <option>NCRH_012/007</option>
                  <option>NCRH_012/008</option>
                  <option>NCRH_012/009</option>
                  <option>NCRH_012/010</option>
                  <option>NCRH_012/011</option>
                  <option>NCRH_012/012</option>
                  <option>NCRH_012/013</option>
                  <option>NCRH_012/014</option>
                  <option>NCRH_012/015</option>
                  <option>NCRH_012/016</option>
                </select>
                {/* <input
                type="text"
                name="machine_id"
                value={this.machine_id}
                className="input-text"
                placeholder="machine_id"
                onChange={this.onChangeHandler}
              /> */}

                <label htmlFor="receiverphone" className="input-text">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  value={this.description}
                  className="input-text"
                  placeholder="desc"
                  onChange={this.onChangeHandler}
                />
                <button type="button" onClick={this.saveTicket}>
                  SUBMIT
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    staff: state.staff,
  };
};
export default connect(mapStateToProps, { createTicket })(AddTicket);
