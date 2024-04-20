import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface SalmonCount {
    date: Date,
    salmon_count: number
}

const initialState: SalmonCount[] = []

export const jdaCountSlice = createSlice({
    name: 'jdaCount',
    initialState,
    reducers: {
        setCount: (state: SalmonCount[], action: PayloadAction<SalmonCount[]>) => {
            state = action.payload
        }
    }
})

export default jdaCountSlice.reducer;

export const { setCount } = jdaCountSlice.actions;

export const selectJdaCount = (state: RootState) => state.jdaCount