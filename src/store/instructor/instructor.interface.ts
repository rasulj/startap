import { CourseType } from "src/interfaces/course.interface";

export interface InstructorIntialStateType {
     isLoading:boolean
     error: null | string | unknown,
     courses: CourseType[];
	course: CourseType | null;
}

export interface instructorApplyBody{
    firstNama:string
    lastName:string
    email:string
    sociaMedia:string
    callback:()=>void
}
