// import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
// import generatePDF from "../../services/reportGenerator";
// // import emailjs from "@emailjs/browser";
// import "./ViewTicket.css";
// import axios from "axios";

// import { retrieveAllTickets } from "../../Redux/Actions/tickets";
// import Navbar from "../Navbar/Navbar";

// function ViewTicket ()  {
//   const [viewTicket, setViewTicket] = useState ({
//     items: "",
//     DataIsLoaded: false,
//   })
    

//  useEffect = (e) => {
//     // this.props
//     fetch("http://localhost:9000/ticket")
//       .then((res) => res.json())
//       .then((json) => {
//         console.log(json);
//         setViewTicket({
//           items: json,
//           DataIsLoaded: true,
//         });
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }

    
//     // if (!DataIsLoaded) return;
//     // <div>
//     //   <h1>Please wait...</h1>
//     // </div>;
// return (
//   <div className="view-ticket">
//     <div className="file-nav">
//       <Navbar />
//     </div>

//     <div className="view__ticket">
//       <h1>Tickets</h1>{" "}
//       <table className="table">
//         <thead className="table-head">
//           <tr className="table-cols0">
//             <th scope="col" id="col01">
//               #
//             </th>
//             <th scope="col" id="col02">
//               Staff ID
//             </th>
//             <th scope="col" id="col03">
//               Station ID
//             </th>
//             <th scope="col" id="col04">
//               Machine ID
//             </th>
//             <th scope="col" id="col05">
//               Description
//             </th>
//             <th scope="col"></th>
//           </tr>
//         </thead>
//         <tbody className="table-content">
//           {items.map((item) => (
//             <tr key={item.id} className="table-cols">
//               <td id="col1">{item.id}</td>
//               <td id="col2">{item.staff_id}</td>
//               <td id="col3">{item.station_id}</td>
//               <td id="col4">{item.machine_id}</td>
//               <td id="col5">{item.description}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   </div>
// );
//   }

// const mapStateToProps = (state) => {
//   return {
//     staff: state.staff,
//   };
// };
// export default connect(mapStateToProps, { retrieveAllTickets })(ViewTicket);

// import React from "react";
// import { Link } from "react-router-dom";

// const TicketsComponent = ({ tickets }) => {
//   // a function that assigns bootstrap styling classes based on
//   // the status of the ticket
//   const assignColorToTicketStatus = (ticket) => {
//     if (ticket.status === "completed") {
//       return "p-3 mb-2 bg-success text-white";
//     } else if (ticket.status === "in_progress") {
//       return "p-3 mb-2 bg-warning text-dark";
//     } else if (ticket.status === "opened") {
//       return "p-3 mb-2 bg-light text-dark";
//     }
//   };
//   return (
//     <div className="container">
//       {tickets.length === 0 ? (
//         "You currently have no tickets created"
//       ) : (
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Staff ID</th>
//               <th scope="col">Station ID</th>
//               <th scope="col">Machine ID</th>
//               <th scope="col">Description</th>
//               <th scope="col">Status</th>
//               <th scope="col"></th>
//             </tr>
//           </thead>
//           <tbody>
//             {tickets.map((ticket) => (
//               <tr key={ticket.id}>
//                 <td>{ticket.id}</td>
//                 <td>{ticket.staff_id}</td>
//                 <td>{ticket.station_id}</td>
//                 <td>{ticket.machine_id}</td>
//                 <td>{ticket.description}</td>
//                 <td className={assignColorToTicketStatus(ticket)}>
//                   {ticket.status}
//                 </td>
//                 <td>
//                   <Link to={`/ticket/${ticket.id}`}>See comments</Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default TicketsComponent;
