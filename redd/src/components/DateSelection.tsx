import { useDispatch } from "react-redux";
import { setDate } from "../redux/dateSlice";
import { useState } from "react";


const DateSelection = () => {
    const dispatch = useDispatch();
    const [newDate, setNewDate] = useState<string>("")

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch(setDate(newDate))
            }}>
                <input type="date"
                    id="date-select"
                    className="mx-2 h-10 rounded-md p-2"
                    onChange={e => {
                        setNewDate(e.target.value)
                    }} />
                <button type="submit" className="bg-white rounded-md border-black p-2 hover:bg-black hover:text-white">View salmon passage</button>
            </form>
        </>
    );
};

export default DateSelection;



