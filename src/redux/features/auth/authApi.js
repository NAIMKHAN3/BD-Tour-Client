import { apiSlice } from "../RootApi/apiSlice";

const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        userRegister: builder.mutation({
            query: (data) => ({
                url: "/auth/register",
                method: 'POST',
                body: data
            }),
        }),
        userLogin: builder.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: 'POST',
                body: data
            }),
        }),
    })
})

export const {useUserRegisterMutation, useUserLoginMutation} = authApi;