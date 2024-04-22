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
    date: string,
    salmon_count: number
}

interface DamUpdate {
    date: string,
    count: number,
    dam_id: number
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
        setCount: (state: DamCounts, action: PayloadAction<DamUpdate[]>) => {

            action.payload.forEach(el => {
                const storeData = {
                    date: el.date,
                    salmon_count: el.count,
                }

                const damMap: Record<number, keyof DamCounts> = {
                    1: 'bon',
                    2: 'tda',
                    3: 'jda',
                    4: 'mcn',
                    5: 'prd',
                    6: 'wan',
                    7: 'ris',
                    8: 'rrh',
                    9: 'wel'
                }

                const damKey = damMap[el.dam_id];
                state[damKey].push(storeData)
            });
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
