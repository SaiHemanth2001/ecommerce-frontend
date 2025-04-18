import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack';
const RegisterCustomer = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [location, setLocation] = useState('')
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const saveCustomer = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/customer/saveCustomer`, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            location: location,
        }).then(res => {
            console.log(res.data)
            enqueueSnackbar('Registered Successfully!', { variant: 'success' });
            navigate("/");
        }).catch(error => {
            enqueueSnackbar('Error', { variant: 'error' })
            console.log(error)
        })
    }
    return (
        <div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2 className="text-center">Register Customer</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter the First Name"
                                        name="firstName"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter the Last Name"
                                        name="lastName"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mt-3">
                                    <label>Email address</label>
                                    <input
                                        type="email"
                                        className="form-control mt-1"
                                        placeholder="Enter the Email Id"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        placeholder="Enter the password"
                                        name="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Location</label>
                                    <input
                                        type="text"
                                        placeholder="Enter the Location"
                                        name="location"
                                        className="form-control"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <button className="btn btn-primary" onClick={(e) => saveCustomer(e)}>Submit</button>
                                {" "}
                                <Link to="/" className="btn btn-danger">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterCustomer