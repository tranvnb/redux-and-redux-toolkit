import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import counterReducer from './counterRedux';
import counterReduxToolkitReducer from './counterReduxToolkit'


const rootReducers = combineReducers({
    counterReducer: counterReducer,
    counterReduxToolkitReducer: counterReduxToolkitReducer,
})

// add add dev tool to composer
const devtoolCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// apply middleware as an enhancer
const middlewareEnhancer = applyMiddleware(thunkMiddleware);

// compose all enhancers
const composeEnhancers = devtoolCompose(middlewareEnhancer);

// initialize state
const initialState = {
    counterReducer: {
        number: -1
    },
    counterReduxToolkitReducer: {
        number: -2
    } 
}

export default createStore(
    rootReducers, 
    initialState,
    composeEnhancers
);