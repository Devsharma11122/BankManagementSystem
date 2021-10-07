import React from 'react'
import { useDispatch } from 'react-redux';
import { logoutUser } from '../actions/Action';
import { useHistory } from "react-router-dom";


const Logout = () => {
 const dispatch = useDispatch()
 const history = useHistory();
 const handleUser = () =>{
   //setLoginStatus(true);
  
   dispatch(logoutUser());
   history.push("/");
 }
    return (
        <div>
            <button onClick={handleUser}>Logout</button>
        </div>
    )
}

export default Logout
