import axios from "axios";
import $axios from "src/api/axios";
import { API_URL, getInstructorUrl } from "src/config/api.config";
import { CourseType } from "src/interfaces/course.interface";
import { instructorApplyBody } from "src/store/instructor/instructor.interface";

export const InstructorService = {
	async applyInstructor(body:instructorApplyBody) {
			const response = await axios.post<'Seccess'>(`${API_URL}${getInstructorUrl('apply')}`, body,);
            return response.data
	} ,


	async getAllCourses(token?: string) {
		const response = await axios.get<CourseType[]>(`${API_URL}${getInstructorUrl('course-all')}`, {
			
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
     


		return response.data;
	},

	async getDetailedCourse( token?: string, slug?: string) {
		console.log(token)
		const response = await $axios.get(`${getInstructorUrl(`course/${slug}`)}`,{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		return response.data;
	},
}