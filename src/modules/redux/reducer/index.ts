import { combineReducers } from "redux";
import DateReducer from "./date";


const rootReducer = combineReducers({
    date: DateReducer
})

export type reducerType =
    ReturnType<typeof rootReducer>;

export default rootReducer;