import { createSlice } from "@reduxjs/toolkit";
import { UserinitialStateType } from "./user.interface";


const initialState:UserinitialStateType = {
  user: null,
  isLoding:false
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers:(builder)=> {
        
    },
})
export const {reducer} = userSlice