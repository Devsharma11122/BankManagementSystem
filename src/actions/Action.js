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
        axios.get('api/registration/get-all-users')
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

export const userLogin=(data)=>{
    return (dispatch)=>{
        axios.post('https://localhost:44344/api/registration/log-in',{
            userName: data.userName,
            password : data.password
        })
        .then(response =>{
            console.log("LoginResponce",response.data);
            if(response.data=="loggedIn"){
                dispatch({
                    type: 'USER_LOGIN',
                    payload: response.data
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

export const logoutUser=(id)=>{
    console.log("logout")
    return{
        type : 'USER_LOGOUT',
        id
    }
}