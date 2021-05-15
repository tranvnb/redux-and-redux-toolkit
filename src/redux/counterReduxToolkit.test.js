import reducers, { actionIncrease, actionDecrease, actionAsyncSave } from './counterReduxToolkit';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { actionAsyncSaveSucceed } from './counterRedux';
import store from './store'

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

    it('called action save and failed', async () => {

        const dispatch = jest.fn().mockImplementation(action => store.dispatch(action));
        const getState = jest.fn();
        const options = undefined;
        
        
        const actionResult = await actionAsyncSave()(dispatch, getState, options);

        //For successful request
        expect(dispatch).toHaveBeenNthCalledWith(2, expect.objectContaining({payload: "save succeeded"}))

        // For failed request
        // expect(dispatch).toHaveBeenNthCalledWith(2, expect.objectContaining({payload: "save failed"}))

    })
})