import axios from "axios";
import { API_URL, getCourseUrl, getInstructorUrl } from "src/config/api.config";

export const  AppService = { 
async getMainPageSource(language?: string) {
 		const { data: courses } = await axios.get(`${API_URL}${getCourseUrl('all')}?language=${language}&limit=6`);
		
			const { data: instructors } = await axios.get(`${API_URL}${getInstructorUrl('all')}?language=${language}&limit=6`
 			
 		);
		
		
  return {courses,instructors}
}
 

}