import { createAction } from "typesafe-actions";
import { SET_DAY, SET_TOMORROW } from "./interface";

export const setDay = createAction(SET_DAY)<number>();
export const setTomorrow = createAction(SET_TOMORROW)<number>();

export type dateActionType =
    | ReturnType<typeof setDay>
    | ReturnType<typeof setTomorrow>;