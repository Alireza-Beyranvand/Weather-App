
import { configureStore } from "@reduxjs/toolkit";

import weatherReducer from "../slice/weatherSlice";

export const Store = configureStore({
    reducer: {
        weatherReducer,
    }
});