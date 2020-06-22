import {Dispatch} from "redux";
import {counterAPI} from "../dal/api";

const SET_COUNTER_VALUE = 'counter/counter-reducer/SET_COUNTER_VALUE';

const initialState = {
    value: null as number | null
};

type StateType = typeof initialState;

export const counterReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case SET_COUNTER_VALUE:
            return {
                ...state,
                value: action.value
            };
        default:
            return state;
    }
};

type ActionsType = ReturnType<typeof setCounterValue>
const setCounterValue = (value: number) => ({type: SET_COUNTER_VALUE, value} as const);

export const getCounterValue = () => async (dispatch: Dispatch, getState: any) => {
      const result = await counterAPI.getCounter();
      dispatch(setCounterValue(result.value))
};

export const updateCounterValue = (value: number) => async (dispatch: Dispatch, getState: any) => {
    const result = await counterAPI.updateCounter(value)
    dispatch(setCounterValue(value))
};







