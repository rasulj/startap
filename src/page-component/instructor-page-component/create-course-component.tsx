import {
	Divider,
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import 'react-quill/dist/quill.snow.css';
import { InstructorManagecourse } from 'src/components';
import { SubmitValuesInterface } from 'src/components/instructor-manage-course/instructor-manage-course.props';
import SectionTitle from 'src/components/section-title/section-title';


const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const CreateCourseComponent = () => {


	const onSubmit = (data: SubmitValuesInterface) => {
		console.log(data);
	};
	return (
		<>
			<SectionTitle
				title='Create course'
				subtitle="Note that when you're creating course it will be draft"
			/>
			<Divider mt={5} />

			<InstructorManagecourse titleBtn='Create course' submitHandler={onSubmit} />
			
		</>
	);
};

export default CreateCourseComponent;