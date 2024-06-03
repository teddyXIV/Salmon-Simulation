import { useDispatch, useSelector } from "react-redux";
import { changeDate, selectDate } from "../redux/dateSlice";
import { useState } from "react";


const DateSelection = () => {
    const dispatch = useDispatch();
    const date = useSelector(selectDate);
    const [newDate, setNewDate] = useState<string>("")

    const today = new Date().toISOString().slice(0, 10);

    return (

        <form onSubmit={(e) => {
            e.preventDefault();
            dispatch(changeDate(newDate))
        }}>
            <div className="flex flex-row justify-center items-center">
                <input type="date"
                    id="date-select"
                    className="mx-2 h-10 rounded-md p-2"
                    min="2023-04-27"
                    max={today}
                    onChange={e => {
                        setNewDate(e.target.value)
                    }} 
                    value={date}/>
                <button type="submit" className="bg-white mx-2 rounded-md border-black p-2 hover:bg-black hover:text-white">View salmon passage</button>
            </div>
        </form>

    );
};

export default DateSelection;



