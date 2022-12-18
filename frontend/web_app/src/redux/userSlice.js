import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        idNo:null,
        password:null,
        isloggedin:false,
    },
    reducers:{
        login:(state,action)=>{
            //state.user=action.payload;
            state.idNo=action.payload.idNo;
            state.password=action.payload.password;
            state.isloggedin=action.payload.isloggedin;
        },
    },
});

export const {login}= userSlice.actions;
export default userSlice.reducer;