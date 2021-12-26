import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import loginReducer from './Reducers/loginReducer'

const allReducers = combineReducers({
    login: loginReducer,
    //todos:todoReducer
})

const store = createStore(
        allReducers,
        compose(
            applyMiddleware(),
            composeWithDevTools()
        )
)

console.log(store.getState())

export default store;
