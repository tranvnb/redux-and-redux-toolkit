import { createStore, combineReducers } from 'redux';

// create action alias
const ACTION_INCREASE = "ACTION_INCREASE";
const ACTION_DECREASE = "ACTION_DECREASE";
const ACTION_ASYNC_SAVE = "ACTION_ASYNC_SAVE";

// create action and its payload
export const actionIncrease = (num = 1) => ({
    type: ACTION_INCREASE,
    payload: {
        num
    }
})

export const actionDecrease = (num = 1) => ({
    type: ACTION_DECREASE,
    payload: {
        num
    }
})

export const actionSave = () => ({
    type: ACTION_ASYNC_SAVE
})

const initialState = {
    number: 0
}

// create reducer for all the action
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_INCREASE:
            return {...state, number: state.number + action.payload.num}            
        case ACTION_DECREASE:
            return {...state, number: state.number - action.payload.num}
        case ACTION_ASYNC_SAVE:
            break;
        default: return state;
    }
}

const rootReducers = combineReducers({
    counterReducer
})

export default createStore(
    counterReducer, 
);