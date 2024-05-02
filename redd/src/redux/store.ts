import { configureStore } from "@reduxjs/toolkit";
import damCountSliceReducer from "./damCountSlice"
import dateSliceReducer from "./dateSlice";
import modalVisibleReducer from "./modalVisibleSlice";


export const store = configureStore({
    reducer: {
        damCount: damCountSliceReducer,
        date: dateSliceReducer,
        modalVisible: modalVisibleReducer
    }
})

export type RootState = ReturnType<typeof store.getState>