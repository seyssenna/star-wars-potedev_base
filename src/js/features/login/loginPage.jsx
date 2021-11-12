import React, { useState } from 'react'
import { useLoginMutation } from '../../app/services/authApi'
import { useLocation, useNavigate } from 'react-router-dom'

import { InputGroup } from '../form/InputGroup'
import { SubmitButton } from '../form/SubmitButton'

export const LoginPage = () => {

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    //body
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //Logic
    const [formError, setFormError] = useState(null)

    //Api Logic
    const [login, { isLoading, isUpdating }] = useLoginMutation()

    const handleSubmit = async (e) => {
        e.preventDefault();

        setFormError(null)

        const body = {
            email,
            password,
        }

        try {
            const result = await login(body)

            if (result.error) {
                return setFormError(result.error.data.message)
            }

            navigate(from, { redirect: true })
        }
        catch (err) {
            console.log('Something went wrong', err);
        }
    }

    return <div>
        <h1>Login</h1>
        <p style={{ color: "red" }}>{formError && formError}</p>
        {isLoading && <p>Loading...</p>}
        <form onSubmit={handleSubmit}>
            <InputGroup handleChange={setEmail} label="Email" type="email" required />
            <InputGroup handleChange={setPassword} label="Password" type="password" required={true} minLength="1" maxLength="15" />
            <SubmitButton name="Se connecter" />
        </form>
    </div>
}