import { NextPage } from 'next';
import { withInstructorLayout } from 'src/layousts/instructor';

const Revenue: NextPage = () => {
	return <div>Revenue</div>;
};

export default withInstructorLayout(Revenue);