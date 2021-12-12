import ModalState from "./interface";
import { modalActionType } from "../../action/modal";
import { SET_TODO_MODAL, SET_MORE_MODAL, SET_EDIT_MODAL, SET_PUSH_MODAL } from "../../action/modal/interface";


const initState: ModalState = {
    todoModalState: false,
    moreModalState: false,
    editModalState: false,
    pushModalState: false,
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
        case SET_EDIT_MODAL:
            return {
                ...state,
                editModalState: action.payload
            }
        case SET_PUSH_MODAL:
            return {
                ...state,
                pushModalState: action.payload
            }
        default:
            return state;
    }
}

export default ModalReducer;