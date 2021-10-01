
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
import {useDispatch, useSelector} from 'react-redux'
import {getUsers} from './actions/Action';
import React,{useEffect} from 'react';

function App() {


  const dispatch= useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  
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

       <Route path="/homeloan"><HomeLoan/></Route>
     </div>
    </div>
  );
}

export default App;
