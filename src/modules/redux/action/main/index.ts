import { createAction } from "typesafe-actions";
import { SET_COMPONENT, SET_MYPAGE_COMPONENT, SET_PROFILE_COMPONENT, SET_STORAGE_COMPONENT, SET_TASK_OMPONENT } from "./interface";

export const setComponent = createAction(SET_COMPONENT)<boolean>();
export const setTaskComponent = createAction(SET_TASK_OMPONENT)<boolean>();
export const setProfileComponent = createAction(SET_PROFILE_COMPONENT)<boolean>();
export const setMypageComponent = createAction(SET_MYPAGE_COMPONENT)<boolean>();
export const setStorageComponent = createAction(SET_STORAGE_COMPONENT)<boolean>();

export type mainActionType =
    | ReturnType<typeof setComponent>
    | ReturnType<typeof setTaskComponent>
    | ReturnType<typeof setProfileComponent>
    | ReturnType<typeof setMypageComponent>
    | ReturnType<typeof setStorageComponent>;