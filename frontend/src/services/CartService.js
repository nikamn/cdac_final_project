import axios from "../api/axios";

const getToken = () => {
  return JSON.parse(sessionStorage.getItem("userData")).token;
};

const getCartItems = async () => {
  return axios
    .get("/", {
      headers: { Authorization: "Bearer " + getToken() },
    })
    .then((response) => {
      console.log(
        "Respose from getCartItems --->" + JSON.stringify(response.data)
      );
      return response;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
