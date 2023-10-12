import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        addData: (state, action) => {
            state.list = [...state.list, ...action.payload]
        }
    },
});

export const {addData} = appSlice.actions;

export default appSlice.reducer;
