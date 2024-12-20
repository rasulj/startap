import {
	Divider,
	useToast,
} from '@chakra-ui/react';
import { callback } from 'chart.js/dist/helpers/helpers.core';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import 'react-quill/dist/quill.snow.css';

import { InstructorManagecourse } from 'src/components';
import { SubmitValuesInterface } from 'src/components/instructor-manage-course/instructor-manage-course.props';
import SectionTitle from 'src/components/section-title/section-title';
import { useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { CourseType } from 'src/interfaces/course.interface';


const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const EditDetailedCoursePageComponent = () => {
 const {editCourse} =useActions()
 const { course } = useTypedSelector(state => state.instructor);
	const router = useRouter();
    const toast = useToast();
	

const onSubmit = (data:CourseType) => {
	editCourse({
			...data,
			callback: () => {
				toast({
					title: 'Successfully edited ',
			
					position: 'top-right',
					isClosable: true,
				});
				router.push('/instructor/edit-courses');
			},
		});
	};
	return (
		<>
			<SectionTitle title={`Edit course ${router.query.slug}`} subtitle={''} />
			<Divider mt={5} />
			<InstructorManagecourse titleBtn='Edit course'
				submitHandler={onSubmit}
				courseValues={course}/>
				
				
			
		</>
	);
};

export default EditDetailedCoursePageComponent;