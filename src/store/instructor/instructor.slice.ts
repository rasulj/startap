import { createSlice } from "@reduxjs/toolkit";
import { InstructorIntialStateType } from "./instructor.interface";
import { applyInstructor } from "./instructor.action";


const initialState: InstructorIntialStateType = {
    isLoading: false,
	error: null,
     
};

export const instructorSlice = createSlice({
    name:'instructor',
    initialState,
    reducers:{
            clearInstroctorError: state => {
			state.error = null;
		},
    },

    extraReducers:builder=> {
        builder
       .addCase(applyInstructor.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(applyInstructor.fulfilled, (state, ) => {
				state.isLoading = false;
				state.error = null;
			})
			.addCase(applyInstructor.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			})
    },
})
export const instructorReducer = instructorSlice.reducer;
export const instructorSliceAction = instructorSlice.actions;