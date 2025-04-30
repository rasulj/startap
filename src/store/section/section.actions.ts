import { createAsyncThunk } from "@reduxjs/toolkit";
import { SectionBodyType } from "./section.interface";
import { SectionService } from "src/services/section.service";
import { errorCatch } from "src/helpers/api.helper";
import { SectionType } from "src/interfaces/instructor.interface";


export const createSection = createAsyncThunk< SectionType[],SectionBodyType>(
    'section/create',
    async (body, thunkApi) => {
        try {
            const response = await SectionService.creatSection(body);
            body.callback();
            return response;
        } catch (error) {
            return thunkApi.rejectWithValue(errorCatch(error));
        }
    }
);

export const getSection = createAsyncThunk< SectionType[],SectionBodyType>(
    'section/get',
    async (body, thunkApi) => {
        try {
            const response = await SectionService.getSection(body);
            body.callback();
            return response;
        } catch (error) {
            return thunkApi.rejectWithValue(errorCatch(error));
        }
    }
);
export const editSection = createAsyncThunk< SectionType,SectionBodyType>(
    'section/edit',
    async (body, thunkApi) => {
        try {
            const response = await SectionService.editSection(body);
            body.callback();
            return response;
        } catch (error) {
            return thunkApi.rejectWithValue(errorCatch(error));
        }
    }
    
);
export const deleteSection = createAsyncThunk< SectionType[],SectionBodyType>(
    'section/delite',
    async (body, thunkApi) => {
        try {
            const response = await SectionService.deleteSection(body);
            body.callback();
            return response;
        } catch (error) {
            return thunkApi.rejectWithValue(errorCatch(error));
        }
    }
    
);
export const dragSection = createAsyncThunk<SectionType[], SectionBodyType>(
	'section/drag',
	async (body, thunkApi) => {
		try {
			const response = await SectionService.dragSection(body);
			body.callback();
			return response;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);