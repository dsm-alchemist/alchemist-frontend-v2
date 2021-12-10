import { useDispatch } from "react-redux";
import { setTodoModal, setMoreModal } from "../../../modules/redux/action/modal";
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
    }
    return {
        state, 
        setState
    }
}

export default useModal;