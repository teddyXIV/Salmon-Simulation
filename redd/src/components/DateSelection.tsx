import { useDispatch } from "react-redux";
import { setDate } from "../redux/dateSlice";
import { useState } from "react";


const DateSelection = () => {
    const dispatch = useDispatch();
    const [newDate, setNewDate] = useState<string>("")

    const today = new Date().toISOString().slice(0, 10);

    return (

        <form onSubmit={(e) => {
            e.preventDefault();
            dispatch(setDate(newDate))
        }}>
            <div className="flex flex-row justify-center items-center">
                <input type="date"
                    id="date-select"
                    className="mx-2 h-10 rounded-md p-2"
                    min="2023-01-01"
                    max={today}
                    onChange={e => {
                        setNewDate(e.target.value)
                    }} />
                <button type="submit" className="bg-white mx-2 rounded-md border-black p-2 hover:bg-black hover:text-white">View salmon passage</button>
            </div>
        </form>

    );
};

export default DateSelection;



