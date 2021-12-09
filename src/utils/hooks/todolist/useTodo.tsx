import { useDispatch } from "react-redux";
import {submit, remove, push, pull, done, unDone} from "../../../modules/redux/action/todolist";
import { TodoItem } from "../../../modules/redux/reducer/todolist/interface";
import useSelectState from "../default/useSelectState";


const useTodo = () => {
    const dispatch = useDispatch();
    const state = useSelectState();

    const setState ={
        submit: (payload: TodoItem) => {
            dispatch(submit(payload));
        },

        remove: (payload: number) => {
            dispatch(remove(payload));
        },

        push: (payload: number) => {
            dispatch(push(payload));
        },

        pull: (payload: number) => {
            dispatch(pull(payload));
        },
        done: (payload: number) => {
            dispatch(done(payload));
        },
        unDone: (payload: number) => {
            dispatch(unDone(payload));
        }
    }

    return {
        state,
        setState
    };
}

export default useTodo;