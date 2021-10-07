import React,{useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux';
import { getUsers,loanUser } from '../actions/Action';
import './Admin.css'

const Admin = () => {
    const dispatch= useDispatch();


    useEffect(() => {
      dispatch(getUsers());
      dispatch(loanUser())
    }, []);

    const data = useSelector(state => state.BankReducer.users)
    const loanData = useSelector(state => state.BankReducer.loanUsers)

    console.log(data);
    return (
        <div>
            <h2 className="header">Registered Users</h2>
            <table className="customers" border="2%">
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>AccountNo</th>
                    <th>CustomerId</th>
                    <th>Address</th>
                </tr>
             
                    {
                        data.map((item)=>{
                            return(
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.userName}</td>
                                    <td>{item.accountNo}</td>
                                    <td>{item.customerId}</td>
                                    <td>{item.address}</td>

                                    
                                </tr>
                            )
                        })
                    }
                
            </table>
            <h2 className="header">Loan Data</h2>
            <table className="customers" border="2%">
                <tr>
                    <th>Username</th>
                    <th>Loan Type</th>
                    <th>Amount</th>
                    <th>Apply Date</th>
                </tr>
             
                    {
                        loanData.map((item)=>{
                            return(
                                <tr>
                                    <td>{item.userName}</td>
                                    <td>{item.loanType}</td>
                                    <td>{item.loanAmount}</td>
                                    <td>{item.loanApplyDate}</td>      
                                </tr>
                            )
                        })
                    }
                
            </table>
        </div>
    )
}

export default Admin
