import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actionIncrease, actionDecrease } from '../../redux/store'

const CounterRedux = (props) => {

    const number = useSelector(state => state.number);
    const dispatch = useDispatch();

    return (
        <div>
            <h4>Counter Redux</h4>
            <button onClick={e => dispatch(actionIncrease())}>Add</button>
            <button onClick={}>Subtract</button>
            <h3>Total<span>{number}</span></h3>
        </div>
    )
}

export default CounterRedux;