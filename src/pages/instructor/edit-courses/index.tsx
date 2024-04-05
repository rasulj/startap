import { NextPage } from 'next';
import { withInstructorLayout } from 'src/layousts/instructor';

const EditCourses: NextPage = () => {
	return <div>EditCourses</div>;
};

export default withInstructorLayout(EditCourses);