import { HEADLINES } from "./types"

export const setHeadlines=async(dispatch,data)=>{
    dispatch({
        type:HEADLINES,
        payload:data
    })
}