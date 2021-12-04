import { TodoState } from "./interface";
import { todoActionType } from "../../action/todolist";
import { PULL, PUSH, REMOVE, SUBMIT } from "../../action/todolist/interface";

const initState: TodoState = {
    todoItems: [],
}

const TodoReducer = (
    state: TodoState = initState,
    action: todoActionType
): TodoState => {
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
                todoItems: state.
            }
        case PULL:
            return {
                ...state,
                todoItems: 
            };
    }
}