import { CourseType } from 'src/interfaces/course.interface';
import { InstructorType } from 'src/interfaces/instructor.interface';
import { UserType } from 'src/interfaces/user.interface';

export interface AdminProps {
	courses: CourseType[];
	users:UserType[]
    instructors:InstructorType[]

}