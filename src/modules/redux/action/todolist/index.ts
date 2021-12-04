import { createAction } from "typesafe-actions";
import { TodoItem } from "../../reducer/todolist/interface";
import { SUBMIT, REMOVE, PUSH, PULL } from "./interface";

export const submit = createAction(SUBMIT)<TodoItem>();
export const remove = createAction(REMOVE)<number>();
export const push = createAction(PUSH)<number>();
export const pull = createAction(PULL)<number>();

export type todoActionType =
    | ReturnType<typeof submit>
    | ReturnType<typeof remove>
    | ReturnType<typeof push>
    | ReturnType<typeof pull>;
