const SET_COUNTER_SETTINGS = 'counter/counter-settings/SET_COUNTER_SETTINGS';
const initialState = {
    startValue: null as number | null,
    maxValue: null as number | null
};

type StateType = typeof initialState;

export const settingsReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case SET_COUNTER_SETTINGS:
            return {
                ...state,
                startValue: action.startValue,
                maxValue: action.maxValue
            };
        default:
            return state
    }
};

type ActionsType = ReturnType<typeof setCounterSettings>
const setCounterSettings = (startValue: number, maxValue: number) => {
    return {type: SET_COUNTER_SETTINGS, startValue, maxValue} as const
};

