import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.pote.dev',
        prepareHeaders: (headers, { getState }) => {
            // By default, if we have a token in the store, let's use that for authenticated requests
            const accessToken = getState().auth.accessToken
            const xsrfToken = getState().auth.xsrfToken

            if (accessToken && xsrfToken) {
                headers.set('authorization', `Bearer ${accessToken}`)
                headers.set('x-xsrf-token', xsrfToken)
            }

            return headers
        },
    }),
    endpoints(builder) {
        return {
            fetchCurrentUser: builder.query({
                query() {
                    return `/auth/me`;
                },
                refetchOnFocus: true
            }),
            login: builder.mutation({
                query: (body) => ({
                    url: '/auth/login',
                    method: 'POST',
                    body
                })
            }),
            register: builder.mutation({
                query: (body) => ({
                    url: '/users/',
                    method: 'POST',
                    body
                })
            })
        }
    }
})

export const { useLoginMutation, useRegisterMutation, useFetchCurrentUserQuery } = authApi