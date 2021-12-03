import { createAction } from "typesafe-actions";
import { SET_DAY, SET_MONTH } from "./interface";

export const setMonth = createAction(SET_MONTH)<number>();
export const setDay = createAction(SET_DAY)<number>();

export type dateActionType =
    | ReturnType<typeof setMonth>
    | ReturnType<typeof setDay>;