import React,{useState} from 'react'
import {useForm} from 'react-hook-form'
import './Registration.css'
import { useHistory } from 'react-router-dom'

const ApplyLoan = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const [loanType,setLoanType] = useState();

    const onValidate =(data)=>{
         // set Apply date 
         var today = new Date();
         var month = "";
         if((today.getMonth()+1) <10){
           month = "0"+(today.getMonth()+1)
         }
         else{
           month = (today.getMonth()+1)
         }
         var date = today.getFullYear()+'-'+month+'-'+today.getDate();
         console.log(date);
         data.LoanApplyDate = date;
    }
    
    const handleRoute = (data) =>{
        if(loanType === "Education") {
            history.push("/educationloan");
        }
        else if(loanType === "Loan"){
            history.push("/homeloan")
        }
        
            //history.push("/homeloan");
    }
    const onSubmit=(data)=>{      
        setLoanType(data.LoanType)
        onValidate(data)
        

        handleRoute(data);
        console.log(data);
    }
    return (
        <div className="ApplyLoanContainer">
        <div className="ApplyLoan">
            Apply Loan
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label className="input-head input-head3" >Loan Type</label><br/>
                <select name="Status" className="type" {...register("LoanType",{required:true})}>
                    <option value="">Choose...</option>
                    <option value="Education">Education</option>
                    <option value="Home">Home</option>
                </select>
                <span className="formerror"> {errors.LoanType && "This Field is required"}</span>
                <br/>
                <label className="input-head input-head3">Loan Amount</label><br/>
                <input type="text" placeholder="Enter Loan Amount"  {...register("LoanAmount",{required:true})} />
                <span className="formerror">{errors.LoanAmount && "This Field is required"}</span><br/>

                <label className="input-head input-head3">Loan Apply Date</label><br/>
                <input type="date"  {...register("LoanApplyDate",{required:false})} readOnly />
                <span className="formerror">{errors.LoanApplyDate && "This Field is required"}</span><br/>

                <label className="input-head input-head3">Loan Issue Date</label><br/>
                <input type="date"  {...register("LoanIssueDate",{required:true})} />
                <span className="formerror">{errors.LoanIssueDate && "This Field is required"}</span><br/>

                <label className="input-head input-head3">Rate of Interest</label><br/>
                <input type="text"   {...register("RateOfInterest",{required:true})} />
                <span className="formerror">{errors.RateOfInterest && "This Field is required"}</span><br/>

                <label className="input-head input-head3" >Duartion of Loan</label><br/>
                <select name="Status" className="type" {...register("DurationOfLoan",{required:true})}>
                    <option value="">Choose...</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>

                </select>
                <span className="formerror"> {errors.DurationOfLoan && "This Field is required"}</span>
                <br/>

            

            <div className="continue">
                <button className="btn5" >Submit</button>
            </div>

        </form>
    </div>
    )
}

export default ApplyLoan
