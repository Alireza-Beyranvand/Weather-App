import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";




export const fetchCities = createAsyncThunk("fetchCities", async () => {
    try {
        const response = await fetch("https://iran-locations-api.ir/api/v1/en/states", {
            method: "GET",
            headers: { "Content_Type": "application/json" },
        })
        if (!response) {
            toast.error("no online")
        }
        const result = await response.json();
        return result
    } catch (err) {
        console.log(err.message)
    }
})


const initialState = {
    city: "tehran",
    cities: {},
    searchCity: "",
    time: "",
    error: null,
    online: false
};

const weatherSlice = createSlice({
    name: "weatherApp",
    initialState,
    reducers: {
        setCity(state, action) {
            const cityName = action.payload;
            if (cityName) {
                state.city = cityName;
            }
        },
        searchCity: (state, action) => {
            const { payload } = action;
            if (payload) {
                state.searchCity = payload
            } else if (!payload > 0) {
                state.searchCity = "";
            }
        },
        getOnline(state, action) {
            if (navigator.online) {
                toast.error("You are not online!");
                state.online = false;
            } else {
                state.online = true;
            }
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCities.fulfilled, (state, action) => {
                state.cities = action.payload
            })
    }
});

export const { setCity, searchCity, getOnline } = weatherSlice.actions;


// selectors  
export const getCity = (state) => state.weatherReducer.city;
export const getCities = (state) => state.weatherReducer.cities;
export const getSearchCity = (state) => state.weatherReducer.searchCity;
export const getError = (state) => state.weatherReducer.error;
export const selectOnline = (state) => state.weatherReducer.online;

export default weatherSlice.reducer;



