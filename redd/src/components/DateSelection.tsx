// import DatePicker from "react-date-picker";
// import { useDispatch, useSelector } from "react-redux";
// import { selectDate, setDate } from "../redux/dateSlice";


// const DateSelection = () => {
//     const dispatch = useDispatch();
//     const date = useSelector(selectDate)

//     const handleDateChange = (newDate: Date | null) => {
//         if (newDate) {
//             dispatch(setDate(newDate.toISOString()))
//         }
//     };

//     return <DatePicker className="bg-white" onChange={handleDateChange} value={date} />
// }

// export default DateSelection;

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
        <DatePicker
            className="bg-white"
            onChange={handleDateChange}
            value={new Date(date)}
        />
    );
};

export default DateSelection;



