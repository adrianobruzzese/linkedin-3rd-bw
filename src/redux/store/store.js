import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersFetch from "../reducers/usersFetch";
import FetchDataPostsReducer from "../reducers/PostsReducer";
import meFetch from "../reducers/meFetch";
import experiencesFetch from "../reducers/experiencesFetch";
import profileImageReducer from "../reducers/profileImageReducer";
import postImageReducer from "../reducers/postImageReducer";
import jobsFetch from "../reducers/jobsFetch";
import activeUser from "../reducers/activeUser";

const globalReducer = combineReducers({
  usersFetch: usersFetch,
  posts: FetchDataPostsReducer,
  meFetch: meFetch,
  experiencesFetch: experiencesFetch,
  image: profileImageReducer,
  imagePost: postImageReducer,
  jobsFetch: jobsFetch,
  activeUser: activeUser,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
