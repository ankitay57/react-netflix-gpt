import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import moviesReducer from "./movieSlice"
import gptPageReducer from "./gptSlice";
import langReducer from "./languageSlice";

const appStore = configureStore({
    reducer : {
        user: userReducer,
        movies: moviesReducer,
        gptPage: gptPageReducer,
        lang: langReducer
    },
});
export default appStore;