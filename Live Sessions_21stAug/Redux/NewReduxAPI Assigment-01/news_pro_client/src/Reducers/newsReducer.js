import { BUSINESS_NEWS, HEADLINES, TECHONOLOGY_NEWS } from "../Action/types"


const initialstate={
    business_news:[],
    technology_news:[],
    headlines:[],
}

const newsReducer=(state=initialstate,action)=>{
    const newState={...state}
    switch(action.type){
        case BUSINESS_NEWS:
            newState.business_news=action.payload
            break;
        
        case TECHONOLOGY_NEWS:
            newState.technology_news=action.payload
            break;

        case HEADLINES:
            newState.headlines=action.payload
            break;
        
        default:
            return newState;
    }
    return newState;
}
export default newsReducer;