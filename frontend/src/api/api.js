
// axios.js
import axios from "axios";


// Create an Axios instance

export default axios.create({
  baseURL: "http://localhost:8085/api/",
  headers: {
    "Content-Type": "application/json",
  },
});
