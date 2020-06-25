import {Dispatch} from 'redux';
import {counterAPI} from '../dal/api';

const SET_START_VALUE = 'counter/counter-settings/SET_START_VALUE';
const SET_MAX_VALUE = 'counter/counter-settings/SET_MAX_VALUE';

const initialState = {
    startValue: 0,
    maxValue: 12
};

type StateType = typeof initialState;

export const settingsReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case SET_START_VALUE:
            return {
                ...state,
                startValue: action.startValue
            };
        case SET_MAX_VALUE:
            return {
                ...state,
                maxValue: action.maxValue
            };
        default:
            return state
    }
};

type ActionsType = ReturnType<typeof setStartValue> | ReturnType<typeof setMaxValue>

const setStartValue= (startValue: number) => ({type: SET_START_VALUE, startValue} as const);
const setMaxValue= (maxValue: number) => ({type: SET_MAX_VALUE, maxValue} as const);

export const getCounterSettings = () => async (dispatch: Dispatch) => {
    const result = await counterAPI.getCounterSettings();
    dispatch(setStartValue(result.startValue));
    dispatch(setMaxValue(result.maxValue));
};

export const updateStartValue = (newValue: number) => (dispatch: Dispatch) => {
    const result = counterAPI.updateStartValue(newValue);
    dispatch(setStartValue(newValue));
};

export const updateMaxValue = (newValue: number) => (dispatch: Dispatch) => {
    const result = counterAPI.updateMaxValue(newValue);
    dispatch(setMaxValue(newValue));
};

