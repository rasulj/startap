export interface InstructorType {
	firstName: string;
	lastName: string;
	email: string;
	socialMedia: string;

}
import { CourseType } from 'src/interfaces/course.interface';

export interface InstructorProvideProps {
	courses: CourseType[];
	course: CourseType;
}