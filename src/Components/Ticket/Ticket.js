import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fileTicket } from "../../Redux/Actions/ticketAction";
import Navbar from "../Navbar/Navbar";
import "./Ticket.css";
import emailjs from "@emailjs/browser";

function Ticket() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { success, error } = useSelector((state) => state.ticket);
  const [newTicketData, setNewTicketData] = useState({
    staff_id: "",
    station_id: "",
    machine_id: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (success) {
      console.log("Ticket filed.");
    } else {
      console.log(`Ticket filling failed: ${error}`);
    }

    // let data = fetchData();
    // setNewTicketData(data);
  }, [success, error]);

  // function handleStateChange(e) {
  //   setMailerState((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // }

  const handleFileTicket = (e) => {
    e.preventDefault();
    dispatch(fileTicket(newTicketData));
    alert("Ticket Filed Successfully!");

  
  };

   //const form = useRef();

  //  const submitEmail = (e) => {
  //    e.preventDefault();
  //    console.log("Sending");
  //    let data = {
  //      newTicketData,
  //    };
  //    fetch("http://localhost:3001/send", {
  //      method: "POST",
  //      headers: {
  //        Accept: "application/json, text/plain, */*",
  //        "Content-Type": "application/json",
  //      },
  //      body: JSON.stringify(data),
  //    }).then((res) => {
  //      console.log("Response received");
  //      if (res.status === 200) {
  //        console.log("Response succeeded!");
  //        setSubmitted(true);
  //        setNewTicketData();
  //      }
  //    });
  //  };

  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ newTicketData });
    const response = await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ newTicketData }),
    })
      .then((res) => res.json())
      .then(() => {
        setNewTicketData({
          staff_id: "",
          station_id: "",
          machine_id: "",
          description: "",
        });
      });

        let path = `/SMSForm`;
        navigate(path);
  };

  return (
    <div className="ticket">
      <div className="ticket-nav">
        <Navbar />
      </div>
      <div className="ticket-form">
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <fieldset
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "50%",
            }}
          > */}

          <div className="eticket-form">
            <div className="eticket-title">
              <h1>E-Ticket Form</h1>
            </div>
            <div className="eticket-name">
              <label id="ticket-name">Staff ID:</label>
              <input
                placeholder="StaffId"
                type="text"
                name="staff_id"
                value={newTicketData.staff_id}
                onChange={(e) => {
                  setNewTicketData({
                    ...newTicketData,
                    staff_id: e.target.value,
                  });
                }}
                required
              />
            </div>
            <div className="eticket-station">
              <label>Station ID</label>
              <select
                name="station_id"
                value={newTicketData.station_id}
                onChange={(e) => {
                  setNewTicketData({
                    ...newTicketData,
                    station_id: e.target.value,
                  });
                }}
                required
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
            </div>

            <div className="eticket-machine">
              <label>Machine ID</label>
              <select
                name="machine_id"
                value={newTicketData.machine_id}
                onChange={(e) => {
                  setNewTicketData({
                    ...newTicketData,
                    machine_id: e.target.value,
                  });
                }}
                required
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
            </div>
            <div className="eticket-description">
              <label>Description</label>
              <textarea
                style={{ minHeight: "200px" }}
                placeholder="Description of faulty machine"
                type="text"
                name="description"
                value={newTicketData.description}
                onChange={(e) => {
                  setNewTicketData({
                    ...newTicketData,
                    description: e.target.value,
                  });
                }}
                required
              />
            </div>
            <div className="eticket-button">
              <div className="file-button">
                <button id="file-button" onClick={handleFileTicket}>
                  File Ticket
                </button>
              </div>
              <div className="ticket-buttons">
                <button id="ticket-button" onClick={submitEmail}>
                  Send Email
                </button>
                <button id="ticket-button">Send sms</button>
              </div>
            </div>
          </div>
          {/* </fieldset> */}
        </form>
      </div>
    </div>
  );
}

export default Ticket;
