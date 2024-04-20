import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface SalmonCount {
    date: Date,
    salmon_count: number
}

const initialState: SalmonCount[] = []

export const prdCountSlice = createSlice({
    name: 'prdCount',
    initialState,
    reducers: {
        setCount: (state: SalmonCount[], action: PayloadAction<SalmonCount[]>) => {
            state = action.payload
        }
    }
})

export default prdCountSlice.reducer;

export const { setCount } = prdCountSlice.actions;

export const selectPrdCount = (state: RootState) => state.prdCount