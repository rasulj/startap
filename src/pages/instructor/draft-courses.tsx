import { NextPage } from 'next';
import { withInstructorLayout } from 'src/layousts/instructor';
import { DraftCourseComponent } from 'src/page-component';

const DraftCourses: NextPage = () => {
	return <DraftCourseComponent/>
};

export default withInstructorLayout(DraftCourses);