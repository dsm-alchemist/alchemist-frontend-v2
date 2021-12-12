import { useDispatch } from "react-redux"
import { setDay, setToday, setTomorrow } from "../../../modules/redux/action/date";
import useSelectState from "../default/useSelectState";


const useDate = () => {
    const dispatch = useDispatch();
    const state = useSelectState().date;

    const setState = {
        setDay: (payload: number) => {
            dispatch(setDay(payload));
        },
        setTomorrow: (payload: number) => {
            dispatch(setTomorrow(payload));
        },
        setToday:  (payload: number) => {
            dispatch(setToday(payload));
        },
    }
    return{
        state,
        setState
    };
}

export default useDate;