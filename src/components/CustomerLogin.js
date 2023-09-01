import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {FacebookFilled,GoogleOutlined,TwitterOutlined} from '@ant-design/icons';


const CustomerLogin = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate =useNavigate();

    const authenticateEmployee=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/customer/authenticate",{
            email:email,
            password:password
        }).then(res=>{
            window.localStorage.setItem("jwt",res.data)
             navigate(`/home`)
        }).catch(error=>{
            console.log(error)
            alert('Wrong Username or Password ')
        })
    }
  return (
    <div className="App">
    <form className="Auth-form">
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign In</h3>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"
            value={email}
           onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <a type="submit" className="btn btn-primary" onClick={(e)=>authenticateEmployee(e)}>
            Login
          </a>
          <div className='d-grid slide'>
         <span>Don't have an account? <a href='/register'>SignUp</a> </span>
          </div>
          <div className='socialLogin'>
            <GoogleOutlined className="socialIcon" style={{color:"red"}}/>
            <FacebookFilled className="socialIcon"  style={{color:"blue"}}/>
            <TwitterOutlined className="socialIcon" style={{color:"cyan"}}/>
          </div>
          
        </div>
      </div>
    </form>
  </div>
  )
}

export default CustomerLogin