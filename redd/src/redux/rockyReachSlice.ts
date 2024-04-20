import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface SalmonCount {
    date: Date,
    salmon_count: number
}

const initialState: SalmonCount[] = []

export const rrhCountSlice = createSlice({
    name: 'rrhCount',
    initialState,
    reducers: {
        setCount: (state: SalmonCount[], action: PayloadAction<SalmonCount[]>) => {
            state = action.payload
        }
    }
})

export default rrhCountSlice.reducer;

export const { setCount } = rrhCountSlice.actions;

export const selectRrhCount = (state: RootState) => state.rrhCount