import React, { useContext, useEffect } from 'react'

import { Context } from '../state'
import { setErrorMessage } from '../state'


const Error = ( ) => {

    const [{ errorMessage } , dispatch] = useContext(Context);

    useEffect(() => {
        setTimeout(() => {
            dispatch(setErrorMessage(''))
        }, 3000)
     
    }, [errorMessage])
    
    return (
        <div className = "bg-red-200 flex justify-center items-center p-px text-l h-10">
            <h1>{errorMessage}</h1>
        </div>
    )
}

export default Error
