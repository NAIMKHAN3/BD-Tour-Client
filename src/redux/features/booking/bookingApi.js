import { apiSlice } from "../RootApi/apiSlice";

const bookingApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createBooking: builder.mutation({
            query: (data) => ({
                url: "/booking/create-booking",
                method: "POST",
                body: data,
            }),
        }),
        getBookings: builder.query({
            query: (data) => ({
                url: "/booking/get-bookings"
            }),
        }),
    })
})

export const {useCreateBookingMutation, useGetBookingsQuery} = bookingApi;