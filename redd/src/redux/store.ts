import { configureStore } from "@reduxjs/toolkit";
import damCountSliceReducer from "./damCountSlice"


export const store = configureStore({
    reducer: {
        damCount: damCountSliceReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>