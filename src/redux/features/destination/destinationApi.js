import { apiSlice } from "../RootApi/apiSlice";

const destinationApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDestinations: builder.query({
            query: (data) => ({
                url: "/destination/get-destinations"
            }),
        }),
        getTouristSpot: builder.query({
            query: (id) => ({
                url: `/tourist-spot/get-tourist-spots/${id}`
            }),
        }),
    })
})

export const {useGetDestinationsQuery, useGetTouristSpotQuery} = destinationApi;