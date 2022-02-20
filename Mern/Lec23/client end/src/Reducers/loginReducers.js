import React from "react";
import axios from 'axios'//API call 
import { LOGIN_USER } from "../actions/types";


let data={
    user_info:""
}

function loginReducer(state=data,{type,payload}){
    switch(type){
        case LOGIN_USER:
            //login

        default:
            return state
        
    }
}
export default loginReducer;