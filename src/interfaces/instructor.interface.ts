
import { CourseType } from 'src/interfaces/course.interface';


export interface InstructorType {
	firstName: string;
	lastName: string;
	email: string;
	socialMedia: string;

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
	hour: string;
	minute: string;
	second: string;
	_id: string;
}