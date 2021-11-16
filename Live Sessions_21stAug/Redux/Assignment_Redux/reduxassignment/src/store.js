import {createstore,combineReducers,applymiddleware,compose} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

const allReducers=({
    login:loginReducers
    // todos:todoReducers
})

const store=createstore(
    allReducers,
    compose(
        applymiddleware(),
        composeWithDevTools()
    )
)
export default store;