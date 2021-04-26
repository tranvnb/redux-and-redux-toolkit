import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actionIncrease, actionDecrease } from '../../redux/counterRedux'

const CounterRedux = () => {

    const number = useSelector(state => state.counterReducer.number);
    const dispatch = useDispatch();

    return (
        <div>
            <h4>Counter Redux</h4>
            <button onClick={e => dispatch(actionIncrease())}>Add</button>&nbsp;
            <button onClick={e => dispatch(actionDecrease())}>Subtract</button>
            <h3>Result: <span>{number}</span></h3>
        </div>
    )
}

export default CounterRedux;