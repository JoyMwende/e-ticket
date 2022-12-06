import React, { useEffect, useState } from "react";
import generatePDF from "../../services/reportGenerator";
import axios from 'axios'
import TicketsComponent from "../TicketsComponent/TicketsComponent";
import Navbar from "../Navbar/Navbar";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const getAllTickets = async () => {
      try {
        const response = await axios.get("http://localhost:9000/ticket/");
        setTickets(response.data.tickets);
      } catch (err) {
        console.log("error");
      }
    };
    getAllTickets();
  }, []);

  const reportTickets = tickets.filter(
    (ticket) => ticket.status === "completed"
  );

  return (
    <div>
      <div className="ticktets-nav">
        <Navbar />
      </div>
      <div className="container mb-4 mt-4 p-3">
        <div className="row">
          {/* {user.user.role === "user" ? (
            <> </>
          ) : ( */}
            <button
              className="btn btn-primary"
              onClick={() => generatePDF(reportTickets)}
            >
              Generate report
            </button>
          {/* )} */}
        </div>
      </div>
      <TicketsComponent tickets={tickets} />
    </div>
  );
};

export default Tickets;
