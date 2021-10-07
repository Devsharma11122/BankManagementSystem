import React from 'react'
import {useForm} from 'react-hook-form'
import { homeLoan } from '../actions/Action'
import { useDispatch,useSelector } from 'react-redux'
import { useHistory } from 'react-router'

const HomeLoan = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const username = useSelector(state => state.BankReducer.username)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit=(data)=>{
        data.UserName =username
        dispatch(homeLoan(data))
        history.push('/applyloan')
        console.log(data)
    }
    return (
        <div className="HomeLoanContainer">
        <div className="registration HomeLoan">
            Home Loan
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
                <label className="input-head input-head2" >Annual Income</label><br/>
                <input type="text" placeholder="Enter Annual Income" {...register("AnnualIncome",{required:true})}/>
                <p className="formerror">{errors.AnnualIncome && "This feild is required"}</p><br/>

                <label className="input-head input-head2" >Company Name</label><br/>
                <input type="text" placeholder="Name of Company" {...register("CompanyName",{required:true})}/>
                <span className="formerror">{errors.CompanyName && "This feild is required"}</span><br/>

                <label className="input-head input-head2" >Designation</label><br/>
                <input type="text" placeholder="Enter Designation" {...register("Designation",{required:true})}/>
                <span className="formerror">{errors.Designation && "This feild is required"}</span><br/>

                <label className="input-head input-head2" >Total Experience</label><br/>
                <input type="text" placeholder="Enter Total Experience" {...register("TotalExp",{required:true})}/>
                <span className="formerror">{errors.TotalExp && "This feild is required"}</span><br/>

                <label className="input-head input-head2" >Experience with Current Company</label><br/>
                <input type="text" placeholder="Enter Total Experience" {...register("ExpWithCurCom",{required:true})}/>
                <span className="formerror">{errors.ExpWithCurCom && "This feild is required"}</span><br/>
                
                <div className="continue">
                        <button className="btn5">Submit</button>
                </div>

        </form>
    </div>
    )
}

export default HomeLoan
