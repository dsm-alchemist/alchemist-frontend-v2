import { dateActionType } from "../../action/date";
import { SET_DAY, SET_TODAY, SET_TOMORROW } from "../../action/date/interface";
import DateState from "./interface";

const todayYear = new Date().getFullYear().toString();
const todayMonth = (new Date().getMonth() + 1).toString().length === 1 ? "0" + (new Date().getMonth() + 1).toString() : (new Date().getMonth() + 1).toString();
const todayDate = new Date().getDate().toString().length === 1 ? "0" + new Date().getDate().toString() : new Date().getDate().toString();

const initState: DateState = {
    tdDay: (todayYear + todayMonth + todayDate),
    tmDay: (todayYear + todayMonth + (new Date().getDate() + 1).toString()),
    today: 0
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
        case SET_TODAY:
            return {
                ...state,
                today: action.payload
            }
        default:
            return state;
    }
}

export default DateReducer;