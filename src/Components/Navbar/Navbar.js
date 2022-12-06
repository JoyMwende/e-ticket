import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import menubig from "../../Images/menu-big.png";
import { Navigate } from "react-router-dom";
import { app } from "../../base"

function Navbar() {
  const navigate = useNavigate();
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const handleMenu = (e) => {
    e.preventDefault();
    if (isMenuVisible === false) {
      setIsMenuVisible(true);
    } else {
      setIsMenuVisible(false);
    }
  };

   const handleLogout = (e) => {
     e.preventDefault();
     let path = `/`;
     navigate(path);
   };

  return (
    <div className="navbar">
      <div className="nav-title">
        <h1>Help Desk System</h1>
      </div>
      <div className="menu-web">
        <Link id="link" to="/Dashboard">
          Dashboard
        </Link>
        <Link id="link" to="/TicketNew">
          File Ticket
        </Link>
        <Link id="link" to="/ViewTicket">
          View Ticket
        </Link>
      </div>
      <div className="nav-register">
        <button id="sign" onClick={handleLogout/*() => app.auth().signOut()*/}>
          Logout
        </button>
      </div>

      <div className="hamburger">
        <img src={menubig} alt="menu" onClick={handleMenu} />
        {isMenuVisible || (
          <div className="menu-mobile">
            <Link id="link" to="/Dashboard">
              Dashboard
            </Link>
            <Link id="link" to="/FileTicket">
              File Ticket
            </Link>
            <Link id="link" to="/Tickets">
              View Ticket
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
