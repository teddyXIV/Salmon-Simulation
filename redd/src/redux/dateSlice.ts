import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface DateSelected {
    date_selected: string
}


const initialState: DateSelected = {
    date_selected: new Date().toISOString()
}

export const dateSlice = createSlice({
    name: 'date',
    initialState,
    reducers: {
        setDate: (state: DateSelected, action: PayloadAction<string>) => {
            state.date_selected = action.payload;
        }
    }
})

export default dateSlice.reducer;
export const { setDate } = dateSlice.actions;
export const selectDate = (state: RootState) => state.date.date_selected