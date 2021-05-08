import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actionIncrease, actionDecrease, actionAsyncSave } from '../../redux/counterReduxToolkit'

const CounterReduxToolkit = () => {

    const number = useSelector(state => state.counterReduxToolkitReducer.number);
    const save = useSelector(state => state.counterReduxToolkitReducer.savestate);
    const dispatch = useDispatch();

    return (
        <div>
            <h4>Counter Redux Toolkit</h4>
            <button onClick={e => dispatch(actionIncrease())}>Add</button>&nbsp;
            <button onClick={e => dispatch(actionDecrease())}>Subtract</button>&nbsp;
            <button onClick={e => dispatch(actionAsyncSave())}>Async Save</button>
            <h3>Result: <span>{number}</span> {save !== '' ? <span>{save}</span> : <span></span>}</h3>
        </div>
    )
}

export default CounterReduxToolkit;