import { NextPage } from 'next';
import { withInstructorLayout } from 'src/layousts/instructor';
import { InstructorCoursesPageComponent } from 'src/page-component';

const Courses: NextPage = () => {
	return <InstructorCoursesPageComponent />;
};

export default withInstructorLayout(Courses);