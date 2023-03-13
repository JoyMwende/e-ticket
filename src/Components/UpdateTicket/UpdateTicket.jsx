import React, { Component } from "react";
import { connect, useDispatch } from "react-redux";
import generatePDF from "../../services/reportGenerator";
// import emailjs from "@emailjs/browser";
import "./UpdateTicket.css";
import { retrieveTickets, updateTicket } from "../../Redux/Actions/tickets";
import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function UpdateTicket() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const [item, setItem] = useState();

  useEffect(() => {
    // dispatch(retrieveTickets(id));
    fetch(`http://localhost:9000/ticket/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setItem(json.recordsets[0][0]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  const handleProgress = (e) => {
    e.preventDefault();
    const data = {
      id: item.id,
      staff_id: item.staff_id,
      station_id: item.station_id,
      machine_id: item.machine_id,
      description: item.description,
      status: "in progress",
    };
    dispatch(updateTicket(id, data));
  };

  const handleComplete = (e) => {
    e.preventDefault();
    const data = {
      id: item.id,
      staff_id: item.staff_id,
      station_id: item.station_id,
      machine_id: item.machine_id,
      description: item.description,
      status: "completed",
    };
    dispatch(updateTicket(id, data));
  };

  return (
    <div className="view-ticket">
      <div className="file-nav">
        <Navbar />
      </div>

      <div className="view__ticket">
        <h1> Filed Tickets</h1>{" "}
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
            <tr className="table-cols">
              <td id="col1">{item?.id}</td>
              <td id="col2">{item?.staff_id}</td>
              <td id="col3">{item?.station_id}</td>
              <td id="col4">{item?.machine_id}</td>
              <td id="col5">{item?.description}</td>
              <td id="col6">{item?.status}</td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <br></br>
        <button className="view-button" onClick={handleProgress}>
          In Progress
        </button>
        <button className="view-button" onClick={handleComplete}>
          Completed
        </button>
      </div>
    </div>
  );
}

export default UpdateTicket;
