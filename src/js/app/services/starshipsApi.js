import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const starshipsApi = createApi({
    reducerPath: 'starshipsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://swapi.dev/api/'
    }),
    endpoints(builder) {
        return {
            fetchStarships: builder.query({
                query(params) {
                    const { page, search } = params;
                    return `/starships?search=${search}&page=${page}`
                }
            })
        }
    }
})

export const { useFetchStarshipsQuery } = starshipsApi