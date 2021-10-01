import React,{useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'
import './Nav.css'
import {useSelector,useDispatch} from 'react-redux'
import { logoutUser } from './actions/Action'

function Nav()
{
  const history = useHistory();
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.BankReducer.loggedIn);
  // useEffect(() => {  
  //    async function logoutUser(){
  //      //history.push("/");
  //     await dispatch(logoutUser(false));
  //   }
   
  // }, [])

  
    return(
        <div>
      { loginStatus ?
       <ul>      
       <li><Link to="/applyloan">Apply Loan</Link></li>
       <li><Link to="/updateprofile">Update Profile</Link></li>
       


     </ul>
      
      :
      <ul>
        <li><Link to="/">Login</Link></li>
       <li><Link to="/registration">Registration</Link></li>
       <li></li>
       

     </ul>
      

      }      
            
       
      </div>
    )
}
export default Nav