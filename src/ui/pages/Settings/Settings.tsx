import React, { ChangeEvent } from 'react';
import styles from './Settings.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../bll/store';
import {updateMaxValue, updateStartValue} from '../../../bll/settings-reducer';


export const SettingsContainer = () => {
    const startValue = useSelector<AppStateType, number>(state => state.settings.startValue);
    const maxValue = useSelector<AppStateType, number>(state => state.settings.maxValue);
    const dispatch = useDispatch();

    const changeStartValue = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateStartValue(+event.currentTarget.value))
    };

    const changeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateMaxValue(+event.currentTarget.value))
    };

    return <Settings changeStartValue={changeStartValue} changeMaxValue={changeMaxValue}
                     startValue={startValue} maxValue={maxValue}/>
};


type SettingsPropsType = {
    startValue: number,
    maxValue: number,
    changeStartValue: (value: number) => void,
    changeMaxValue: (value: number) => void
}

const Settings: React.FC<SettingsPropsType> = ({startValue, maxValue, changeStartValue, changeMaxValue}) => {



    return(
        <div className={styles.settings}>
            <div >
                Start Value: <input type="number" onChange={changeStartValue} value={startValue}/>
            </div>
            <div>
                Max Value: <input type="number" onChange={changeMaxValue} value={maxValue}/>
            </div>
        </div>
    )
};
