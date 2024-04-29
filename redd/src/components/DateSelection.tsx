import DatePicker from "react-date-picker";
import { useDispatch, useSelector } from "react-redux";
import { selectDate, setDate } from "../redux/dateSlice";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const DateSelection = () => {
    const dispatch = useDispatch();
    const date = useSelector(selectDate);

    const handleDateChange = (newDate: Value) => {
        if (newDate instanceof Date) {
            dispatch(setDate(newDate.toISOString()));
        }
    };

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                setDate(date)
            }}>
                <input type="date" id="date-select" />
                <input type="submit" />
            </form>
            {/* <DatePicker
                className="bg-white w-28"
                onChange={handleDateChange}
                value={new Date(date)}
            /> */}
        </>
    );
};

export default DateSelection;



