import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface DamCounts {
    bon: SalmonCount[],
    tda: SalmonCount[],
    jda: SalmonCount[],
    mcn: SalmonCount[],
    prd: SalmonCount[],
    wan: SalmonCount[],
    ris: SalmonCount[],
    rrh: SalmonCount[],
    wel: SalmonCount[],
}

interface SalmonCount {
    date: Date,
    salmon_count: number
}

interface DamUpdate {
    dam: number,
    data: SalmonCount
}

const initialState: DamCounts = {
    bon: [],
    tda: [],
    jda: [],
    mcn: [],
    prd: [],
    wan: [],
    ris: [],
    rrh: [],
    wel: []
}

export const damCountSlice = createSlice({
    name: 'damCount',
    initialState,
    reducers: {
        setCount: (state: DamCounts, action: PayloadAction<DamUpdate>) => {
            const countData = action.payload
            switch (action.payload.dam) {
                case 1:
                    state.bon.push(countData.data);
                    break;
                case 2:
                    state.tda.push(countData.data);
                    break;
                case 3:
                    state.jda.push(countData.data);
                    break;
                case 4:
                    state.mcn.push(countData.data)
                    break;
                case 5:
                    state.prd.push(countData.data)
                    break;
                case 6:
                    state.wan.push(countData.data)
                    break;
                case 7:
                    state.ris.push(countData.data)
                    break;
                case 8:
                    state.rrh.push(countData.data)
                    break;
                default:
                    state.wel.push(countData.data)
                    break;
            }

        },
        clearData: (state: DamCounts) => {
            state.bon = [];
            state.tda = [];
            state.jda = [];
            state.mcn = [];
            state.prd = [];
            state.wan = [];
            state.ris = [];
            state.rrh = [];
            state.wel = [];
        }
    }
})

export default damCountSlice.reducer;

export const { setCount, clearData } = damCountSlice.actions;

export const selectDamCount = (state: RootState) => state.damCount
