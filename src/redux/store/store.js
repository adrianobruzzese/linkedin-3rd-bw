import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersFetch from "../reducers/usersFetch";

const globalReducer = combineReducers({
  usersFetch: usersFetch,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
