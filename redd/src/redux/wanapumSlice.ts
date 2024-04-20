import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface SalmonCount {
    date: Date,
    salmon_count: number
}

const initialState: SalmonCount[] = []

export const wanCountSlice = createSlice({
    name: 'wanCount',
    initialState,
    reducers: {
        setCount: (state: SalmonCount[], action: PayloadAction<SalmonCount[]>) => {
            state = action.payload
        }
    }
})

export default wanCountSlice.reducer;

export const { setCount } = wanCountSlice.actions;

export const selectWanCount = (state: RootState) => state.wanCount