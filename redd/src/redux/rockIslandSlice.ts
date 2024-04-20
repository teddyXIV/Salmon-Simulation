import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface SalmonCount {
    date: Date,
    salmon_count: number
}

const initialState: SalmonCount[] = []

export const risCountSlice = createSlice({
    name: 'risCount',
    initialState,
    reducers: {
        setCount: (state: SalmonCount[], action: PayloadAction<SalmonCount[]>) => {
            state = action.payload
        }
    }
})

export default risCountSlice.reducer;

export const { setCount } = risCountSlice.actions;

export const selectRisCount = (state: RootState) => state.risCount