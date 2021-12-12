import { mainActionType } from "../../action/main";
import { SET_COMPONENT } from "../../action/main/interface";
import MainState from "./interface";

const initState: MainState = {
    todoRender: false
};

const MainReducer = (
    state = initState,
    action: mainActionType
) => {
    switch (action.type) {
        case SET_COMPONENT:
            return {
                ...state,
                todoRender: action.payload,
            }
        default:
            return state;
    }
}

export default MainReducer;