import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import messageSlice from "./messageSlice";

const store = configureStore({
    reducer: {
        data: dataReducer,
        message: messageSlice
    }
})

export default store