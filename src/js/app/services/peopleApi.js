import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const peopleApi = createApi({
    reducerPath: 'peopleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://swapi.dev/api/'
    }),
    endpoints(builder) {
        return {
            fetchPeople: builder.query({
                query(params) {
                    const { page, search } = params;
                    return `/people?search=${search}&page=${page}`
                }
            })
        }
    }
})

export const { useFetchPeopleQuery } = peopleApi