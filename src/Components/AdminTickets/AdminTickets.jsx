import React, { Component } from "react";
import { connect } from "react-redux";
// import { MdDelete } from "react-icons/md";

import {
  retrieveTickets,
  retrieveAllTickets,
  deleteAllTickets,
} from "../../Redux/Actions/tickets";
import "./AdminTickets.css";

class AdminTickets extends Component {
  constructor(props) {
    super(props);
    this.refreshData = this.refreshData.bind(this);
    this.removeAllTickets = this.removeAllTickets.bind(this);
    this.state = {
      currentTicket: null,
    //   id: this.props.staff.staff.staff.staff_id,
    };
  }
  componentDidMount() {
    this.props.retrieveAllTickets();
  }
  refreshData() {
    this.setState({
      currentTicket: null,
    });
  }
  removeAllTickets() {
    this.props
      .deleteAllTickets()
      .then((response) => {
        console.log(response);
        this.refreshData();
      })
      .catch((e) => {
        console.log(e);
      });
  }
  render() {
    const { tickets } = this.props;
    return (
      <div className="app_admin app_flex">
        <h2 className="head-text">Reported Faulty Machines</h2>
        {tickets &&
          tickets.map((ticket) => (
            <div className="app__admin-tickets" key={ticket.id}>
              <div className="ticket_details">
                <h3>
                  Ticket ID:<span>{ticket.id}</span>
                </h3>
                <h3>
                  Staff ID : <span>{ticket.staff_id}</span>
                </h3>
                <h3>
                  Machine ID : <span>{ticket.machine_id}</span>
                </h3>
                <h3>
                  Station ID <span>{ticket.station_id} </span>
                </h3>
                <h3>
                  Description <span>{ticket.description} </span>
                </h3>
              </div>
              {/* <div className="ticket_events">
                <h4>IN TRANSIT</h4> */}
                {/* <h5>
                  {" "}
                  <MdDelete />
                </h5> */}
              {/* </div> */}
            </div>
          ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
    // staff: state.staff,
  };
};
export default connect(mapStateToProps, {
  retrieveTickets,
  retrieveAllTickets,
  deleteAllTickets,
})(AdminTickets);
