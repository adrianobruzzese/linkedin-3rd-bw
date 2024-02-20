import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersFetch from "../reducers/usersFetch";
import FetchDataPostsReducer from "../reducers/PostsReducer";
import meFetch from "../reducers/meFetch";
import experiencesFetch from "../reducers/experiencesFetch";

const globalReducer = combineReducers({
  usersFetch: usersFetch,
  posts: FetchDataPostsReducer,
  meFetch: meFetch,
  experiencesFetch: experiencesFetch,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
