import {Divider, useToast} from '@chakra-ui/react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import 'react-quill/dist/quill.snow.css';
import { InstructorManagecourse } from 'src/components';
import { SubmitValuesInterface } from 'src/components/instructor-manage-course/instructor-manage-course.props';
import SectionTitle from 'src/components/section-title/section-title';
import { useActions } from 'src/hooks/useActions';
import { CourseType } from 'src/interfaces/course.interface';


const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const CreateCourseComponent = () => {

	const toast = useToast();
	const router = useRouter();

const {createCourse} = useActions()
	const onSubmit = (data:CourseType) => {
		createCourse({
			...data,
			callback: () => {
				toast({
					title: 'Successfully created',
					description: 'You can customize your curriculum for your course',
					position: 'top-right',
					isClosable: true,
				});
				router.push('/instructor/courses');
			},
		});
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