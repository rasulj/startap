import $axios from 'src/api/axios';
import { API_URL, getCourseUrl, getReviewUrl } from 'src/config/api.config';
import { CourseType } from 'src/interfaces/course.interface';
import { ReviewType } from '../interfaces/course.interface';
import axios from 'axios';

export const CourseService = {
	async createCourse(body: CourseType) {
		const response = await $axios.post(`${getCourseUrl('create')}`, body);
		return response.data;
	},

	async editCourse(body: CourseType, id:string) {
		const response = await $axios.patch(`${getCourseUrl('edit')}/${id}`, body);
   
   
		return response.data;
	},

	async deleteCourse( id:string) {
		const response = await $axios.delete(`${getCourseUrl('delete')}/${id}`);
   
		return response.data;
	},

		async draftCourse( id:string) {
		const response = await $axios.put(`${getCourseUrl('draft')}/${id}`);
   
		return response.data;
	},
	async activateCourse( id:string) {
		const response = await $axios.put(`${getCourseUrl('activate')}/${id}`);
   
		return response.data;
	},
	async createReview(data:ReviewType) { 
		const response = await axios.post(
			`${API_URL}${getReviewUrl('create')}`,
			data
		);

		return response.data;
	}, 

	async editReview(data:Partial<ReviewType>, reivewId: string) {
		const response = await axios.put(
			`${API_URL}${getReviewUrl('edit')}/${reivewId}`,
			data
		);

		return response.data;
	},

	async getReviewByUser(data:{course:string ,user:string}) {
		const response = await axios.post(
			`${API_URL}${getReviewUrl('get-by-user')}`,
			data
		);

		return response.data;
	},

	async getReviews(courseId:string) {
		const response = await axios.get(
			`${API_URL}${getReviewUrl('get')}/${courseId}`
		)
		return response.data
	}
};
