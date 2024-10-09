import axios from "axios"

export const getData = async (date: string) => {


    try {

        const currentDate = new Date(date);

        const startDate = new Date(currentDate.getTime() - 5 * 24 * 60 * 60 * 1000);
        const startDateString = startDate.toISOString().slice(0, 10);

        const dates = {
            startDate: startDateString,
            endDate: date
        }
        // const res = await axios.get("http://127.0.0.1:8000/", { params: dates })
        const res = await axios.get("http://3.143.9.90:8000/", { params: dates })
        return res.data
    } catch (error) {
        console.log("Error fetching data", error)

        return "No data"
    }
}