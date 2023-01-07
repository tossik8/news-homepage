import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";

const store = configureStore({
    reducer:{
        menuReducer: menuSlice.reducer
    }
})
export default store;
