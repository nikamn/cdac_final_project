import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(pass);
  };

  return (
    <div className="auth-form-container">
      <h2 className="m-auto text-center mb-5">Sign In</h2>
      <form
        className="login-form w-50 m-auto border p-4 rounded-3"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          className="mb-3"
          autoFocus
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          className="mb-3"
        />
        <button type="submit" className="btn btn-outline-primary">
          Sign In
        </button>
        <button
          //className="link-btn"
          onClick={() => props.onFormSwitch("signup")}
        >
          Don't have an account? Register here.
        </button>
      </form>
    </div>
  );
};

export default Signin;
