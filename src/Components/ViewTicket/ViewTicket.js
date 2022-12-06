import React, { Component } from "react";
import { connect } from "react-redux";
import generatePDF from "../../services/reportGenerator";
// import emailjs from "@emailjs/browser";
import "./ViewTicket.css";
import axios from "axios";

import {  retrieveAllTickets } from "../../Redux/Actions/tickets";
import Navbar from "../Navbar/Navbar";

class ViewTicket extends Component {
  constructor(props) {
    super(props);
    //this.reportTicket = this.reportTicket.bind(this);
    this.state = {
      items: [],
      DataIsLoaded: false,
      offset: 0,
      data: [],
      perPage: 10,
      currentPage: 0,
    };
  }
 



  componentDidMount() {
    // this.props
      fetch("http://localhost:9000/ticket")
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          this.setState({
            items: json,
            DataIsLoaded: true
          })
        })
        .catch((e) => {
          console.log(e);
        });
  }
  

 
  render() {
    const { DataIsLoaded, items } = this.state;
    if(!DataIsLoaded) return 
    <div>
      <h1>Please wait...</h1>
    </div>

    return (
      <div className="view-ticket">
        <div className="file-nav">
          <Navbar />
        </div>

        <div className="view__ticket">
          <h1>Tickets</h1>{" "}
          <table className="table">
            <thead className="table-head">
              <tr className="table-cols0">
                <th scope="col" id="col01">
                  ID
                </th>
                <th scope="col" id="col02">
                  Staff ID
                </th>
                <th scope="col" id="col03">
                  Station ID
                </th>
                <th scope="col" id="col04">
                  Machine ID
                </th>
                <th scope="col" id="col05">
                  Description
                </th>
                <th scope="col" id="col06">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="table-content">
              {items.map((item) => (
                <tr key={item.id} className="table-cols">
                  <td id="col1">{item.id}</td>
                  <td id="col2">{item.staff_id}</td>
                  <td id="col3">{item.station_id}</td>
                  <td id="col4">{item.machine_id}</td>
                  <td id="col5">{item.description}</td>
                  <td id="col6">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
export default connect(mapStateToProps, { retrieveAllTickets })(ViewTicket);
