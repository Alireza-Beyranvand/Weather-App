
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



const baseQueryWithErrorHandling = async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({ baseUrl: "https://api.keybit.ir/time/?timezone=Asia/" })(args, api, extraOptions);
    if (result.error) {
        throw new Error(result.error.status === 404 ? 'Not Found' : 'Network Error');
    }
    return result;
};


export const timeApi = createApi({
    reducerPath: "timeApi",
    baseQuery: baseQueryWithErrorHandling,
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