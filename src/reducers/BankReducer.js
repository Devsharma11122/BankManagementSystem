const initialState ={
    users : [],
    loanUsers : [],

    loggedIn:false,
    username:"",
    userDetail:{},
    updatedDetails:{}

}

const bankManagement = (state = initialState,action)=>
{
    switch(action.type){
        case 'USERS_LIST':
            return{
                ...state,
                users:action.payload
            };
        case 'LOAN_USERS':
            return{
                ...state,
                loanUsers:action.payload
            };
        case 'ADD_USER':
            const users = state.users.concat(action.payload);
            return{
                ...state,
                users
            };
        case 'USER_LOGIN':
            state.loggedIn = true; 
            console.log(state.loggedIn)   
            console.log(action.payload.userName);       
            return{
                ...state,
                loggedIn:true,
                username:action.payload.userName
            };
        case 'USER_LOGOUT':

            state.loggedIn =false 
            console.log(state.loggedIn)       
            return{
                ...state,
                loggedIn:false
            };
        case 'USER':            
            console.log("USER",action.payload)          
            return{
                ...state,
                userDetail:action.payload
            };
        case 'UPDATE_PROFILE':            
            console.log("USER_PROFILE",action.payload)          
            return{
                ...state,
                updatedDetails:action.payload
            };
        default:
            return state
    }
}
export default bankManagement