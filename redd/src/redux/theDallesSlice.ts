import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface SalmonCount {
    date: Date,
    salmon_count: number
}

const initialState: SalmonCount[] = []

export const tdaCountSlice = createSlice({
    name: 'tdaCount',
    initialState,
    reducers: {
        setCount: (state: SalmonCount[], action: PayloadAction<SalmonCount[]>) => {
            state = action.payload
        }
    }
})

export default tdaCountSlice.reducer;

export const { setCount } = tdaCountSlice.actions;

export const selectTdaCount = (state: RootState) => state.tdaCount