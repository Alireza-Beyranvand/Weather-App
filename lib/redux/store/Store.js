import { configureStore } from '@reduxjs/toolkit';
import { timeApi } from '../api/timeApi';
import { weatherApi } from '../api/weatherApi';
import weatherReducer, { fetchCities, getOnline } from "../slice/weatherSlice";
import { cityApi } from '../api/cityApi';

export const Store = configureStore({
    reducer: {
        weatherReducer: weatherReducer,
        [timeApi.reducerPath]: timeApi.reducer,
        [weatherApi.reducerPath]: weatherApi.reducer,
        [cityApi.reducerPath]: cityApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(timeApi.middleware)
            .concat(weatherApi.middleware)
            .concat(cityApi.middleware)
});

Store.dispatch(fetchCities())