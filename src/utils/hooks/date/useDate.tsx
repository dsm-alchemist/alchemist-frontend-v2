import { useDispatch } from "react-redux"
import { setDay } from "../../../modules/redux/action/date";
import useSelectState from "../default/useSelectState";


const useDate = () => {
    const dispatch = useDispatch();
    const state = useSelectState().date;

    const setState = {
        setDay: (payload: number) => {
            dispatch(setDay(payload));
        },
    }

    return{
        state,
        setState
    };
}

export default useDate;