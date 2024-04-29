import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import DatePicker from "./components/DatePicker"

import './App.css'
import RiverMap from './components/RiverMap'

function App() {

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <RiverMap />
        <DatePicker />
      </LocalizationProvider>
    </>
  )
}

export default App