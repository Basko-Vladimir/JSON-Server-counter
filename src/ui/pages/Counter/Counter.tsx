import React, {useEffect} from 'react';
import styles from './Counter.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../bll/store';
import {getCounterValue, updateCounterValue} from '../../../bll/counter-reducer';

export const Counter  = () => {
    const value = useSelector<AppStateType, number>((state) => state.counter.counter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCounterValue())
    }, []);

    const onIncrement = () => {
        dispatch(updateCounterValue(value + 1))
    };

    const onReset= () => {
        dispatch(updateCounterValue(0))
    };
    return (

        <div className={styles.counter}>
            <p>{value}</p>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
};

