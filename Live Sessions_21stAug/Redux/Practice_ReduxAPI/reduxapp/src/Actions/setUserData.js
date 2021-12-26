import { LOGIN_USER } from './type'
export const setUserData=async(dispatch,data)=>{
    dispatch({
        type:LOGIN_USER,
        payload:data
    })
}