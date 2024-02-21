import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersFetch from "../reducers/usersFetch";
import FetchDataPostsReducer from "../reducers/PostsReducer";
import meFetch from "../reducers/meFetch";
import experiencesFetch from "../reducers/experiencesFetch";
import jobsFetch from "../reducers/jobsFetch";

const globalReducer = combineReducers({
  usersFetch: usersFetch,
  posts: FetchDataPostsReducer,
  meFetch: meFetch,
  experiencesFetch: experiencesFetch,
  jobsFetch: jobsFetch,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
