import { CourseType } from "src/interfaces/course.interface";
import { InstructorType } from "src/interfaces/instructor.interface";

export interface InstructorIntialStateType {
     isLoading:boolean
     error: null | string | unknown,
     courses: CourseType[];
	course: CourseType | null;
    instructors :InstructorType[]
}

export interface instructorApplyBody{
    firstNama:string
    lastName:string
    email:string
    sociaMedia:string
    callback:()=>void
}
