import React from 'react'
import { getUsers } from '../actions/Action'
import { useDispatch } from 'react-redux'

const GetUser = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(getUsers())}>GET USER</button>
        </div>
    )
}

export default GetUser
