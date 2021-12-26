import { LOGIN_USER, LOGOUT_USER } from "../Actions/type"

const initialstate={
    userinfo:null,
    login_status:false
}
const loginReducer=(state=initialstate,action)=>{
    const newstate={...state}

    switch(action.type){
        case LOGIN_USER:
            newstate.userinfo=action.payload,
            newstate.login_status=true
            break;
        
        case LOGOUT_USER:
            newstate.userinfo=null,
            newstate.login_status=false
            break;
        
        default:
            return newstate;

    }
        return newstate;

}
export default loginReducer;