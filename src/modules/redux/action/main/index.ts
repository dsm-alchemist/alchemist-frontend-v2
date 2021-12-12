import { createAction } from "typesafe-actions";
import { SET_COMPONENT, SET_TASK_OMPONENT } from "./interface";

export const setComponent = createAction(SET_COMPONENT)<boolean>();
export const setTaskComponent = createAction(SET_TASK_OMPONENT)<boolean>();

export type mainActionType =
    | ReturnType<typeof setComponent>
    | ReturnType<typeof setTaskComponent>;