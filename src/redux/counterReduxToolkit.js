import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    number: 0,
    savestate: ''
}

export const actionAsyncSave = createAsyncThunk(
    'counter/asyncSave',
    async (data, thunkApi) => {
        const fakeRequest = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("save succeeded")
                // reject("save failed");
            }, 2000);
        })
        
        return fakeRequest
            .then(result => {
                return result;
            })
            .catch(error => {
                return thunkApi.rejectWithValue(error);
            }) 
    }
)

const counterReduxToolkit = createSlice({
    name: 'counterReduxToolkit',
    initialState: initialState,
    reducers: {
        actionIncrease (state, { payload = 1 }) {
            state.number += payload;
            state.savestate = 'unsaved';
        },
        actionDecrease (state, { payload = 1}) {
            state.number -= payload;
            state.savestate = 'unsaved';
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(actionAsyncSave.pending, (state, action) => {
            state.savestate = 'saving...';
        })

        builder
        .addCase(actionAsyncSave.fulfilled, (state, action) => {
            state.savestate = action.payload;
        })

        builder
        .addCase(actionAsyncSave.rejected, (state, action) => {
            state.savestate = action.payload;
        })

        builder
        .addDefaultCase((state, action) => {}) 
    }
})

export const {actionIncrease, actionDecrease } = counterReduxToolkit.actions;

export default counterReduxToolkit.reducer;
