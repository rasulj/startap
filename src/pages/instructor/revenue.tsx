import { NextPage } from 'next';
import { withInstructorLayout } from 'src/layousts/instructor';
import { RevenuePageComponent } from 'src/page-component';

const Revenue: NextPage = () => {
	return <RevenuePageComponent />;
};

export default withInstructorLayout(Revenue);