import axios from "axios"

export const getData = async (date: string) => {


    try {
        const dates = {
            startDate: "2023-07-01",
            endDate: "2023-07-30"
        }
        const res = await axios.get("http://127.0.0.1:8000/", { params: dates })
        return res.data
    } catch (error) {
        console.log("Error fetching user data", error)
    }
}