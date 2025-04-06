import { FC, ReactNode, useEffect } from 'react';
import { useActions } from 'src/hooks/useActions';
import { CourseType } from 'src/interfaces/course.interface';
import { InstructorType } from 'src/interfaces/instructor.interface';

interface Props {
	children: ReactNode;
	courses: CourseType[];
	course: CourseType;
	instructors: InstructorType[];
}

const AppProvider: FC<Props> = ({ children, course, courses, instructors }): JSX.Element => {
	const { getCourses, getCourse, getInstructors } = useActions();
       console.log(courses);
	      console.log(instructors);
	useEffect(() => {
		if (courses !== undefined) {
			getCourses(courses);
		} else {
			getCourses([]);
		}
		if (instructors) {
			getInstructors(instructors);
		} else {
			getCourses([]);
		}
		if (course) {
			getCourse(course);
		}
	}, [courses, course]);

	return <>{children}</>;
};

export default AppProvider;