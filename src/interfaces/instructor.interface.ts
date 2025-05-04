
import { CourseType } from 'src/interfaces/course.interface';
import { UserType } from './user.interface';


export interface InstructorType {
    fullName: string;
 	avatar: string;
 	coursesCount: number;
 	studentsCount: number;
	totalCourses: number;
 	jop: string;
	approved:boolean
	socialMedia: string;
 	author: UserType;
      _id: string;
	  completed: string[];

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
	completed:string[]
}

 export interface BalanceType {
 	available: AmountBalanceType[];
 	instant_available: AmountBalanceType[];
 	pending: AmountBalanceType[];
 }
 
 interface AmountBalanceType {
 	amount: number;
 }