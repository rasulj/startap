import { createAsyncThunk } from "@reduxjs/toolkit";
import { LessonBodyType } from "./lesson.interface";
import { LessonService } from "src/services/lesson.service";
import { errorCatch } from "src/helpers/api.helper";

export const createLesson = createAsyncThunk< 'Success',LessonBodyType>(
    'lesson/create',
    async (body, thunkApi) => {
        try {
            const response = await LessonService.createLesson(body);
            body.callback();
            return response;
        } catch (error) {
            return thunkApi.rejectWithValue(errorCatch(error));
        }
    }
);

export const editLesson = createAsyncThunk< 'Success',LessonBodyType>(
    'lesson/edit',
    async (body, thunkApi) => {
        try {
            const response = await LessonService.editLesson(body);
            body.callback();
            return response;
        } catch (error) {
            return thunkApi.rejectWithValue(errorCatch(error));
        }
    }
    
);
export const deleteLesson = createAsyncThunk< 'Success',LessonBodyType>(
    'lesson/delete',
    async (body, thunkApi) => {
        try {
            const response = await LessonService.deleteLesson(body);
            body.callback();
            return response;
        } catch (error) {
            return thunkApi.rejectWithValue(errorCatch(error));
        }
    }
    
);