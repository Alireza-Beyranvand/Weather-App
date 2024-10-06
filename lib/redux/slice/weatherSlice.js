
import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    city: "tehran",
};


const weatherSlice = createSlice({
    name: "weatherApp",
    initialState,
    reducers: {
        setCity(state, action) {
            const cityName = action.payload;
            if (cityName) {
                state.city = cityName
            }
        }
    }
});


export const { setCity } = weatherSlice.actions;


// selectors
export const getCity = (state) => state.weatherReducer.city




export default weatherSlice.reducer;