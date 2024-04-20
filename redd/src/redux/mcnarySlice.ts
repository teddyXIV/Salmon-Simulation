import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface SalmonCount {
    date: Date,
    salmon_count: number
}

const initialState: SalmonCount[] = []

export const mcnCountSlice = createSlice({
    name: 'mcnCount',
    initialState,
    reducers: {
        setCount: (state: SalmonCount[], action: PayloadAction<SalmonCount[]>) => {
            state = action.payload
        }
    }
})

export default mcnCountSlice.reducer;

export const { setCount } = mcnCountSlice.actions;

export const selectMcnCount = (state: RootState) => state.mcnCount