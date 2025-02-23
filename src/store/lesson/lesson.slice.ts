import { createSlice } from "@reduxjs/toolkit";
import { createLesson, deleteLesson, editLesson } from "./lesson.action";
import { LessonInitialStateType } from "./lesson.interface";

const initialState: LessonInitialStateType = {
    isLoading: false,
    error: null,
    
};
export const lessonSlice = createSlice({
    name: 'lesson',
    initialState,
    reducers: {
       clearSectionError: state => {
            state.error = null;
        },
    },

});

export const lessonReducer = lessonSlice.reducer;
export const lessonSliceAction = lessonSlice.actions;