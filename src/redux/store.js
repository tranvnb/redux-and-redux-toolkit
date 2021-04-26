import { createStore, combineReducers } from 'redux';
import counterReducer from './counterRedux';


const rootReducers = combineReducers({
    counterReducer: counterReducer
})

export default createStore(
    rootReducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);