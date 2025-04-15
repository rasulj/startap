import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorCatch } from 'src/helpers/api.helper';
import { AdminService } from 'src/services/admin.service';
import { AdminSearchUsersResponse, AdminUserInterfaceResponse, ApproveAndDeleteBodyResponse } from './admin.interface';
import { UserType } from 'src/interfaces/user.interface';

export const approveInstructor = createAsyncThunk<'Success', ApproveAndDeleteBodyResponse>(
	'admin/approve-instructor',
	async (body, thunkApi) => {
		try {
			const response = await AdminService.approveInstructor(body.instructorId);
			body.callback();
			return response;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);

export const deleteInstructor = createAsyncThunk<'Success', ApproveAndDeleteBodyResponse>(
	'admin/delete-instructor',
	async (body, thunkApi) => {
		try {
			const response = await AdminService.deleteInstructor(body.instructorId);
			body.callback();
			return response;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);
export const moreAdminUser = createAsyncThunk<UserType[], AdminUserInterfaceResponse>(
 	'admin/all-users',
 	async (body, thunkApi) => {
 		try {
 			const response = await AdminService.getUsers(body.limit, body.token);
 			return response;
 		} catch (error) {
 			return thunkApi.rejectWithValue(errorCatch(error));
 		}
 	}
	
 );
 export const searchAdminUsers = createAsyncThunk<UserType[], AdminSearchUsersResponse>(
 	'admin/search-users',
 	async (body, thunkApi) => {
 		try {
 			const response = await AdminService.searchUsers(body.query, body.limit);
 			return response;
 		} catch (error) {
 			return thunkApi.rejectWithValue(errorCatch(error))}})