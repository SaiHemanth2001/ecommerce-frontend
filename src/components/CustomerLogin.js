import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FacebookFilled, GoogleOutlined, TwitterOutlined } from '@ant-design/icons';
import './Loginpage.css';
import { useSnackbar } from 'notistack';
import { AuthContext } from "./AuthContext";

const CustomerLogin = () => {
  const { setUserEmail } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const handleTogglePassword = () => {
    setShowPassword(prevState => !prevState);
  };
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const authenticateEmployee = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/customer/authenticate", {
      email: email.toLowerCase(),
      password: password
    }).then(res => {
      window.localStorage.setItem("jwt", res.data)
      setUserEmail(email.toLowerCase());
      navigate(`/`);
      enqueueSnackbar('Logged In Successfully!', { variant: 'success' });
    }).catch(error => {
      enqueueSnackbar('Error : Recheck Username and password', { variant: 'error' })
      console.log(error)
    })
  }
  return (
    <div className="loginpage">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <span className='password-flex'>
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={handleTogglePassword}
                className="toggle-password-btn"
              >
                {showPassword ? <FaRegEyeSlash size={24} /> : <FaRegEye size={24} />}
              </button>
            </span>

          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={(e) => authenticateEmployee(e)}>
              Login
            </button>
            <div className='d-grid slide'>
              <span>Don't have an account? <a href='/register'>SignUp</a> </span>
            </div>
            <div className='socialLogin'>
              <a href='https://www.google.com/' target='_blank' rel="noreferrer"><GoogleOutlined className="socialIcon" style={{ color: "red" }} /></a>
              <a href='http://tinyurl.com/4cr5yuaz' target='_blank' rel="noreferrer"><FacebookFilled className="socialIcon" style={{ color: "blue" }} /></a>
              <a href='https://twitter.com/i/flow/login' target='_blank' rel="noreferrer"><TwitterOutlined className="socialIcon" style={{ color: "cyan" }} /></a>
            </div>

          </div>
        </div>
      </form>
    </div>
  )
}

export default CustomerLogin