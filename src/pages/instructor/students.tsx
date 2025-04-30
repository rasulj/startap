import { GetServerSideProps, NextPage } from 'next';
import { withInstructorLayout } from 'src/layouts/instructor';
import StudentsPageComponent from 'src/page-component/instructor-page-component/students-page-component';
import { AuthService } from 'src/services/auth.service';

const Students: NextPage = () => {
	return (
		<StudentsPageComponent/>
	)
};

export default withInstructorLayout(Students);
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
 	const instructor = await AuthService.checkInstructor(req.cookies.refresh);
 
 	if (!instructor) {
 		return {
 			redirect: {
 				destination: '/',
 				permanent: false,
 			},
 		};
 	}
 
 	return {
 		props: {},
 	};
 };