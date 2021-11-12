import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useFetchCurrentUserQuery } from '../app/services/authApi';

import { setCredentials, setIsInitialized } from '../features/auth/authSlice';
import { getLocalStorageItem } from '../utils/localStorage';

//On check la persistance de l'utilisateur.rice
//En lançant notre logique au premier render de l'application
//avec un useEffect()
export const useIsAuth = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    //Au premier lancement de l'application
    useEffect(() => {
        const accessToken = getLocalStorageItem('accessToken')
        const xsrfToken = getLocalStorageItem('xsrfToken')

        //On rajoute à notre header de authApi les authorizations
        if (accessToken && xsrfToken) {
            dispatch(setCredentials({ accessToken, xsrfToken }))
        } else {
            dispatch(setIsInitialized())
        }
    }, [])

    //On effectue le call d'API sur auth/me
    //Pour récupérer les données utilisateur.rice
    //Le store est changé si le auth/me est fullfilled
    //Cette logique se trouve dans le authSlice pour changer le store
    const { error, refetch } = useFetchCurrentUserQuery()

    if (auth.isAuthenticated && !auth.user) {
        refetch();
    }

    // Si le auth/me est rejected
    if (error) {
        console.log('error in fetching user')
        dispatch(setIsInitialized())
    }
}
