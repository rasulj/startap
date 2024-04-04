import axios from "axios";
import { API_URL, getInstructorUrl } from "src/config/api.config";
import { instructorApplyBody } from "src/store/instructor/instructor.interface";

export const InstructorService = {
	async applyInstructor(body:instructorApplyBody) {
			const response = await axios.post<'Seccess'>(`${API_URL}${getInstructorUrl('apply')}`, body,);
            return response.data
	} }