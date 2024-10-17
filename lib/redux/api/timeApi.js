
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const timeApi = createApi({
    reducerPath: "timeApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.keybit.ir/time/?timezone=Asia/" }),
    tagTypes: ["TIME"],
    endpoints: builder => ({
        getTime: builder.query({
            query: () => "/tehran",
            providesTags: ["TIME"]
        })
    })
});


export const {
    useGetTimeQuery
} = timeApi;