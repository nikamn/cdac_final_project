import httpClient from "../api/api";

import AuthService from "./AuthService";

const getToken = () => {
  return JSON.parse(sessionStorage.getItem("userData")).token;
};

const getAddress = () => {
  const user = AuthService.getUser();
  const token = getToken();

  return httpClient.get(`users/${user.id}/address`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

const addAddress = (data) => {
  const user = AuthService.getUser();
  const token = getToken();
  return httpClient.post(`users/${user.id}/address`, data, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

// const get = (id) => {
//   return httpClient.get(`${id}`);
// };

const updateAddress = (data) => {
  const token = getToken();
  const user = AuthService.getUser();
  return httpClient.put(`users/${user.id}/address`, data, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

const remove = () => {
  const token = getToken();
  const user = AuthService.getUser();
  return httpClient.delete(`users/${user.id}/address`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
export default { getAddress, addAddress, updateAddress, remove };
