
import {createStore,combineReducers} from 'redux'
import loginReducer from './Reducers/loginReducers';

const allReducers=combineReducers({
    data:loginReducer
})

const store=createStore(allReducers,
    window.devToolsExtension && window.devToolsExtension()
    )
    
console.log(store.getState());

export default store;