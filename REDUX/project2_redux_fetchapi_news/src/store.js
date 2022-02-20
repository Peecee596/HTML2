
import{
    createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from 'redux'
import {thunk} from 'react-redux'
import newsReducer from './Reducers/newsReducer';
const allReducers =combineReducers({
    news:newsReducer
});
const store = createStore(
    allReducers,
    compose(
        applyMiddleware(),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
console.log(store.getState())
export default store;
