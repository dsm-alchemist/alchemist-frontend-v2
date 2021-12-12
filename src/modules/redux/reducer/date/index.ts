import { dateActionType } from "../../action/date";
import { SET_DAY, SET_TOMORROW } from "../../action/date/interface";
import DateState from "./interface";

const initState: DateState = {
    tdDay: (new Date().getFullYear().toString() + (new Date().getMonth() + 1).toString() + new Date().getDate().toString()),
    tmDay: 0
};

const DateReducer = (
    state = initState,
    action: dateActionType
) => {
    switch (action.type) {
        case SET_DAY:
            return {
                ...state,
                tdDay: action.payload,
            }
        case SET_TOMORROW:
            return {
                ...state,
                tmDay: action.payload
            }
        default:
            return state;
    }
}

export default DateReducer;