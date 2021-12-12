import { createAction } from "typesafe-actions";
import { SET_TODO_MODAL, SET_MORE_MODAL, SET_EDIT_MODAL, SET_PUSH_MODAL } from "./interface";

export const setTodoModal = createAction(SET_TODO_MODAL)<boolean>();
export const setMoreModal = createAction(SET_MORE_MODAL)<boolean>();
export const setEditModal = createAction(SET_EDIT_MODAL)<boolean>();
export const setPushModal = createAction(SET_PUSH_MODAL)<boolean>();


export type modalActionType =
    | ReturnType<typeof setTodoModal>
    | ReturnType<typeof setMoreModal>
    | ReturnType<typeof setEditModal>
    | ReturnType<typeof setPushModal>;