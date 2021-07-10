import React from 'react'

export default function Button({className, clickHandler, buttonText}) {
    return (
        <button type="button" className={className} onClick={clickHandler}>{buttonText}</button>
    )
}
