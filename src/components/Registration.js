import React,{useState} from 'react'
import {useForm} from 'react-hook-form'
import {connect} from 'react-redux'
import './Registration.css'
import {useDispatch} from 'react-redux'
import { addUser } from '../actions/Action'
import { useHistory } from 'react-router'

const Registration = () => {
    

    const [accType, setAccType] =useState();

    const dispatch = useDispatch();
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const calculate_age = (dob1) => {
        var today = new Date();
        var birthDate = new Date(dob1);
        var age_now = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age_now--;
        }
        //console.log(age_now);
        return age_now;
      }
      const onValidate=(data)=>{
        let dateOfBirth = data.dob
        let age = calculate_age(dateOfBirth);
        console.log(age);
        if( age <= 18){
          alert("Age must be greater than 18");
          return false;
        }
        // set Registration Date
        var today = new Date();
        var month = "";
        if((today.getMonth()+1) <10){
          month = "0"+(today.getMonth()+1)
        }
        else{
          month = (today.getMonth()+1)
        }
        var date = today.getFullYear()+'-'+month+'-'+today.getDate();
        data.regDate = date;
    
     
    
        // Generate Customer id
        var randomNum ="R-"+ Math.floor(Math.random()*(999-100+1)+100);
        data.customerId = randomNum;
    
        //Generate Account number
        var AccountNo ="";
        var randNum1 =Math.floor(1000 + Math.random()*9000);
        var randNum2 =Math.floor(1000 + Math.random()*9000);
        var randNum3 =Math.floor(1000 + Math.random()*9000);
        var randNum4 =Math.floor(1000 + Math.random()*9000);

        AccountNo=AccountNo+randNum1+randNum2+randNum3+randNum4
        data.accountNo = AccountNo
    
        //Citizen Status
        if(age > 18 && age <= 60){
          data.citizenStatus="Normal";
        }
        else{
          data.citizenStatus="Senior";
        }
         //InitialDepositAmount
         
         if(accType==="Saving"){
          data.initialDepositAmount = 5000.00;
        }
        else{
            data.initialDepositAmount = 0.00;
          
        }
        return true;
      }


    const onSubmit=(data)=>{
       if(onValidate(data)) {
            dispatch(addUser(data));
            alert ("You have successfully registered!");
            history.push("/")

       }
       else{
           alert("please enter valid details")

       }
        //dispatch(addUser(data));
        console.log(data)
    }
 
    return (
        <div className="container">
        <div className="registration">
            New Registration
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form">
                <label className="input-head" >Name</label><br/>
                <input type="text" placeholder="Name of the customer" {...register("name", {required: true, maxLength: 80,pattern:/^[A-Z ]+$/})}/>
                <span className="formerror">{errors.name && "Name is required"}</span><br/>
                


                <label className="input-head" >Username</label><br/>
                <input type="text" name="name" placeholder="Customer login name" {...register("userName",{required:true})}/>
                <span className="formerror">{errors.userName && "Username is required"}</span><br/>
                
                
                <label className="input-head">Password</label><br/>
                <input type="password" placeholder="Password for login" {...register("password", {required: true,  minLength: 6, maxLength: 12})}/><br/>
                <span className="formerror"> {errors.password && "Password length should be greater than 6 and less than 12"}</span>

                <label className="input-head" >Guardian Type</label><br/>
                <select className="type" {...register("guardianType",{required:true})}>
                    <option value="">Choose...</option>
                    <option value="Father">Father</option>
                    <option value="Husband">Husband</option>
                </select>
                <span className="formerror"> {errors.guardianType && "Guardian Type is required"}</span>


                <label className="input-head" >Guardian Name</label><br/>
                <input type="text" placeholder="Guardian Name" className="input" {...register("guardianName",{required:true})} />
                <span className="formerror">{errors.guardianName && "Guardian Name is required"}</span><br/>


                <label className="input-head" >Address</label><br/>
                <input type="text"  placeholder="Address" {...register("address",{required:true})}/>
                <span className="formerror">{errors.address && "Address is required"}</span><br/>

                <label className="input-head">CitizenShip</label><br/>
                <input type="text"  placeholder="Citizenship" {...register("citizenShip",{required:true})}/>
                <span className="formerror">{errors.citizenShip && "Citizenship is required"}</span><br/>



                <label className="input-head">Country</label><br/>
                <select name="Country" className="type" {...register("country",{required:true})} >
                    <option value="">Choose...</option>
                    <option value="India">India</option>
                    <option value="America">America</option>
                </select>
                <span className="formerror">{errors.country && "This Field is required"}</span><br/>

                <label className="input-head" >State</label><br/>
                <select name="State" className="type" {...register("state",{required:true})}>
                    <option value="">Choose...</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Uttrakhand">Uttrakhand</option>
                </select>
                <span className="formerror">{errors.state && "This Field is required"}</span><br/>

                <label className="input-head" >Email Address</label><br/>
                <input type="text" placeholder="Email Address" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"{...register("email",{required:true,pattern: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+[.]+[A-z]/})} />
                <span className="formerror">{errors.email && "This Field is required"}</span><br/>

                <label className="input-head">Gender</label><br/>
                <select name="Gender" className="type" {...register("gender",{required:true})}>
                    <option value="">Choose...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                <span className="formerror">{errors.gender && "This Field is required"}</span>
                <br/>

                <label className="input-head">Marital Status</label><br/>
                <select name="Status" className="type" {...register("maritalStatus",{required:true})}>
                    <option value="">Choose...</option>
                    <option value="Married">Married</option>
                    <option value="Unmarried">Unmarried</option>
                </select>
                <span className="formerror"> {errors.maritalStatus && "This Field is required"}</span>
                <br/>

                <label className="input-head">Contact No.</label><br/>
                <input type="text" placeholder="Enter Contact Number" {...register("contactNo",{required:true
                    ,minLength:10,maxLength:10})}/>
                <span className="formerror">{errors.contactNo && "This Field is required"}</span><br/>
                
                <label className="input-head">Date Of Birth</label><br/>
                <input type="date" placeholder="Enter Date Of Birth" {...register("dob",{required:true})} />
                <span className="formerror">{errors.dob && "This Field is required"}</span><br/>

                <label className="input-head" >AccountType</label><br/>
                <select name="Status" className="type" {...register("accountType",{required:true})} onChange={(e)=>setAccType(e.target.value)}>
                    <option value="">Choose...</option>
                    <option value="Saving">Saving</option>
                    <option value="Salary">Salary</option>
                </select>
                <span className="formerror"> {errors.accountType && "This Field is required"}</span>
                <br/>

                <label className="input-head">Branch Name</label><br/>
                <input type="text" placeholder="Enter Branch Name" {...register("branchName",{required:true})} />
                <span className="formerror">{errors.branchName && "This Field is required"}</span><br/>

                <label className="input-head" >Id Proof Type</label><br/>
                <select name="Status" className="type" {...register("idProofType",{required:true})}>
                    <option value="">Choose...</option>
                    <option value="Aadhar">Aadhar</option>
                    <option value="PanCard">PanCard</option>
                </select>
                <span className="formerror"> {errors.idProofType && "This Field is required"}</span>
                <br/>
                
                <label className="input-head">Identification Doc Number</label><br/>
                <input type="text" placeholder="Enter Name"  {...register("idDocumentationNo",{required:true,minLength:12,maxLength:12,pattern:/^[A-Z0-9]+$/})} />
                <span className="formerror">{errors.idDocumentationNo && "This Field is required"}</span><br/>

                <label className="input-head">Reference Account Holder Name</label><br/>
                <input type="text" placeholder="Enter Name"  {...register("refAccHolName",{required:true,pattern:/^[A-Za-z ]+$/})} />
                <span className="formerror">{errors.refAccHolName && "This Field is required"}</span><br/>

                <label className="input-head">Reference Account Holder Acc No</label><br/>
                <input type="text" placeholder="Enter Account Number"  {...register("refAccHolNo",{required:true})} />
                <span className="formerror">{errors.refAccHolNo && "This Field is required"}</span><br/>

                <label className="input-head">Reference Account Holder Address</label><br/>
                <input type="text" placeholder="Enter Address"  {...register("refAccHolAddress",{required:true})} />
                <span className="formerror">{errors.refAccHolAddress && "This Field is required"}</span><br/>

                
            </div>
            

            <div className="continue">
                <button className="btn5">Submit</button>
                </div>

        </form>
    </div>
    )
}

export default connect(null, {addUser}) (Registration);
