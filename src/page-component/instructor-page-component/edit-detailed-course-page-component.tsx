import {
	Divider,
	useToast,
} from '@chakra-ui/react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import 'react-quill/dist/quill.snow.css';
import { InstructorManagecourse } from 'src/components';
import SectionTitle from 'src/components/section-title/section-title';
import { useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { CourseType } from 'src/interfaces/course.interface';


const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const EditDetailedCoursePageComponent = () => {
	const { t } = useTranslation();
 const {editCourse} =useActions()
 const { course } = useTypedSelector(state => state.instructor);
	const router = useRouter();
    const toast = useToast();
	

const onSubmit = (data:CourseType) => {
	editCourse({
			...data,
			callback: () => {
				toast({
				title: t('successfully_edited', { ns: 'instructor' }),
					position: 'top-right',
					isClosable: true,
				});
				router.push('/instructor/edit-courses');
			},
		});
	};
	return (
		<>
			<SectionTitle title={`${t('edit_course_title', { ns: 'instructor' })} ${router.query.slug}`}
				subtitle={''}/>
			<Divider mt={5} />
			<InstructorManagecourse titleBtn={t('edit_course_title', { ns: 'instructor' })}
				submitHandler={onSubmit}
				courseValues={course}/>
				
				
			
		</>
	);
};

export default EditDetailedCoursePageComponent;