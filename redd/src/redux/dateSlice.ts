import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface DateSelected {
    date_selected: string
}


const initialState: DateSelected = {
    date_selected: "2023-07-06"
}

export const dateSlice = createSlice({
    name: 'date',
    initialState,
    reducers: {
        setDate: (state: DateSelected, action: PayloadAction<string>) => {
            const isoString = action.payload;
            state.date_selected = isoString.substring(0, 10);
        }
    }
})

export default dateSlice.reducer;
export const { setDate } = dateSlice.actions;
export const selectDate = (state: RootState) => state.date.date_selected