import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getInfoToLocal } from '../../../helper/getInfoToLocal';

const customBaseQuery = fetchBaseQuery({
  baseUrl: "https://bd-tour-backend.vercel.app/api/v1",
  prepareHeaders(headers) {
    headers.set('Authorization', `Bearer ${getInfoToLocal('token')}`);
    return headers;
  },
});
export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: customBaseQuery,
  endpoints: () => ({})
})

