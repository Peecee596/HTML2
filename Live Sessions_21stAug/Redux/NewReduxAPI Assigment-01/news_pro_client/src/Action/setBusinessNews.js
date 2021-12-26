import { BUSINESS_NEWS } from "./types"

export const setBusinessNews=async(dispatch,data)=>{
    dispatch({
        type:BUSINESS_NEWS,
        payload:data
    })
}