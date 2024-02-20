import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersFetch from "../reducers/usersFetch";
import FetchDataPostsReducer from "../reducers/PostsReducer";
import meFetch from "../reducers/meFetch";

const globalReducer = combineReducers({
  usersFetch: usersFetch,
  posts: FetchDataPostsReducer,
  meFetch: meFetch,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
