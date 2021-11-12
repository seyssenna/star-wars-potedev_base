import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

//Services
import { peopleApi } from './services/peopleApi'
import { authApi } from './services/authApi'
import { starshipsApi} from './services/starshipsApi'
import { planetsApi } from './services/planetsApi'

//Features
import counterReducer from '../features/counter/counterSlice'
import auth from '../features/auth/authSlice'

export const store = configureStore({
    reducer: {
        [peopleApi.reducerPath]: peopleApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [starshipsApi.reducerPath]: starshipsApi.reducer,
        [planetsApi.reducerPath]: planetsApi.reducer,
        counter: counterReducer,
        auth,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(peopleApi.middleware, authApi.middleware, logger, starshipsApi.middleware, planetsApi.middleware)
})