import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { logout } from '../auth/authSlice';
import { removeLocalStorageItem } from '../../utils/localStorage';

export const HeaderBar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user)

    const handleLogout = () => {
        removeLocalStorageItem('xsrfToken')
        removeLocalStorageItem('accessToken')
        dispatch(logout())
        navigate('/login');
    }

    return <header style={{ display: "flex", justifyContent: "space-evenly" }}>
        <h2>Salut {user?.username}</h2>
        <button onClick={handleLogout}>logout</button>
    </header>
}