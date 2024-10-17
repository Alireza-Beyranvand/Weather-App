
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const weatherApi = createApi({
    reducerPath: "weatherApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://api.weatherapi.com/v1/" }),
    tagTypes: ["WEATHER"],
    endpoints: (builder) => ({
        getWeatherInfo: builder.query({
            query: (cityName) => `/forecast.json?key=${process.env.NEXT_PUBLIC_KEY_APP}&q=${cityName}&lang=en&days=7`,
            providesTags: (result, error, arg) => [{ type: "WEATHER", id: arg }]
        })
    })
});


export const { useGetWeatherInfoQuery } = weatherApi;