import axios from "axios";
import { API_URL, getCourseUrl, getInstructorUrl } from "src/config/api.config";

export const  AppService = { 
async getMainPageSource(language?: string) {
 		const { data: courses } = await axios.get(`${API_URL}${getCourseUrl('all')}?language=${language}&limit=6`);
		
<<<<<<< HEAD
			const { data: instructors } = await axios.get(`${API_URL}${getInstructorUrl('all')}?language=${language}&limit=6`	
 		);	
  return {courses,instructors}
},
	
 	async getCourses(language?: string, limit: string = '10') {
 		const { data: courses } = await axios.get(
 			`${API_URL}${getCourseUrl('all')}?language=${language}&limit=${limit}`
 		);
 
 		return courses;
 	},
=======
			const { data: instructors } = await axios.get(`${API_URL}${getInstructorUrl('all')}?language=${language}&limit=6`
 			
 		);
		
		
  return {courses,instructors}
}
>>>>>>> 25889e5ed2447fe1262d2b1f9685c2f8c5e8b06a
 

}