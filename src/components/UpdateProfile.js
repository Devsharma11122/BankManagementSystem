import React from 'react'
import {useForm} from 'react-hook-form'

const UpdateProfile = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit=(data)=>{
        console.log(data)
    }
 
    return (
        <div className="UpdateProfileContainer">
        <div className="UpdateProfile">
            Update Profile
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form">
                <label className="input-head" >Customer Id</label><br/>
                <input type="text" />
                <span className="formerror"></span><br/>

                <label className="input-head" >Name</label><br/>
                <input type="text" placeholder="Name of the customer" {...register("FullName", {required: true, maxLength: 80,pattern:/^[A-Z ]+$/})}/>
                <span className="formerror">{errors.FullName && "Name is required"}</span><br/>
                


                <label className="input-head" >Account Number</label><br/>
                <input type="text" />
                <span className="formerror"></span><br/>
                

                <label className="input-head" >Guardian Type</label><br/>
                <select className="type" {...register("GuardianType",{required:true})}>
                    <option value="">Choose...</option>
                    <option value="Father">Father</option>
                    <option value="Husband">Husband</option>
                </select>
                <span className="formerror"> {errors.GuardianType && "Guardian Type is required"}</span>


                <label className="input-head" >Guardian Name</label><br/>
                <input type="text" placeholder="Guardian Name" className="input" {...register("GuardianName",{required:true})} />
                <span className="formerror">{errors.GuardianName && "Guardian Name is required"}</span><br/>


                <label className="input-head" >Address</label><br/>
                <input type="text"  placeholder="Address" {...register("Address",{required:true})}/>
                <span className="formerror">{errors.Address && "Address is required"}</span><br/>

                <label className="input-head">Citizenship</label><br/>
                <input type="text"  placeholder="Citizenship" {...register("Citizenship",{required:true})}/>
                <span className="formerror">{errors.Citizenship && "Citizenship is required"}</span><br/>

                <label className="input-head">Citizen Status</label><br/>
                <input type="text"/>
                <span className="formerror"></span><br/>

                <label className="input-head">Registration Date</label><br/>
                <input type="text" />
                <span className="formerror"></span><br/>



                <label className="input-head">Country</label><br/>
                <select name="Country" className="type" {...register("Country",{required:true})} >
                    <option value="">Choose...</option>
                    <option value="India">India</option>
                    <option value="America">America</option>
                </select>
                <span className="formerror">{errors.Country && "This Field is required"}</span><br/>

                <label className="input-head" >State</label><br/>
                <select name="State" className="type" {...register("State",{required:true})}>
                    <option value="">Choose...</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Uttrakhand">Uttrakhand</option>
                </select>
                <span className="formerror">{errors.State && "This Field is required"}</span><br/>

                <label className="input-head" >Email Address*</label><br/>
                <input type="email" placeholder="Email Address" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"{...register("Email",{required:true,pattern: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+[.]+[A-z]/})} />
                <span className="formerror">{errors.Email && "This Field is required"}</span><br/>

                <label className="input-head">Gender</label><br/>
                <select name="Gender" className="type" {...register("Gender",{required:true})}>
                    <option value="">Choose...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                <span className="formerror">{errors.Gender && "This Field is required"}</span>
                <br/>

                <label className="input-head">Marital Status</label><br/>
                <select name="Status" className="type" {...register("MaritalStatus",{required:true})}>
                    <option value="">Choose...</option>
                    <option value="Married">Married</option>
                    <option value="Unmarried">Unmarried</option>
                </select>
                <span className="formerror"> {errors.MaritalStatus && "This Field is required"}</span>
                <br/>

                <label className="input-head">Contact No.</label><br/>
                <input type="text" placeholder="Enter Contact Number" {...register("ContactNo",{required:true
                    ,minLength:10,maxLength:10})}/>
                <span className="formerror">{errors.ContactNo && "This Field is required"}</span><br/>
                
                <label className="input-head">Date Of Birth</label><br/>
                <input type="date" placeholder="Enter Date Of Birth" {...register("Dob",{required:true})} />
                <span className="formerror">{errors.Dob && "This Field is required"}</span><br/>

                <label className="input-head" >AccountType</label><br/>
                <select name="Status" className="type" {...register("AccountType",{required:true})}>
                    <option value="">Choose...</option>
                    <option value="Saving">Saving</option>
                    <option value="Salary">Salary</option>
                </select>
                <span className="formerror"> {errors.AccountType && "This Field is required"}</span>
                <br/>

                <label className="input-head">Bank Name</label><br/>
                <input type="text"  />
                <span className="formerror"></span><br/>

                <label className="input-head">Branch Name</label><br/>
                <input type="text" placeholder="Enter Branch Name" {...register("BranchName",{required:true})} />
                <span className="formerror">{errors.BranchName && "This Field is required"}</span><br/>

                <label className="input-head" >Id Proof Type</label><br/>
                <select name="Status" className="type" {...register("IdProofType",{required:true})}>
                    <option value="">Choose...</option>
                    <option value="Aadhar">Aadhar</option>
                    <option value="PanCard">PanCard</option>
                </select>
                <span className="formerror"> {errors.IdProofType && "This Field is required"}</span>
                <br/>
                <label className="input-head">Identification Doc Number</label><br/>
                <input type="text" placeholder="Enter Name"  {...register("IdDocNo",{required:true,minLength:12,maxLength:12,pattern:/^[A-Z0-9]+$/})} />
                <span className="formerror">{errors.IdDocNo && "This Field is required"}</span><br/>

                <label className="input-head">Reference Account Holder Name</label><br/>
                <input type="text" placeholder="Enter Name"  {...register("RefAccHolName",{required:true,pattern:/^[A-Za-z ]+$/})} />
                <span className="formerror">{errors.RefAccHolName && "This Field is required"}</span><br/>

                <label className="input-head">Reference Account Holder Acc No</label><br/>
                <input type="text" placeholder="Enter Account Number"  {...register("RefAccHolAccNo",{required:true})} />
                <span className="formerror">{errors.RefAccHolAccNo && "This Field is required"}</span><br/>

                <label className="input-head">Reference Account Holder Address</label><br/>
                <input type="text" placeholder="Enter Address"  {...register("RefAccHolAddress",{required:true})} />
                <span className="formerror">{errors.RefAccHolAddress && "This Field is required"}</span><br/>

                
            </div>
            

            <div className="continue">
                <button className="btn5">Submit</button>
                </div>

        </form>
    </div>
    )
}

export default UpdateProfile
