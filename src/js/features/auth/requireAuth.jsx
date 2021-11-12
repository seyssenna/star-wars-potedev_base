import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, Navigate } from 'react-router-dom'
import { Layout } from '../layout/Layout'

//Ce composant va vérifier si l'utilisateur est connecté
//Il prend également en paramètre des childrens

//Il vérifie dans le store, le slice auth
//Plus précisément la clef auth.isAuthenticated -> Boolean

// True -> La personnes est authentifié
// False -> La personnes n'est pas authentifié
export const RequireAuth = ({ children }) => {

    // On récupère la valeur du slice auth
    const auth = useSelector(state => state.auth)

    //On récupère la location -> où on se trouve
    let location = useLocation();

    //Si on est pas connecté, on redirige l'utilisateur.rice vers la page login
    //En sauvegardant la page qu'il.elle demandait
    if (!auth.isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    //Si la personnes est connecté, alors on affiche ses enfants -> On affiche la route demandée
    return <Layout children={children}></Layout>;
}