import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const planetsApi = createApi({
    reducerPath: 'planetsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://swapi.dev/api/'
    }),
    endpoints(builder) {
        return {
            fetchPlanets: builder.query({
                query(params) {
                    const { page, search } = params;
                    return `/planets?search=${search}&page=${page}`
                }
            })
        }
    }
})

export const { useFetchPlanetsQuery } = planetsApi