import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";





export const cityApi = createApi({
    reducerPath: "cityApi",
    tagTypes: ["CITY"],
    baseQuery: fetchBaseQuery({ baseUrl: "https://iran-locations-api.ir/api/v1/en/" }),
    endpoints: (builder) => ({
        getCity: builder.query({
            query: (cityName) => `https://iran-locations-api.ir/api/v1/en/cities?state=${cityName}`,
            providesTags: ["CITY"]
        })
    })
});

export const { useGetCitysQuery, useGetCityQuery } = cityApi;

