import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actionIncrease, actionDecrease, actionSave } from '../../redux/counterRedux'

const CounterRedux = () => {

    const number = useSelector(state => state.counterReducer.number);
    const save = useSelector(state => state.counterReducer.savestate);
    const dispatch = useDispatch();

    return (
        <div>
            <h4>Counter Redux</h4>
            <button onClick={e => dispatch(actionIncrease())}>Add</button>&nbsp;
            <button onClick={e => dispatch(actionDecrease())}>Subtract</button>&nbsp;
            <button onClick={e => dispatch(actionSave())}>Async Save</button>
            <h3>Result: <span>{number}</span> {save !== '' ? <span>{save}</span> : <span></span>}</h3>
        </div>
    )
}

export default CounterRedux;