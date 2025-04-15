import axios from 'axios';
import $axios from "src/api/axios"
 import { API_URL, getAdminUrl, getCourseUrl, getUserUrl } from 'src/config/api.config';
 import { CourseType } from 'src/interfaces/course.interface';
import { UserType } from 'src/interfaces/user.interface';
 
 export const AdminService = {
 	async getAllCourses() {
 		const { data } = await axios.get<CourseType[]>(
 			`${API_URL}${getCourseUrl('admin-all-courses')}`
 		);
 
 		return data;
 	},
	async getAllInstructors(token?:string){
		const {data} = await axios.get(`${API_URL}${getAdminUrl('all-instructors')}`,{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		return data
	},    
	async approveInstructor(instructorId: string) {
 		const { data } = await $axios.put<'Success'>(`${getAdminUrl('approve-instructor')}`, {
 			instructorId,
 		});
 
 		return data;
 	},
 
 	async deleteInstructor(instructorId: string) {
 		const { data } = await $axios.put<'Success'>(`${getAdminUrl('delete-instructor')}`, {
 			instructorId,
 		});
 
 		return data;
 	},
	async getUsers(limit:string ,token?:string){
		const {data} = await axios.get<UserType[]>(`${API_URL}${getAdminUrl('all-users')}`,{
			params:{limit},
			headers:{ Authorization: `Bearer ${token}`}
		})
		return data
	}
 };
