import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    page: 1,
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        addData: (state, action) => {
            state.list = [...state.list, ...action.payload]
        },
        updatePages: (state, action) => {
            state.page = action.payload;
        }
    },
});

export const { addData, updatePages } = appSlice.actions;

export default appSlice.reducer;
