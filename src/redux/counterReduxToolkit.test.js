import reducers, { actionIncrease, actionDecrease, actionAsyncSave } from './counterReduxToolkit';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { actionAsyncSaveSucceed } from './counterRedux';

describe('testing state changes', () => {

    const initialState = {number: 0, savestate: ''}

    beforeAll(() => {})

    afterAll(() => {})

    it('increases 1 with no arguments', () => {
        //Arrange
        
        const expectedState = {number: 1, savestate: 'unsaved'};

        //Act
        const state = reducers(initialState, actionIncrease());

        //Assert
        expect(state).toEqual(expectedState);
    });

    it('decreases 1 with no arguments', () => {
        //Arrange
        const expectedState = {number: -1, savestate: 'unsaved'};

        //Act
        const state = reducers(initialState, actionDecrease());

        //Assert
        expect(state).toEqual(expectedState);
    });

    it('increases according to argument', () => {
        //Arrange
        const expectedState = {number: 2, savestate: 'unsaved'};

        //Act
        const state = reducers(initialState, actionIncrease(2));

        //Assert
        expect(state).toEqual(expectedState);
    })

    it('decreases according to argument', () => {
        //Arrange
        const expectedState = {number: -2, savestate: 'unsaved'};

        //Act
        const state = reducers(initialState, actionDecrease(2));

        //Assert
        expect(state).toEqual(expectedState);
    })
})

describe('testing actionAsyncSave created by createAsyncThunk', () => {
    // const middlewares = [thunk]
    // const mockStore = configureMockStore(middlewares)

    // const initialState = {number: 12, savestate: 'unsaved'}
    // const store = mockStore(initialState)

    it('called action save and failed', async () => {

        const dispatch = jest.fn();
        const getState = jest.fn();
        const options = undefined;
        const arg = "save succeeded";
        
        
        // {"meta": {"arg": undefined, "requestId": "6U5BSgkwf6RqARu9v_Knk", "requestStatus": "pending"}, "payload": undefined, "type": "counter/asyncSave/pending"}
        const actionResult = await actionAsyncSave()(dispatch, getState, options);

        const expectedActions = [
            actionAsyncSave.pending(actionResult.meta.requestId),
            actionAsyncSave.fulfilled(actionResult.payload, actionResult.meta.requestId)
        ]

        // begin with 1 not 0
        expect(dispatch).toHaveBeenNthCalledWith(1, expectedActions[0])

        expect(dispatch).toHaveBeenNthCalledWith(2, expectedActions[1])
    })
})