// AuthService.js
import axios from "axios";

const AuthService = {
  login(username, password) {
    return axios
      .post("/signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  },

  logout() {
    localStorage.removeItem("user");
  },

  isLoggedIn() {
    return localStorage.getItem("user") !== null;
  },

  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  },
};

export default AuthService;
