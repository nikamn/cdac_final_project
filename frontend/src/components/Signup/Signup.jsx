import React, { useState } from "react";

export const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [num, setNum] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <h2 className="m-auto text-center mb-5">Sign Up</h2>
      <form
        className="register-form w-50 m-auto border p-4 rounded-3"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">First name</label>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="first Name"
          className="mb-3"
          autoFocus
        />
        <label htmlFor="name">Last name</label>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="Last Name"
          className="mb-3"
        />
        <label htmlFor="email">Username</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
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
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          className="mb-3"
        />

        <label htmlFor="number">Phone number</label>
        <input
          value={num}
          onChange={(e) => setNum(e.target.value)}
          type="number"
          placeholder="********"
          id="number"
          name="number"
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
