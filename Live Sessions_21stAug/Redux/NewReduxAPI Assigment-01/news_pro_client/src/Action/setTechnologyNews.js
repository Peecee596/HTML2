import { TECHONOLOGY_NEWS } from "./types"

export const setTechnologyNews=async (dispatch,data)=>{
    dispatch({
        type:TECHONOLOGY_NEWS,
        payload:data
    })
}