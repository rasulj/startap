import { createAsyncThunk } from "@reduxjs/toolkit";
import { instructorApplyBody } from "./instructor.interface";
import { errorCatch } from "src/helpers/api.helper";
import { InstructorService } from "src/services/instructor.service";





export const applyInstructor = createAsyncThunk<'Seccess',instructorApplyBody >(
	'instructor/apply',
	async (body, thunkApi) => {
		try {
			const response = await InstructorService.applyInstructor(body)
			body.callback()
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);
