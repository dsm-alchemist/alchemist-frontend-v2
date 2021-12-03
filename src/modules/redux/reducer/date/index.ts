import { dateActionType } from "../../action/date";
import { SET_DAY, SET_MONTH } from "../../action/date/interface";
import DateState from "./interface";

const initState: DateState = {
    tdMonth: new Date().getMonth(),
    tdDay: new Date().getDate(),
};

const DateReducer = (
    state: DateState = initState,
    action: dateActionType
): DateState => {
    switch (action.type) {
        case SET_MONTH:
            return {
                ...state,
                tdMonth: action.payload,
            }
        case SET_DAY:
            return {
                ...state,
                tdDay: action.payload,
            }
        default:
            return state;
    }
}

export default DateReducer;