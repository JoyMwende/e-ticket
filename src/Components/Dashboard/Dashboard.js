import React from "react";
import { useNavigate } from "react-router";
import Navbar from "../Navbar/Navbar";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const handleReport = (e) => {
    e.preventDefault();
    let path = `/TicketNew`;
    navigate(path);
  };
  return (
    <div className="dashboard-1">
      <div className="dash1-nav">
        <Navbar />
      </div>
      <div className="dash1-content">
        <div className="dash1-text1">
          <h1>Nyeri County Referral Hospital</h1>
        </div>
        <div className="dash1-text2">
          <p>Report Faulty Machine in Your Station of Work</p>
        </div>
        <div className="dash1-button">
          <button onClick={handleReport}>Report</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
