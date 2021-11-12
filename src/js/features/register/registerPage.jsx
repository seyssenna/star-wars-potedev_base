import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useRegisterMutation } from '../../app/services/authApi'

import { InputGroup } from '../form/InputGroup'
import { SubmitButton } from '../form/SubmitButton'

export const RegisterPage = () => {

    const navigate = useNavigate()

    //Body
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    //Api Logic
    const [register, { isLoading, isUpdating }] = useRegisterMutation()

    //Logic
    const [formError, setFormError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();

        setFormError(null)

        const body = {
            email,
            password,
            username,
            firstname,
            lastname,
        }

        try {
            const result = await register(body)

            if (result.error) {
                return setFormError(result.error.data.message)
            }

            navigate('/login')
        }
        catch (err) {
            console.log('Something went wrong', err);
        }
    }

    return (
        <div>
            <h1>Register</h1>
            <p style={{ color: "red" }}>{formError && formError}</p>
            {isLoading && <p>Loading...</p>}
            <form onSubmit={handleSubmit}>
                <InputGroup handleChange={setEmail} label="Email" type="email" required />
                <InputGroup handleChange={setPassword} label="Password" type="password" required={true} minLength="1" maxLength="15" />
                <InputGroup handleChange={setLastname} label="Lastname" type="text" required={true} />
                <InputGroup handleChange={setFirstname} label="firstname" type="text" required={true} />
                <InputGroup handleChange={setUsername} label="username" type="text" required={true} />
                <SubmitButton name="S'enregistrer" />
            </form>
        </div>
    )
}