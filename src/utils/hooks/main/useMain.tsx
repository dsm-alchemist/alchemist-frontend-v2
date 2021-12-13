import { useDispatch } from "react-redux"
import { setComponent, setProfileComponent, setTaskComponent } from "../../../modules/redux/action/main";
import useSelectState from "../default/useSelectState";

const useMain = () => {
    const dispatch = useDispatch();
    const state = useSelectState().main;

    const setState = {
        setComponent: (payload: boolean) => {
            dispatch(setComponent(payload));
        },
        setTaskComponent: (payload: boolean) => {
            dispatch(setTaskComponent(payload));
        },
        setProfileComponent: (payload: boolean) => {
            dispatch(setProfileComponent(payload));
        },
    }
    return{
        state,
        setState
    }
}

export default useMain;