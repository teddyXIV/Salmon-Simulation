import { useDispatch, useSelector } from "react-redux";
import { changeDate, selectDate } from "../redux/dateSlice";

const DateNav = () => {
    const dispatch = useDispatch();
    const date = useSelector(selectDate);

    const prevDay = () => {
        const currentDate = new Date(date)
        currentDate.setDate(currentDate.getDate() - 1);

        const prevDate = currentDate.toISOString().slice(0, 10);
        
        dispatch(changeDate(prevDate));
        console.log(date)
    }

    const nextDay = () => {
        const currentDate = new Date(date)
        currentDate.setDate(currentDate.getDate() + 1);

        const nextDate = currentDate.toISOString().slice(0, 10);
        
        dispatch(changeDate(nextDate));
        console.log(date)
    }

    return (
        <div className="flex flex-row justify-center items-center mt-4">
            <button
                className="bg-white mx-2 rounded-md border-black p-2 hover:bg-black hover:text-white"
                onClick={prevDay}
            >
                Previous day
            </button>
            <button
                className="bg-white mx-2 rounded-md border-black p-2 hover:bg-black hover:text-white"
                onClick={nextDay}
            >
                    Next day
            </button>
        </div>
    )
}

export default DateNav