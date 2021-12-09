import { combineReducers } from "redux";
import DateReducer from "./date";
import ModalReducer from "./modal";
import TodoReducer from "./todolist";


const rootReducer = combineReducers({
    date: DateReducer,
    todo: TodoReducer,
    modal: ModalReducer,
})

export type reducerType =
    ReturnType<typeof rootReducer>;

export default rootReducer;