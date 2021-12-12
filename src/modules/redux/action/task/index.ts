import { createAction } from "typesafe-actions/";
import { SET_TASK_ID } from "./interface";

export const setTaskId = createAction(SET_TASK_ID)<number>();

export type taskActionType =
    | ReturnType<typeof setTaskId>;