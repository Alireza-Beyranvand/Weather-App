import { configureStore } from '@reduxjs/toolkit';
import { timeApi } from '../api/timeApi';
import { weatherApi } from '../api/weatherApi';
import weatherReducer from "../slice/weatherSlice";

export const Store = configureStore({
    reducer: {
        weatherReducer: weatherReducer,
        [timeApi.reducerPath]: timeApi.reducer,
        [weatherApi.reducerPath]: weatherApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(timeApi.middleware)
            .concat(weatherApi.middleware)
}); 