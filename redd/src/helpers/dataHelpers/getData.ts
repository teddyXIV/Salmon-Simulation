import axios from "axios"
import { setCount } from "../../redux/damCountSlice"
import { useDispatch, useSelector } from "react-redux"

export const getData = async () => {
    const dispatch = useDispatch()
    const damCounts = useSelector

    try {
        const dates = {
            startDate: "2023-07-01",
            endDate: "2023-07-04"
        }
        const res = await axios.get("http://127.0.0.1:8000/", { params: dates })
        setCount(res.data)
        console.log
    } catch (error) {
        console.log("Error fetching user data", error)
    }
}