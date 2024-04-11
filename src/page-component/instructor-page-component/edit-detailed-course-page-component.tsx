import {
	Divider,
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import 'react-quill/dist/quill.snow.css';

import { InstructorManagecourse } from 'src/components';
import { SubmitValuesInterface } from 'src/components/instructor-manage-course/instructor-manage-course.props';
import SectionTitle from 'src/components/section-title/section-title';


const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const EditDetailedCoursePageComponent = () => {


	const router = useRouter();



	const onSubmit = (data: SubmitValuesInterface) => {
		console.log(data);
	};
	return (
		<>
			<SectionTitle title={`Edit course ${router.query.slug}`} subtitle={''} />
			<Divider mt={5} />
			<InstructorManagecourse titleBtn='Edit course' submitHandler={onSubmit}/>
			
		</>
	);
};

export default EditDetailedCoursePageComponent;