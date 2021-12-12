import { mainActionType } from "../../action/main";
import { SET_COMPONENT, SET_TASK_OMPONENT } from "../../action/main/interface";
import MainState from "./interface";

const initState: MainState = {
    todoRender: false,
    taskRender: false,
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
        case SET_TASK_OMPONENT:
            return {
                ...state,
                taskRender: action.payload,
            }
        default:
            return state;
    }
}

export default MainReducer;