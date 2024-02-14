import axios from "../api/axios";

const login = async ({ email, password }) => {
  console.log(email, password);
  return axios
    .post("/users/signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        sessionStorage.setItem("userData", JSON.stringify(response.data));
      }
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

const logout = () => {
  sessionStorage.removeItem("userData");
};

const isLoggedIn = () => {
  return sessionStorage.getItem("userData") !== null;
};

const getUser = () => {
  return JSON.parse(sessionStorage.getItem("userData"));
};

const AuthService = { login, logout, isLoggedIn, getUser };

export default AuthService;
