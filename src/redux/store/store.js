import { combineReducers, configureStore } from "@reduxjs/toolkit";
import FetchDataPostsReducer from "../reducers/PostsReducer";

const globalReducer = combineReducers({
 posts: FetchDataPostsReducer,
});

const store = configureStore({
 reducer: globalReducer,
});

export default store;
