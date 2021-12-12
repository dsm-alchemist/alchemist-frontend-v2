import { useDispatch } from "react-redux"
import { setDay, setTomorrow } from "../../../modules/redux/action/date";
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
        }
    }

    return{
        state,
        setState
    };
}

export default useDate;