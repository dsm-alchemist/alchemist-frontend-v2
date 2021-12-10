import { createAction } from "typesafe-actions";
import { SET_TODO_MODAL, SET_MORE_MODAL } from "./interface";

export const setTodoModal = createAction(SET_TODO_MODAL)<boolean>();
export const setMoreModal = createAction(SET_MORE_MODAL)<boolean>();


export type modalActionType =
    | ReturnType<typeof setTodoModal>
    | ReturnType<typeof setMoreModal>;