import { createAction } from "typesafe-actions";
import { SET_COMPONENT } from "./interface";

export const setComponent = createAction(SET_COMPONENT)<boolean>();

export type mainActionType =
    | ReturnType<typeof setComponent>;