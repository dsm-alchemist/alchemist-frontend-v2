import { createAction } from "typesafe-actions";
import { SET_DAY } from "./interface";

export const setDay = createAction(SET_DAY)<number>();

export type dateActionType =
    | ReturnType<typeof setDay>;