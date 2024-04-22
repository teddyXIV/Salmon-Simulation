import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import type { AllCounts, DamCounts, SalmonCount, DamUpdate } from "../damCountTypes"

const initialState: AllCounts = {
    allCounts: {
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
}

export const damCountSlice = createSlice({
    name: 'damCount',
    initialState,
    reducers: {
        setCount: (state: AllCounts, action: PayloadAction<DamUpdate[]>) => {

            action.payload.forEach(el => {
                const storeData: SalmonCount = {
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

                const damKey = damMap[el.dam];
                state.allCounts[damKey].push(storeData)
            });
        },
        clearData: (state: AllCounts) => {
            state.allCounts.bon = [];
            state.allCounts.tda = [];
            state.allCounts.jda = [];
            state.allCounts.mcn = [];
            state.allCounts.prd = [];
            state.allCounts.wan = [];
            state.allCounts.ris = [];
            state.allCounts.rrh = [];
            state.allCounts.wel = [];
        }
    }
})

export default damCountSlice.reducer;

export const { setCount, clearData } = damCountSlice.actions;

export const selectDamCounts = (state: RootState) => state.damCount.allCounts
