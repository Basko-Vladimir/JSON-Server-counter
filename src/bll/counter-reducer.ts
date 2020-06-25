import {Dispatch} from "redux";
import {counterAPI} from "../dal/api";

const SET_COUNTER_VALUE = 'counter/counter-reducer/SET_COUNTER_VALUE';

const initialState = {
    counter: 0
};

type StateType = typeof initialState;

export const counterReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case SET_COUNTER_VALUE:
            return {
                ...state,
                counter: action.value
            };
        default:
            return state;
    }
};

type ActionsType = ReturnType<typeof setCounterValue>
const setCounterValue = (value: number) => ({type: SET_COUNTER_VALUE, value: value} as const);

export const getCounterValue = () => async (dispatch: Dispatch) => {
      const result = await counterAPI.getCounter();
      dispatch(setCounterValue(result.counter))
};

export const updateCounterValue = (value: number) => async (dispatch: Dispatch) => {
    const result = await counterAPI.updateCounter(value);
    dispatch(setCounterValue(value))
};







