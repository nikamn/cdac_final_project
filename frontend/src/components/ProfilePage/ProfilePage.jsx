import { useState } from "react";

import axios from "../../api/axios";
import AuthService from "../../services/AuthService";

import "./ProfilePage.css";

function ProfilePage() {
  const user = AuthService.getUser();
  const [userData, setUserData] = useState(user);

  const [formData, setFormData] = useState({ ...userData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({ ...formData });
    console.log(formData);

    const { token } = JSON.parse(sessionStorage.getItem("userData"));
    console.log(token);

    // const config = {
    //   headers: { Authorization: `Bearer ${token}` },
    // };

    // axios.defaults.headers.common = {
    //   Authorization: `Bearer ${{ token }}`,
    // };

    // const response = axios.put(`/users/${formData.id}`, formData);

    console.log(`Bearer ${token}`);

    // axios
    //   .put({
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //     method: "PUT",
    //     url: `http://localhost:8085/api/users/${formData.id}`,
    //     data: formData,
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //   });

    axios.put(`/users/${formData.id}`, formData, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    //console.log("After update: ", response);
  };

  return (
    <div className="profile-page">
      <h2 className="mb-5 text-center">User Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName" className="fs-5">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="fs-5">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username" className="fs-5">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="fs-5">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNo" className="fs-5">
            Mobile Number:
          </label>
          <input
            type="text"
            id="mobileNo"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default ProfilePage;
