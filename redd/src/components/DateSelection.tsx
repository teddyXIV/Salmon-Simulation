import DatePicker from "react-date-picker";
import { useDispatch, useSelector } from "react-redux";
import { selectDate, setDate } from "../redux/dateSlice";


const DateSelection = () => {
    const dispatch = useDispatch();
    const date = useSelector(selectDate)

    return <DatePicker onChange={() => dispatch(setDate(date))} value={date} />
}

export default DateSelection;