import { configureStore } from "@reduxjs/toolkit";
import bonCountSliceReducer from "./bonnevilleSlice"
import tdaCountSliceReducer from "./theDallesSlice";
import jdaCountSliceReducer from "./johnDaySlice";
import mcnCountSliceReducer from "./mcnarySlice";
import prdCountSliceReducer from "./priestRapidsSlice";
import wanCountSliceReducer from "./wanapumSlice";
import risCountSliceReducer from "./rockIslandSlice";
import rrhCountSliceReducer from "./rockyReachSlice";
import welCountSliceReducer from "./wellsSlice"


export const store = configureStore({
    reducer: {
        bonCount: bonCountSliceReducer,
        tdaCount: tdaCountSliceReducer,
        jdaCount: jdaCountSliceReducer,
        mcnCount: mcnCountSliceReducer,
        prdCount: prdCountSliceReducer,
        wanCount: wanCountSliceReducer,
        risCount: risCountSliceReducer,
        rrhCount: rrhCountSliceReducer,
        welCount: welCountSliceReducer
    }
})

export type RootState = ReturnType<typeof store.getState>