import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name:"menu",
    initialState:{
        isOpen: false
    },
    reducers:{
        changeIsOpen(state, action){
            state.isOpen = action.payload;
        }
    }
});

export const menuActions = menuSlice.actions;
export default menuSlice;
