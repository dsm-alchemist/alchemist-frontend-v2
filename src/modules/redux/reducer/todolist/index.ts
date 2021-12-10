import { TodoState } from "./interface";
import { done, todoActionType } from "../../action/todolist";
import { DONE, PULL, PUSH, REMOVE, SUBMIT, UNDONE } from "../../action/todolist/interface";

const initState: TodoState = {
    todoItems: [],
}

const TodoReducer = (
    state = initState,
    action: todoActionType
) => {
    switch (action.type) {
        case SUBMIT:
            return {
                ...state,
                todoItems: [...state.todoItems, action.payload],
            }
        case REMOVE:
            return {
                ...state,
                todoItems: state.todoItems.filter(
                    (todo: { id: number }) => todo.id !== action.payload
                ),
            }
        case PUSH:
            return {
                ...state,
                todoItems: state.todoItems.map((item) => item.id === action.payload ? { ...item, date: item.date } : item)
            }
        case PULL:
            return {
                ...state,
                todoItems: state.todoItems.map((item) => item.id === action.payload ? { ...item, date: item.date } : item)
            }
        case DONE:
            return {
                ...state,
                todoItems: state.todoItems.map((item) => item.id === action.payload ? { ...item, done: true } : item)
            }
        case UNDONE:
            return {
                ...state,
                todoItems: state.todoItems.map((item) => item.id === action.payload ? { ...item, done: false } : item)
            }
        default:
            return state
    }
}

export default TodoReducer;