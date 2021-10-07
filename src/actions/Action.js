import axios from 'axios'
 export const addUser=(userObj)=>{
    
     //console.log("userObj",userObj);
     //return(dispatch)=>{
    //     axios({
    //         method: 'post',
    //         url: '/api/registration/new-registration',
    //         data: JSON.stringify(userObj),
    //         config: { headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json' 
    //           }}
    //         })
    //           .then((response) => {
    //               console.log(response)
    //               dispatch({
    //                 type: 'ADD_USER',
    //                 payload: response.data
    //             })
    //             }) 
    //           .catch(error => {console.log( 'the error has occured: ' + error) })
    //       };

    //  }


      return(dispatch)=>{
          axios.post('/api/registration/new-registration',{
                accountNo:userObj.accountNo,
                customerId : userObj.customerId,
                accountType: userObj.accountType,
                address: userObj.address,
                branchName: userObj.branchName,
                citizenShip: userObj.citizenShip,
                citizenStatus: userObj.citizenStatus,
                contactNo: userObj.contactNo,
                country: userObj.country,
                dob: userObj.dob,
                email: userObj.email,
                gender:userObj.gender,
                guardianName: userObj.guardianName,
                guardianType: userObj.guardianType,
                idDocumentationNo: userObj.idDocumentationNo,
                idProofType: userObj.idProofType,
                initialDepositAmount: userObj.initialDepositAmount,
                maritalStatus:userObj.maritalStatus,
                name:userObj.name,
                password: userObj.password,
                refAccHolAddress: userObj.refAccHolName,
                refAccHolName:userObj.refAccHolName,
                refAccHolNo: userObj.refAccHolNo,
                regDate: userObj.regDate,
                state: userObj.state,
                userName: userObj.userName
          })
          .then(response =>{
              console.log("postresponce",response);
              dispatch({
                  type: 'ADD_USER',
                  payload: response.data
              })             
              })
              .catch(error =>{
                 console.log(error);
          })
         }
  }
// //     let url ="https://localhost:44344/registration/new-registration"
//     let result = fetch(url).then((data)=>{
//         data.json().then((dataJson)=>{
//             return dispach({
//                 type:"ADD_USER",
//                 id:dataJson,
//             })
//         })
//     })
// }



export const getUsers=()=>{
    return (dispatch)=>{
        axios.get('/api/registration/get-all-users')
        .then(response => {
            console.log("respnse",response.data);
            dispatch({
                type : 'USERS_LIST',
                payload :response.data
            })
        })
        .catch(error =>{
            console.log(error);
        });
    }

}
export const loanUser=()=>{
    return (dispatch)=>{
        axios.get('/api/applyloan/get-all-users')
        .then(response => {
            console.log("respnse",response.data);
            dispatch({
                type : 'LOAN_USERS',
                payload :response.data
            })
        })
        .catch(error =>{
            console.log(error);
        });
    }

}

export const userLogin=(data)=>{
    return (dispatch)=>{
        axios.post('/api/registration/log-in',{
            userName: data.userName,
            password : data.password
        })
        .then(response =>{
            console.log("LoginResponce",response.data);
            if(response.data==="loggedIn"){
                dispatch({
                    type: 'USER_LOGIN',
                    payload: data
                }) 
            }
            else{
                alert("Invalid username and password")
            }
                        
            })
            .catch(error =>{
               console.log(error);
        })

    }
}

export const logoutUser=()=>{
    console.log("logout")
    return{
        type : 'USER_LOGOUT',
        
    }
}

export const fetchUserDetail = (username)=>{
    return (dispatch)=>{
        axios.get('/api/Registration/get-user-by-id/'+username)
        .then(response => {
            console.log("update-responce",response.data);
            dispatch({
                type : 'USER',
                payload :response.data
            })
        })
        .catch(error =>{
            console.log(error);
        });
    }    
}

export const updateProfile = (userObj) =>{
    let UserName = userObj.UserName
    console.log(UserName)
    return(dispatch) =>{
        axios.put('/api/Registration/update-profile/'+UserName,{
            //accountNo: userObj.AccountNumber,
            accountType: userObj.AccountType,
            address: userObj.Address,
            branchName: userObj.BranchName,
            citizenShip: userObj.Citizenship,
            //citizenStatus: userObj.CitizenStatus,
            contactNo: userObj.ContactNo,
            country: userObj.Country,
            dob: userObj.Dob,
            email: userObj.Email,
            gender:userObj.Gender,
            guardianName: userObj.GuardianName,
            guardianType: userObj.GuardianType,
            idDocumentationNo: userObj.IdDocNo,
            idProofType: userObj.IdProofType,
           // initialDepositAmount: userObj.InitialDepositAmount,
            maritalStatus:userObj.MaritalStatus,
            name:userObj.FullName,
            refAccHolAddress: userObj.RefAccHolAddress,
            refAccHolName:userObj.RefAccHolName,
            refAccHolNo: userObj.RefAccHolNo,
            //regDate: userObj.RegDate,
            state: userObj.State,  
        })
        .then(response => {
            console.log("update-profile",response.data);
            alert("Profile updated successfully!")
            dispatch({
                type : 'UPDATE_PROFILE',
                payload :response.data
            })
        })
        .catch(error =>{
            console.log(error);
        });
    }
}

export const applyLoan = (userObj) =>{
    let UserName = userObj.UserName
    console.log(UserName)
    return(dispatch) =>{
        axios.post('/api/applyloan/applyloan/',{
            userName : userObj.UserName,
            loanType : userObj.LoanType,
            loanAmount : userObj.LoanAmount,
            loanApplyDate : userObj.LoanApplyDate,
            loanIssueDate : userObj.LoanIssueDate,
            rateOfInterest : userObj.RateOfInterest,
            durationOfLoan : userObj.DurationOfLoan
        })
        .then(response => {
            console.log("applyLoan",response.data);
            dispatch({
                type : 'APPLY_LOAN',
                payload :response.data
            })
        })
        .catch(error =>{
            console.log(error);
        });
    }
}

export const educationLoan = (userObj) =>{
    let UserName = userObj.UserName
    console.log(UserName)
    return(dispatch) =>{
        axios.post('/api/applyloan/educationloan/',{
            userName : userObj.UserName,
            courseFee : userObj.CourseFee,
            course : userObj.Course,
            fatherName : userObj.FatherName,
            fatherOccupation : userObj.FatherOccupation,
            fatherTotalExp : userObj.FatherTotalExp,
            fatherExpWithCurCom : userObj.fatherExpWithCurCom,
            rationCardNo : userObj.RationCardNo,
            annualIncome : userObj.AnnualIncome

        })
        .then(response => {
            console.log("educationLoan",response.data);
            dispatch({
                type : 'EDUCATION_LOAN',
                payload :response.data
            })
        })
        .catch(error =>{
            console.log(error);
        });
    }
}

export const homeLoan = (userObj) =>{
    let UserName = userObj.UserName
    console.log(UserName)
    return(dispatch) =>{
        axios.post('/api/applyloan/homeloan/',{
            userName : userObj.UserName,
            annualIncome : userObj.AnnualIncome,
            companyName : userObj.CompanyName,
            designation : userObj.Designation,
            TotalExp : userObj.TotalExp,
            ExpWithCurCom : userObj.ExpWithCurCom

        })
        .then(response => {
            console.log("homeloan",response.data);
            dispatch({
                type : 'HOME_LOAN',
                payload :response.data
            })
        })
        .catch(error =>{
            console.log(error);
        });
    }
}