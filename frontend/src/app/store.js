// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
// import { signInUser } from "./userThunks";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Add the signInUser thunk to the store
// store.dispatch(
//   signInUser({
//     /* provide your credentials here */
//   }),
// );

export default store;
