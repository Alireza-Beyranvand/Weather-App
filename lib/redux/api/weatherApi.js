
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";




const baseQueryWithErrorHandling = async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({ baseUrl: "http://api.weatherapi.com/v1/" })(args, api, extraOptions);
    if (result.error) {
        throw new Error(result.error.status === 404 ? 'Not Found' : 'Network Error');
    }
    return result;
};

export const weatherApi = createApi({
    reducerPath: "weatherApi",
    baseQuery: baseQueryWithErrorHandling,
    tagTypes: ["WEATHER"],
    endpoints: (builder) => ({
        getWeatherInfo: builder.query({
            query: (cityName) => `/forecast.json?key=${process.env.NEXT_PUBLIC_KEY_APP}&q=${cityName}&lang=en&days=7`,
            providesTags: (result, error, arg) => [{ type: "WEATHER", id: arg }]
        })
    })
});


export const { useGetWeatherInfoQuery } = weatherApi;