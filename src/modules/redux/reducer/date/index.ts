import { dateActionType } from "../../action/date";
import { SET_DAY } from "../../action/date/interface";
import DateState from "./interface";

const initState: DateState = {
    tdDay: (new Date().getMonth() + 1).toString() + new Date().getDate().toString(),
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
        default:
            return state;
    }
}

export default DateReducer;