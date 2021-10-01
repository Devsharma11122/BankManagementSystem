import React,{useState} from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import { userLogin } from '../actions/Action';

 

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
  
    const handleRoute = () =>{ 
    history.push("/registration");
    }
    function handleLogin(e) {
      e.preventDefault();
      dispatch(userLogin({"userName":userName,"password":password}));
      history.push("/applyloan");
    }
    return (
    <div className="wrapper-fadeInDown">
    <div className="formContent">
   
    <h2 className="active"> Sign In </h2>   
    <form onSubmit={handleLogin}>
      <input type="text" id="login" className="fadeIn-second inp" name="login" placeholder="login" onChange={(e)=> setUserName(e.target.value)}/>
      <input type="password" id="password" className="fadeIn-third inp" name="login" placeholder="password" onChange={(e)=> setPassword(e.target.value)}/>
      <input type="submit" className="fadeIn-fourth" value="Log In"/>
    </form>
    <div className="formFooter">
    <button onClick={handleRoute}>
  Register
    </button>
    </div>
  </div>
</div>
    )
}

//  

export default Login