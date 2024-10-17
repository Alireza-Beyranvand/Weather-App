import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




export const fetchTime = createAsyncThunk('weatherApp/fetchTimeCity', async (CityName, { rejectWithValue }) => {
    try {
        const response = await fetch("/api/getTimeCity", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: CityName })
        });
        if (!response.ok) {
            console.log("not online");
            return rejectWithValue("Failed to fetch time");
        }
        const result = await response.json();
        return result;
    } catch (err) {
        console.log(err.message);
        return rejectWithValue(err.message);
    }
});




const initialState = {
    city: "tehran",
    time: "",
    weatherStatus: {
        tempIconAndWind: {
            icon: "",
            temp: ""
        },
        ChartAndReng: {
            dataChart: "",
            dataReng: {}
        },
        prediction: {
            dataPredication: {}
        }
    },
    error: null,
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
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTime.fulfilled, (state, action) => {
                const clock = action.payload.time24.full.en;
                const date = action.payload.date.full.official.iso.en;
                state.time = `${clock} | ${date}`;
                state.error = null;
            })
            .addCase(fetchTime.rejected, (state, action) => {
                state.error = action.payload;
            });
    }
});

export const { setCity, setTimeCity } = weatherSlice.actions;


// selectors  
export const getCity = (state) => state.weatherReducer.city;
export const getTimeCity = (state) => state.weatherReducer.time;
export const getTemp = (state) => state.weatherReducer.weatherStatus.tempIconAndWind.temp;
export const getIcon = (state) => state.weatherReducer.weatherStatus.tempIconAndWind.icon;
export const getDataChart = (state) => state.weatherReducer.weatherStatus.ChartAndReng.dataChart;
export const getDataReng = (state) => state.weatherReducer.weatherStatus.ChartAndReng.dataReng;
export const getPrediction = (state) => state.weatherReducer.weatherStatus.prediction.dataPredication;
export const getError = (state) => state.weatherReducer.error;


export default weatherSlice.reducer;