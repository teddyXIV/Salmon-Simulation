import { configureStore } from "@reduxjs/toolkit";
import damCountSliceReducer from "./damCountSlice"
import dateSliceReducer from "./dateSlice";


export const store = configureStore({
    reducer: {
        damCount: damCountSliceReducer,
        date: dateSliceReducer
    }
})

export type RootState = ReturnType<typeof store.getState>