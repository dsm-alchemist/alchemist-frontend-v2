import { useDispatch } from "react-redux";
import { setTodoModal, setMoreModal, setEditModal, setPushModal, setTaskModal } from "../../../modules/redux/action/modal";
import useSelectState from "../default/useSelectState";

const useModal = () => {
    const dispatch = useDispatch();
    const state = useSelectState().modal;

    const setState= {
        setTodoModal: (payload: boolean) => {
            dispatch(setTodoModal(payload));
        },
        setMoreModal:(payload: boolean) => {
            dispatch(setMoreModal(payload));
        },
        setEditModal:(payload: boolean) => {
            dispatch(setEditModal(payload));
        },
        setPushModal:(payload: boolean) => {
            dispatch(setPushModal(payload));
        },
        setTaskModal: (payload: boolean) => {
            dispatch(setTaskModal(payload))
        }
    }
    return {
        state, 
        setState
    }
}

export default useModal;