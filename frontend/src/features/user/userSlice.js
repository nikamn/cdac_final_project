// userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
const BASE_URL = "http://localhost:8085/api";

// userThunks.js
export const signInUser = createAsyncThunk("signin", async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/signin`, credentials);
    // console.log("in response" + response.data);
    return response.data;
  } catch (error) {
    // console.log(error);

    throw new Error(error.response.data);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: null,
    status: "idle",
    token: null,
    error: null,
  },
  reducers: {
    // to save user after login
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
      state.status = "success";
      state.token = action.payload?.token || null;
      state.errorMessage = "";
    },
    // to clear details after logout
    clearUserDetails: (state) => {
      state.userDetails = null;
      state.status = "idle";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(signInUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload.token;
        state.userDetails = action.payload.user;
      })
      .addCase(signInUser.rejected, (state, action) => {
        // console.error("Sign in failed:", action.error.message);
        // Handle error or set state accordingly
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setUserDetails } = userSlice.actions;

export const selectUserDetails = (state) => state.user.userDetails;
export const getUserLoginStatus = (state) => state.user.status;
export const getUserToken = (state) => state.user.token;

export default userSlice.reducer;
