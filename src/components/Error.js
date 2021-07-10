import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { putError } from '../redux/home/action'

export default function Error() {
    const error = useSelector(state => state.home.error)
    const dispatch = useDispatch()
    const clearMessage = (e)=>{
        e.preventDefault();
        dispatch(putError({error:''}))
    }
    return (
        error &&
        <div className='error'>
            <div><a href='#' onClick={clearMessage}>clear message</a></div>
            <p>{error}</p>
        </div>
    )
}
