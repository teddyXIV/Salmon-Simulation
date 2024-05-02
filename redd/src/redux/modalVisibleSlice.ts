import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface ModalVisible {
    visible: boolean
}


const initialState: ModalVisible = {
    visible: false
}

export const modalVisibleSlice = createSlice({
    name: 'modalVisible',
    initialState,
    reducers: {
        setVisiblity: (state: ModalVisible, action: PayloadAction<boolean>) => {
            state.visible = action.payload
        }
    }
})

export default modalVisibleSlice.reducer;
export const { setVisiblity } = modalVisibleSlice.actions;
export const selectModalVisibility = (state: RootState) => state.modalVisible.visible