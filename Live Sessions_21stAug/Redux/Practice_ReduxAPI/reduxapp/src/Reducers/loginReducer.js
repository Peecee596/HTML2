import { LOGIN_USER, LOGOUT_USER } from "../Actions/type"

const initialState={
    newsinfo:null,
    login_status:false
}
const loginReducer = (state = initialState,action) =>{
    const newstate={...state}

    switch(action.type){
        case LOGIN_USER:
            newstate.newsinfo=action.payload
            newstate.login_status=true
            break;
        
        case LOGOUT_USER:
            newstate.newsinfo=null
            newstate.login_status=false
            break;
        
        default:
            return newstate;

    }
        return newstate;

}
export default loginReducer;