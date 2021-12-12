import { useDispatch } from "react-redux"
import { setTaskId } from "../../../modules/redux/action/task";
import useSelectState from "../default/useSelectState";

const useTask = () => {
    const dispatch = useDispatch();
    const state = useSelectState().task;

    const setState = {
        setTaskId: (payload: number) => {
            dispatch(setTaskId(payload));
        },
    }
    return{
        state, 
        setState
    }
}

export default useTask;