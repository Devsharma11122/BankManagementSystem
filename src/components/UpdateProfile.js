import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {useForm} from 'react-hook-form'
import {fetchUserDetail, updateProfile } from '../actions/Action';
import { useHistory } from 'react-router';
import axios from 'axios';

const UpdateProfile = () => {
    const dispatch= useDispatch(); 
    const history = useHistory();  
    const username = useSelector(state => state.BankReducer.username)
    const [data, setData] = useState(null)
    const [customerId, setCustomerId] = useState(null)
    const [name, setName] = useState(null)
    const [accountNo, setAccountNo] = useState(null)
    const [guardianType, setGuardianType] = useState(null)
    const [guardianName, setGuardianName] = useState(null)
    const [address, setAddress] = useState(null)
    const [citizenShip, setCitizenShip] = useState(null)
    const [country, setCountry] = useState(null)

    const [citizenStatus, setCitizenStatus] = useState(null)
    const [regDate, setRegDate] = useState(null)
    const [state, setState] = useState(null)
    const [email, setEmail] = useState(null)
    const [gender, setGender] = useState(null)
    const [maritalStatus, setMaritalStatus] = useState(null)
    const [contactNo, setContactNo] = useState(null)
    const [dob, setDob] = useState(null)
    const [accountType, setAccountType] = useState(null)
    const [branchName, setBranchName] = useState(null)
    const [idProofType, setIdProofType] = useState(null)
    const [idDocumentationNo, setIdDocumentationNo] = useState(null)

    const [refAccHolName, setRefAccHolName] = useState(null)
    const [refAccHolNo, setRefAccHolNo] = useState(null)
    const [refAccHolAddress, setRefAccHolAddress] = useState(null)



    

    const userDetail = useSelector(state => state.BankReducer.userDetail) 
    //dispatch(fetchUserDetail(username)); 
    // const fetchUserDetail = (username)=>{
    //     return ()=>{
    //         axios.get('/api/Registration/get-user-by-id/'+"ani1122")
    //         .then(response => {
    //             console.log("update-responce",response.data);
    //             setData(response.data)
    //         })
    //         .catch(error =>{
    //             console.log(error);
    //         });
    //     }    
    // }

    useEffect(() => {
         dispatch(fetchUserDetail(username))
      
      }, []);
    
    //let detail = userDetail.customerId

    //
    //const [cid,setCid] = useState(null);
    //fetchUserDetail(username)
    useEffect(() => {
        if(userDetail){
            setData(userDetail)
            setCustomerId(userDetail.customerId)
            setName(userDetail.name)
            setAccountNo(userDetail.accountNo)
            setGuardianType(userDetail.guardianType)
            setGuardianName(userDetail.guardianName)
            setAddress(userDetail.address)
            setCitizenShip(userDetail.citizenShip)
            setCountry(userDetail.country)
            setCitizenStatus(userDetail.citizenStatus)
            setRegDate(userDetail.regDate)
            setState(userDetail.state)
            setEmail(userDetail.email)
            setGender(userDetail.gender)
            setMaritalStatus(userDetail.maritalStatus)
            setDob(userDetail.dob)
            setContactNo(userDetail.contactNo)
            setAccountType(userDetail.accountType)
            setBranchName(userDetail.branchName)
            setIdProofType(userDetail.idProofType)
            setIdDocumentationNo(userDetail.idDocumentationNo)
            setRefAccHolName(userDetail.refAccHolName)
            setRefAccHolNo(userDetail.refAccHolNo)
            setRefAccHolAddress(userDetail.refAccHolAddress)

        }
    }, [userDetail])
         
     console.log("data",data)
    //setData(UserDetail())

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit=(data)=>{
        data.UserName = username
        //data.FullName = name
        console.log("updatedprofileuser",data);
        dispatch(updateProfile(data))
        history.push("/applyloan")
        
    }
 
    return (
        <div className="UpdateProfileContainer">
        <div className="UpdateProfile">
            Update Profile
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form">
                <label className="input-head"  >Customer Id</label><br/>
                <input type="text" defaultValue={customerId}  readOnly/>
                <span className="formerror"></span><br/>

                <label className="input-head" >Name</label><br/>
                <input type="text" defaultValue={name} {...register("FullName",{required: true, maxLength: 80,pattern:/^[A-Z ]+$/})}/>
                <span className="formerror">{errors.FullName && "Name is required"}</span><br/>
                


                <label className="input-head" >Account Number</label><br/>
                <input type="text" defaultValue={accountNo}  readOnly/>
                <span className="formerror"></span><br/>
                

                <label className="input-head" >Guardian Type</label><br/>
                <select className="type" defaultValue={guardianType} {...register("GuardianType",{required:false})}>
                    <option value="">Choose...</option>
                    <option value="Father">Father</option>
                    <option value="Husband">Husband</option>
                </select>
                <span className="formerror"> {errors.GuardianType && "Guardian Type is required"}</span>


                <label className="input-head" >Guardian Name</label><br/>
                <input type="text" placeholder="Guardian Name" className="input" defaultValue={guardianName} {...register("GuardianName",{required:false})} />
                <span className="formerror">{errors.GuardianName && "Guardian Name is required"}</span><br/>


                <label className="input-head" >Address</label><br/>
                <input type="text"  placeholder="Address" defaultValue={address}{...register("Address",{required:false})}/>
                <span className="formerror">{errors.Address && "Address is required"}</span><br/>

                <label className="input-head">Citizenship</label><br/>
                <input type="text"  placeholder="Citizenship" defaultValue={citizenShip} {...register("Citizenship",{required:false})}/>
                <span className="formerror">{errors.Citizenship && "Citizenship is required"}</span><br/>

                <label className="input-head">Citizen Status</label><br/>
                <input type="text"  defaultValue={citizenStatus} readOnly/>
                <span className="formerror"></span><br/>

                <label className="input-head">Registration Date</label><br/>
                <input type="text" defaultValue={regDate} readOnly/>
                <span className="formerror"></span><br/>



                <label className="input-head">Country</label><br/>
                <select name="Country" className="type" defaultValue={country} {...register("Country",{required:false})} >
                    <option value="">Choose...</option>
                    <option value="India">India</option>
                    <option value="America">America</option>
                </select>
                <span className="formerror">{errors.Country && "This Field is required"}</span><br/>

                <label className="input-head" >State</label><br/>
                <select name="State" className="type" defaultValue={state} {...register("State",{required:false})}>
                    <option value="">Choose...</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Uttrakhand">Uttrakhand</option>
                </select>
                <span className="formerror">{errors.State && "This Field is required"}</span><br/>

                <label className="input-head" >Email Address*</label><br/>
                <input type="email" placeholder="Email Address" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" defaultValue={email}{...register("Email",{required:false,pattern: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+[.]+[A-z]/})} />
                <span className="formerror">{errors.Email && "This Field is required"}</span><br/>

                <label className="input-head">Gender</label><br/>
                <select name="Gender" className="type" defaultValue={gender} {...register("Gender",{required:false})}>
                    <option value="">Choose...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                <span className="formerror">{errors.Gender && "This Field is required"}</span>
                <br/>

                <label className="input-head">Marital Status</label><br/>
                <select name="Status" className="type" defaultValue={maritalStatus} {...register("MaritalStatus",{required:false})}>
                    <option value="">Choose...</option>
                    <option value="Married">Married</option>
                    <option value="Unmarried">Unmarried</option>
                </select>
                <span className="formerror"> {errors.MaritalStatus && "This Field is required"}</span>
                <br/>

                <label className="input-head">Contact No.</label><br/>
                <input type="text" placeholder="Enter Contact Number"  defaultValue={contactNo} {...register("ContactNo",{required:false
                    ,minLength:10,maxLength:10})}/>
                <span className="formerror">{errors.ContactNo && "This Field is required"}</span><br/>
                
                <label className="input-head">Date Of Birth</label><br/>
                <input type="date" placeholder="Enter Date Of Birth" defaultValue={dob} {...register("Dob",{required:false})} />
                <span className="formerror">{errors.Dob && "This Field is required"}</span><br/>

                <label className="input-head" >AccountType</label><br/>
                <select name="Status" className="type"  defaultValue={accountType} {...register("AccountType",{required:false})}>
                    <option value="">Choose...</option>
                    <option value="Saving">Saving</option>
                    <option value="Salary">Salary</option>
                </select>
                <span className="formerror"> {errors.AccountType && "This Field is required"}</span>
                <br/>


                <label className="input-head">Branch Name</label><br/>
                <input type="text" placeholder="Enter Branch Name"  defaultValue={branchName} {...register("BranchName",{required:false})} />
                <span className="formerror">{errors.BranchName && "This Field is required"}</span><br/>

                <label className="input-head" >Id Proof Type</label><br/>
                <select name="Status" className="type"  defaultValue={idProofType} {...register("IdProofType",{required:false})}>
                    <option value="">Choose...</option>
                    <option value="Aadhar">Aadhar</option>
                    <option value="PanCard">PanCard</option>
                </select>
                <span className="formerror"> {errors.IdProofType && "This Field is required"}</span>
                <br/>
                <label className="input-head">Identification Doc Number</label><br/>
                <input type="text" placeholder="Enter Name"  defaultValue={idDocumentationNo} {...register("IdDocNo",{required:false,minLength:12,maxLength:12,pattern:/^[A-Z0-9]+$/})} />
                <span className="formerror">{errors.IdDocNo && "This Field is required"}</span><br/>

                <label className="input-head">Reference Account Holder Name</label><br/>
                <input type="text" placeholder="Enter Name"  defaultValue={refAccHolName}  {...register("RefAccHolName",{required:false,pattern:/^[A-Za-z ]+$/})} />
                <span className="formerror">{errors.RefAccHolName && "This Field is required"}</span><br/>

                <label className="input-head">Reference Account Holder Acc No</label><br/>
                <input type="text" placeholder="Enter Account Number" defaultValue={refAccHolNo}  {...register("RefAccHolNo",{required:false})} />
                <span className="formerror">{errors.RefAccHolAccNo && "This Field is required"}</span><br/>

                <label className="input-head">Reference Account Holder Address</label><br/>
                <input type="text" placeholder="Enter Address" defaultValue={refAccHolAddress}  {...register("RefAccHolAddress",{required:false})} />
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
