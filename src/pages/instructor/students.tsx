import { NextPage } from 'next';
import { withInstructorLayout } from 'src/layousts/instructor';
import StudentsPageComponent from 'src/page-component/instructor-page-component/students-page-component';

const Students: NextPage = () => {
	return (
		<StudentsPageComponent/>
	)
};

export default withInstructorLayout(Students);