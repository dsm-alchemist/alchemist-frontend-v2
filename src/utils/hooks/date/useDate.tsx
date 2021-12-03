import { useDispatch } from "react-redux"
import { setDay, setMonth } from "../../../modules/redux/action/date";
import useSelectState from "../default/useSelectState";


const useDate = () => {
    const dispatch = useDispatch();
    const state = useSelectState().date;

    const setState = {
        setMonth: (payload: number) => {
            dispatch(setMonth(payload));
        },
        
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