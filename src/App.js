
import './App.css';
import Registration from './components/Registration';
import Login from './components/Login';
import ApplyLoan from './components/ApplyLoan'
import UpdateProfile from './components/UpdateProfile';
import {Route} from 'react-router-dom'
import Nav from './Nav'
import EducationLoan from './components/EducationLoan';
import HomeLoan from './components/HomeLoan';
import GetUser from './components/GetUser';
import {useDispatch} from 'react-redux'
import {getUsers,loanUser} from './actions/Action';
import React,{useEffect} from 'react';
import Logout from './components/Logout';
import Admin from './components/Admin';

function App() {



  
  return (
    <div className="App">
     <div><Nav/></div>
     <div>
       
       <Route path="/" exact><Login /></Route>
       <Route path="/applyloan"><ApplyLoan/></Route>
       <Route path="/registration"><Registration/></Route>
       <Route path="/updateprofile"><UpdateProfile/></Route>
       <Route path="/educationloan"><EducationLoan/></Route>
       <Route path="/getuser"><GetUser/></Route>
       <Route path="/admin"><Admin/></Route>
       <Route path="/homeloan"><HomeLoan/></Route>
       <Route path="/logout"><Logout/></Route>

     </div>
    </div>
  );
}

export default App;
