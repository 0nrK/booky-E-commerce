import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const itemApi = createApi({
    reducerPath: "itemApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
    endpoints: (builder) => ({
        getAllItems: builder.query({
            query: () => "books"
        }),
    })

})


export const { useGetAllItemsQuery } = itemApi;