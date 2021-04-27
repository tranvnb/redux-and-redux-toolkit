// create action alias
const ACTION_INCREASE = "ACTION_INCREASE";
const ACTION_DECREASE = "ACTION_DECREASE";

const ACTION_ASYNC_SAVE_STARTED = "ACTION_ASYNC_SAVE_STARTED";
const ACTION_ASYNC_SAVE_SUCCEED = "ACTION_ASYNC_SAVE_SUCCEED";
const ACTION_ASYNC_SAVE_FAIL = "ACTION_ASYNC_SAVE_FAIL";

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

export const actionAsyncSaveStarted = (message) => ({
    type: ACTION_ASYNC_SAVE_STARTED,
    payload: {
        message: message
    }
})

export const actionAsyncSaveSucceed = (message) => ({
    type: ACTION_ASYNC_SAVE_SUCCEED,
    payload: {
        message: message
    }    
})

export const actionAsyncSaveFail = (message) => ({
    type: ACTION_ASYNC_SAVE_FAIL,
    payload: {
        error: message
    }
})

export const actionSave = () => {
    return (dispathObject) => {
        dispathObject(actionAsyncSaveStarted("saving..."));
        
        const fakeRequest = new Promise((resolve, reject) => {
            setTimeout(() => {
                // resolve("save done")
                reject("save failed");
            }, 2000);
        })

        return fakeRequest
            .then(result => {
                console.log("success", result)
                dispathObject(actionAsyncSaveSucceed(result))
            })
            .catch(error => {
                console.log("error", error)
                dispathObject(actionAsyncSaveFail(error))
            }) 

    }
}

const initialState = {
    number: 0,
    savestate: ''
}

// create reducer for all the action
export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_INCREASE:
            return {...state, number: state.number + action.payload.num, savestate: "unsaved"} 
        case ACTION_DECREASE:
            return {...state, number: state.number - action.payload.num, savestate: "unsaved"}
        case ACTION_ASYNC_SAVE_STARTED:
            return {...state, savestate: action.payload.message}
        case ACTION_ASYNC_SAVE_SUCCEED:
            return {...state, savestate: action.payload.message}
        case ACTION_ASYNC_SAVE_FAIL:
            return {...state, savestate: action.payload.error}
        default: return state;
    }
}