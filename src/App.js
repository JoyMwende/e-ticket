import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import LandingPage from "./Components/LandingPage/LandingPage";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Ticket from "./Components/Ticket/Ticket";
// import Footer from "./Components/Footer/Footer";
import SMSForm from "./Components/SMSForm/SMSForm";
import Dashboard from "./Components/Dashboard/Dashboard";
import ViewTicket from "./Components/ViewTicket/ViewTicket";
import Navbar from "./Components/Navbar/Navbar";
import FileTicket from "./Components/FileTicket/FileTicket";
import Tickets from "./Components/Tickets/Tickets";
import TicketsComponent from "./Components/TicketsComponent/TicketsComponent";
import GenerateReport from "./Components/GenerateReport/GenerateReport";
import AdminTickets from "./Components/AdminTickets/AdminTickets";
// import { AuthProvider } from "./auth";
// import { ContactUs } from './Components/Email/Email';

function App() {
  return (
    // <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/Ticket" element={<Ticket />} />
            <Route path="/Ticketnew" element={<FileTicket />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="/SMSForm" element={<SMSForm />} />
            <Route path="/ViewTicket" element={<ViewTicket />} />
            <Route path="/Navbar" element={<Navbar />} />
            <Route path="/Tickets" element={<Tickets />} />
            <Route path="/TicketsComponent" element={<TicketsComponent />} />
            <Route path="/GenerateReport" element={<GenerateReport />} />
            <Route path="AdminTickets" element={<AdminTickets />} />
            {/* <Route path="/Email" element={<ContactUs />} /> */}
          </Routes>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    // </AuthProvider>
  );
}

export default App;
