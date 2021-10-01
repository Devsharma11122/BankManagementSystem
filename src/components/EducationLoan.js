import React from 'react'
import './Registration.css'
import {useForm} from 'react-hook-form'

const EducationLoan = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit=(data)=>{
        console.log(data)
    }
    return (
        <div className="EducationLoanContainer">
        <div className="EducationLoan">
            Education Loan
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
                <label className="input-head input-head2" >Course Fee</label><br/>
                <input type="text" placeholder="Enter Course Fee" {...register("CourseFee",{required:true})}/>
                <span className="formerror">{errors.CourseFee && "This Field is required"}</span><br/>

                <label className="input-head input-head2" >Course</label><br/>
                <input type="text" placeholder="Enter Course Name" {...register("Course",{required:true})}/>
                <span className="formerror">{errors.Course && "This feild is required"}</span><br/>

                <label className="input-head input-head2" >Course Fee</label><br/>
                <input type="text" placeholder="Enter Father's Name" {...register("FatherName",{required:true})}/>
                <span className="formerror">{errors.FatherName && "This feild is required"}</span><br/>

                <label className="input-head input-head2" >Father's Occupation</label><br/>
                <input type="text" placeholder="Enter Father's Occupation" {...register("FatherOccupation",{required:true})}/>
                <span className="formerror">{errors.FatherOccupation && "This feild is required"}</span><br/>

                <label className="input-head input-head2" >Father's Toatal Experience</label><br/>
                <input type="text" placeholder="Enter Total Experience" {...register("FatherTotalExp",{required:true})}/>
                <span className="formerror">{errors.FatherTotalExp && "This Feild is required"}</span><br/>

                <label className="input-head input-head2" >Father's Toatal Experience with current Company</label><br/>
                <input type="text" placeholder="Enter Toatal Exp with current comapny" {...register("FatherExpWithCurCom",{required:true})}/>
                <span className="formerror">{errors.FatherExpWithCurCom && "This feild is required"}</span><br/>

                <label className="input-head input-head2" >Ration Card No</label><br/>
                <input type="text" placeholder="Enter Ration Card No" {...register("RationCardNo",{required:true})}/>
                <span className="formerror">{errors.RationCardNo && "This feild is required"}</span><br/>

                <label className="input-head input-head2" >Annual Income</label><br/>
                <input type="text" placeholder="Enter Annual Income" {...register("AnnualIncome",{required:true})}/>
                <span className="formerror">{errors.AnnualIncome && "This feild is required"}</span><br/>

        <div className="continue">
                <button className="btn5">Submit</button>
        </div>

        </form>
    </div>
    )
}

export default EducationLoan
