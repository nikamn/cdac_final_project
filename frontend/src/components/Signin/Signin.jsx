import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//import axios from "../../api/axios";
import AuthService from "../../services/AuthService";

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

    //const response = await axios.post("/users/signin", formData);
    const response = await AuthService.login(formData);
    console.log(response.data);

    if (response.data.user.role === "ROLE_ADMIN") {
      navigate("/admin");
    } else {
      navigate("/");
    }
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
      </form>

      <div className="para-container">
        <p>
          <Link href="#">Forgot password?</Link>
        </p>
        <p className="right">
          Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
