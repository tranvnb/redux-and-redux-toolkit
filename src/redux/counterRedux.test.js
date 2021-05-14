import reducers, { actionIncrease, actionDecrease, actionSave, actionAsyncSaveStarted, actionAsyncSaveFail } from './counterRedux';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

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

describe('testing asynchronous saving', () => {
    const middlewares = [thunk]
    const mockStore = configureMockStore(middlewares)

    const initialState = {number: 12, savestate: 'unsaved'}
    const store = mockStore(initialState)

    it('called action save and failed', async () => {

        //consequent actions
        const expectedActions = [actionAsyncSaveStarted("saving..."), actionAsyncSaveFail('save failed')]

        await store.dispatch(actionSave());

        expect(store.getActions()).toEqual(expectedActions);
    })
})