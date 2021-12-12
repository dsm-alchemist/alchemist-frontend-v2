import { combineReducers } from "redux";
import DateReducer from "./date";
import MainReducer from "./main";
import ModalReducer from "./modal";
import TaskReducer from "./task";
import TodoReducer from "./todolist";


const rootReducer = combineReducers({
    date: DateReducer,
    todo: TodoReducer,
    modal: ModalReducer,
    main: MainReducer,
    task: TaskReducer
})

export type reducerType =
    ReturnType<typeof rootReducer>;

export default rootReducer;