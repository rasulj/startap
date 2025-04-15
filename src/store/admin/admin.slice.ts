import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CourseType } from 'src/interfaces/course.interface';
import { InstructorType } from 'src/interfaces/instructor.interface';
import { UserType } from 'src/interfaces/user.interface';
import { approveInstructor, deleteInstructor } from './admin.action';
import { AdminIntialStateType } from './admin.interface';

const initialState: AdminIntialStateType = {
	isLoading: false,
	error: null,
	courses: [],
	instructors: [],
	users: [],
};

export const adminSlice = createSlice({
	name: 'admin',
	initialState,
	reducers: {
		startLoading: state => {
			state.isLoading = true;
		},
		clearAdminError: state => {
			state.error = null;
		},
		getAdminCourses: (state, action: PayloadAction<CourseType[]>) => {
			state.courses = action.payload;
		},
		getAdminInstructors: (state, action: PayloadAction<InstructorType[]>) => {
			state.instructors = action.payload;
		},
		getAdminUsers: (state, action: PayloadAction<UserType[]>) => {
			state.users = action.payload;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(approveInstructor.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(approveInstructor.fulfilled, state => {
				state.isLoading = false;
				state.error = null;
			})
			.addCase(approveInstructor.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			})
			.addCase(deleteInstructor.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(deleteInstructor.fulfilled, state => {
				state.isLoading = false;
				state.error = null;
			})
			.addCase(deleteInstructor.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			});
	},
});

export const adminReducer = adminSlice.reducer;
export const adminSliceAction = adminSlice.actions;