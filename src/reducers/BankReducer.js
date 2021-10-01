const initialState ={
    Users : [],
    loggedIn:false

}

const bankManagement = (state = {},action)=>
{
    switch(action.type){
        case 'USERS_LIST':
            return{
                ...state,
                users:action.payload
            };
        case 'ADD_USER':
            const users = state.users.concat(action.payload);
            return{
                ...state,
                users
            };
        case 'USER_LOGIN': 
            console.log("login Reducer")          
            return{
                ...state,
                loggedIn:true
            };
        case 'USER_LOGOUT':

            state.loggedIn =false 
            console.log("logoutReducer")       
            return{
                ...state,
                loggedIn:action.data
            };
        default:
            return state
    }
}
export default bankManagement