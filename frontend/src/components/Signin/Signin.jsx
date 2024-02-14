import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "../../api/axios";

import "./Signin.css";

export const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    const response = await axios.post("/users/signin", formData);
    console.log(response);

    navigate("/");
  };

  return (
    <div className="signin-form">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign In</button>
        <a href="#" className="small-link">
          Forgot Password?
        </a>
      </form>
    </div>
  );

  // return (
  //   <div className="auth-form-container">
  //     <h2 className="m-auto text-center mb-5">Sign In</h2>
  //     <form
  //       className="login-form w-50 m-auto border p-4 rounded-3"
  //       onSubmit={handleSubmit}
  //     >
  //       <label htmlFor="email">Email</label>
  //       <input
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //         type="email"
  //         placeholder="youremail@gmail.com"
  //         id="email"
  //         name="email"
  //         className="mb-3"
  //         autoFocus
  //       />
  //       <label htmlFor="password">Password</label>
  //       <input
  //         value={pass}
  //         onChange={(e) => setPass(e.target.value)}
  //         type="password"
  //         placeholder="********"
  //         id="password"
  //         name="password"
  //         className="mb-3"
  //       />
  //       <button type="submit" className="btn btn-outline-primary">
  //         Sign In
  //       </button>
  //       <button
  //         //className="link-btn"
  //         onClick={() => props.onFormSwitch("signup")}
  //       >
  //         Don't have an account? Register here.
  //       </button>
  //     </form>
  //   </div>
  // );
};

export default Signin;
