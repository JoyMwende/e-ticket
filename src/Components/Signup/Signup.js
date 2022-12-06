import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { signup } from '../../Redux/Actions/staffAction'
import signin from '../../Images/signin.jpg'
import './Signup.css'

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newStaffInfo = useSelector(state => state.staff.signup)
  const [newStaffData, setNewStaffData] = useState (
    {
      full_name: "",
      station_id: "",
      occupation: "",
      email: "",
      phone_number: "",
      pass: ""
    }
  )

  useEffect (() => {
    const {success, error} = newStaffInfo;
    if(success) {
      console.log("Sign Up Successful!");
    } else {
      console.log(`Signup failed: ${error}`);
    }
  }, [newStaffInfo])

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(signup(newStaffData));
    alert("Signup Successful!")
    let path = `/Login`;
    navigate(path);
  }
  
    return (
      <div className="signup">
        <div className="signup-left">
          <img src={signin} alt="signup-img" />
        </div>
        <div className="signup-right">
          <form className="sign-up" onSubmit={handleSignup}>
            <div className="signup-title">
              <h1>Sign Up</h1>
            </div>
            <div className="signup-form">
              <div className="signup-name">
                <label>Full Name</label>
                <input
                  id="input-1"
                  type="text"
                  name="full_name"
                  placeholder="Enter your full names"
                  value={newStaffData.full_name}
                  onChange={(e) => {
                    setNewStaffData({
                      ...newStaffData,
                      full_name: e.target.value,
                    });
                  }}
                  required
                />
              </div>
              <div className="signup-work">
                <label>StationId</label>
                <select
                  id="station"
                  name="station_id"
                  value={newStaffData.station_id}
                  onChange={(e) => {
                    setNewStaffData({
                      ...newStaffData,
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
              <div className="signup-occ">
                <label>Occupation</label>
                <select
                  name="occupation"
                  id="occupation"
                  value={newStaffData.occupation}
                  onChange={(e) => {
                    setNewStaffData({
                      ...newStaffData,
                      occupation: e.target.value,
                    });
                  }}
                  required
                >
                  <option value="select">Select</option>
                  <option value="nurse">Nurse</option>
                  <option value="lab_tech">Laboratory Technician</option>
                  <option value="biomedical_engineer">
                    Biomedical Engineer
                  </option>
                  <option value="receptionist">Receptionist</option>
                  <option value="manager">Hospital Manager</option>
                </select>
              </div>
              <div className="signup-email">
                <label>Email</label>
                <input
                  id="input-2"
                  type="email"
                  name="email"
                  placeholder="abc@gmail.com"
                  value={newStaffData.email}
                  onChange={(e) => {
                    setNewStaffData({ ...newStaffData, email: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="signup-num">
                <label>Phone Number</label>
                <input
                  id="input-3"
                  type="text"
                  name="phone_number"
                  placeholder="+2547xx xxx xxx"
                  value={newStaffData.phone_number}
                  onChange={(e) => {
                    setNewStaffData({
                      ...newStaffData,
                      phone_number: e.target.value,
                    });
                  }}
                  required
                />
              </div>
              <div className="signup-password">
                <label>Password</label>
                <input
                  id="input-4"
                  type="password"
                  name="pass"
                  placeholder="Enter your Password"
                  value={newStaffData.pass}
                  onChange={(e) => {
                    setNewStaffData({
                      ...newStaffData,
                      pass: e.target.value,
                    });
                  }}
                  required
                />
              </div>
              <div className="signup-button">
                <button>Sign Up</button>
              </div>
              <div className="signup-text">
                <div className="signup-text1">
                  <p>Already have an account?</p>
                </div>
                <div className="signup-text2">
                  <Link to="/Login" id="log-in">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Signup;