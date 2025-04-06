
import { CourseType } from 'src/interfaces/course.interface';


export interface InstructorType {
    fullName: string;
 	avatar: string;
 	coursesCount: number;
 	studentsCount: number;
	totalCourses: number;
 	job: string;
}
export interface InstructorProvideProps {
	courses: CourseType[];
	course: CourseType;
}

export interface SectionType {
	_id: string;
	title: string;
	lessons: LessonType[];
}
export interface LessonType {
	name: string;
	material: string;
	embedVideo: string;
	hour: number;
	minute: number;
	second: number;
	_id: string;
}