import { apiSlice } from "../RootApi/apiSlice";

const destinationApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDestinations: builder.query({
            query: (data) => ({
                url: "/destination/get-destinations"
            }),
        }),
    })
})

export const {useGetDestinationsQuery} = destinationApi;