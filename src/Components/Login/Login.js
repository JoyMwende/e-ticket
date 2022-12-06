import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { login } from '../../Redux/Actions/staffAction'
import { Link } from 'react-router-dom';
import loginImage from '../../Images/login.jpg'
import "./Login.css"

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const staffInfo = useSelector(state => state.staff.login)
  const [staffData, setStaffData] = useState (
    {
      email: "",
      phone_number: ""
    }
  )

  useEffect (() => {
    const {staff, success, error} = staffInfo
    if (success){
      console.log(staff);
    } else {
      console.log(`Login failed: ${error}`);
    }
  }, [staffInfo])

  const handleLogin =(e) => {
    e.preventDefault()
    dispatch(login(staffData))
    alert("Login Successful!")
    let path = `/Dashboard`;
    navigate(path);

    // const {success, error} = staffInfo
    // if(success){
    //   dispatch(login(staffData));
    //   alert("Login Successful!");
    //   let path = `/Home`;
    //   navigate(path);
    // } else {
    //   alert("Login Failed!")
    //   console.log(error)
    // }
  }
    return (
      <div className="login">
        <div className="login-left">
          <img src={loginImage} alt="login-img" />
        </div>
        <div className="login-right">
          <form className="form" onSubmit={handleLogin}>
            <div className="title">
              <h1>Login</h1>
            </div>
            <div className="login-form">
              <div className="name">
                <label>Email</label>
                <input
                  id="name-input"
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  value={staffData.Email}
                  onChange={(e) => {
                    setStaffData({
                      ...staffData,
                      email: e.target.value,
                    });
                  }}
                  required
                />
              </div>
              <div className="passwd">
                <label>Phone Number</label>
                <input
                  id="passwd-input"
                  type="text"
                  name="phone_number"
                  placeholder="phone_number"
                  value={staffData.phone_number}
                  onChange={(e) => {
                    setStaffData({
                      ...staffData,
                      phone_number: e.target.value,
                    });
                  }} required
                />
              </div>
            </div>
            <div className="login-button">
              <button>Log In</button>
            </div>
            <div className="login-text">
              <div className="login-text1">
                <Link to="/Forgotphone_number" id="forgot">
                  Forgot phone_number?
                </Link>
              </div>
              <div className="login-text2">
                <div className="login-par">
                  <p>Don't have an account?</p>
                </div>
                <div className="login-link">
                  <Link to="/Signup" id="account">
                    Create an account
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Login;