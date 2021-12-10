import ModalState from "./interface";
import { modalActionType } from "../../action/modal";
import { SET_TODO_MODAL, SET_MORE_MODAL } from "../../action/modal/interface";


const initState: ModalState = {
    todoModalState: false,
    moreModalState: false,
};

const ModalReducer = (
    state = initState,
    action: modalActionType
) => {
    switch (action.type) {
        case SET_TODO_MODAL:
            return {
                ...state,
                todoModalState: action.payload,
            }
        case SET_MORE_MODAL:
            return {
                ...state,
                moreModalState: action.payload
            }
        default:
            return state;
    }
}

export default ModalReducer;