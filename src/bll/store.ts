import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import { counterReducer } from "./counter-reducer";
import {settingsReducer} from "./settings-reducer";

const rootReducers = combineReducers({
    counter: counterReducer,
    settings: settingsReducer
});

export type AppStateType = ReturnType<typeof rootReducers>;

const store = createStore(rootReducers, applyMiddleware(thunk));
export default store;
