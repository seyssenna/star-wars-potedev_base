import React from 'react'

export const InputGroup = (props) => {
    const { handleChange, isValid, label, type, required, minLength, maxLength } = props;

    return (
        <div>
            <label>{label}</label>
            <input
                onChange={(e) => handleChange(e.target.value)}
                type={type}
                required={required}
                minLength={minLength}
                maxLength={maxLength}
            />
        </div>
    )
}