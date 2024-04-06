import { NextPage } from 'next';
import { withInstructorLayout } from 'src/layousts/instructor';
import { InstructorEditCourseCard } from 'src/page-component';


const EditCourses: NextPage = () => {
	return <InstructorEditCourseCard/>
};

export default withInstructorLayout(EditCourses);