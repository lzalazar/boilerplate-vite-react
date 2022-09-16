import { Drawer } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

const EmptyDrawerState: Drawer = {
    open: false
}

export const drawerSlice = createSlice({
    name: "drawer",
    initialState: EmptyDrawerState,
    reducers: {
        toggleDrawer: (state) => ({ ...state, open: !state.open })
    }

})

export const { toggleDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;