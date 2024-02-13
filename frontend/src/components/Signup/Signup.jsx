import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import axios from "../../api/axios";

export const Signup = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("/signup", {
      firstName,
      lastName,
      username,
      email,
      password,
      mobileNo,
    });

    console.log(response);

    navigate("/signin");
  };

  return (
    <div className="auth-form-container">
      <h2 className="m-auto text-center mb-5">Sign Up</h2>
      <form
        className="register-form w-50 m-auto border p-4 rounded-3"
        onSubmit={handleSubmit}
      >
        <label htmlFor="firstName">First Name</label>
        <input
          value={firstName}
          name="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          id="firstName"
          placeholder="First Name"
          className="mb-3"
          autoFocus
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          value={lastName}
          name="lastName"
          onChange={(e) => setLastName(e.target.value)}
          id="lastName"
          placeholder="Last Name"
          className="mb-3"
        />

        <label htmlFor="username">Username</label>
        <input
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          type="username"
          placeholder="username"
          id="username"
          name="username"
          className="mb-3"
        />

        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          className="mb-3"
        />

        <label htmlFor="password">password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          className="mb-3"
        />

        <label htmlFor="mobileNo">Mobile Number</label>
        <input
          value={mobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
          type="mobileNo"
          placeholder="********"
          id="mobileNo"
          name="mobileNo"
          //pattern="/^[0-9]{10}$/"
          className="mb-3"
        />
        <button type="submit" className="btn btn-outline-primary">
          Sign Up
        </button>
        <button
          // className="link-btn"
          onClick={() => props.onFormSwitch("signin")}
        >
          Already have an account? Login here.
        </button>
      </form>
    </div>
  );
};
export default Signup;
