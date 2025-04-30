import { FC, ReactNode, useEffect } from 'react';
import { useActions } from 'src/hooks/useActions';
import { BooksType } from 'src/interfaces/books.interface';
import { CourseType } from 'src/interfaces/course.interface';
import { InstructorType } from 'src/interfaces/instructor.interface';

interface Props {
	children: ReactNode;
	courses: CourseType[];
	course: CourseType;
	instructors: InstructorType[];
	books: BooksType[];
}

const AppProvider: FC<Props> = ({ children, course, courses, instructors,books }): JSX.Element => {
	const { getCourses, getCourse, getInstructors ,getBooks} = useActions();
<<<<<<< HEAD
     
=======
       console.log(courses);
	      console.log(instructors);
>>>>>>> 25889e5ed2447fe1262d2b1f9685c2f8c5e8b06a
	useEffect(() => {
		if (courses !== undefined) {
			getCourses(courses);
		} else {
			getCourses([]);
		}
		if (instructors) {
			getInstructors(instructors);
		} else {
<<<<<<< HEAD
			getInstructors([]);
=======
			getCourses([]);
>>>>>>> 25889e5ed2447fe1262d2b1f9685c2f8c5e8b06a
		}
		if (course) {
			getCourse(course);
		}
		if (books?.length) {
 			getBooks(books);
 		} else {
 			getBooks([]);
 		}
	}, [courses, course]);

	return <>{children}</>;
};

export default AppProvider;