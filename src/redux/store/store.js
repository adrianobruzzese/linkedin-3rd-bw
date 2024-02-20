import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersFetch from "../reducers/usersFetch";
import FetchDataPostsReducer from "../reducers/PostsReducer";

const globalReducer = combineReducers({
  usersFetch: usersFetch,
  posts:FetchDataPostsReducer,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
