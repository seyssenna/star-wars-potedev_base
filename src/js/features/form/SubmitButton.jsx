import React from 'react'

export const SubmitButton = (props) => {

    const { name } = props;

    return (
        <button style={{marginTop:'20px'}}>{name}</button>
    )
}