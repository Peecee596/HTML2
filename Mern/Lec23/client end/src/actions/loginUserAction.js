import { LOGIN_USER } from "./types";


export default function loginUser(data){

    return{
        type:LOGIN_USER,
        payload:{
            user:data
        }
    }
}
