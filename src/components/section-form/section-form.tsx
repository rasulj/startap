import { Button, useToast } from '@chakra-ui/react';
import { Form, Formik, FormikValues } from 'formik';
import TextFiled from '../text-filed/text-filed';
import { useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { SectionFormProps } from './section-props';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { CourseValidation } from 'src/validations/course.validation';

const SectionForm = ({onClose ,values}:SectionFormProps) => {

const [initialValues, setInitialValues] = useState<{ title: string }>({ title: '' });
	const { createSection, editSection}= useActions()

	const { course} = useTypedSelector( state => state.instructor)

	const { isLoading} = useTypedSelector( state => state.section)
       const  toast = useToast()
       const {t}= useTranslation()

	const onSubmit = (formValues: FormikValues) => {
		if (values) {
			editSection({
				sectionId: values.id,
				title: formValues.title,
				callback: () => {
					toast({ title: 'Successfully edited section', position: 'top-right', isClosable: true });
					onClose();
				
				},
			});
		} else {
			createSection({
				title: formValues.title,
				courseId: course?._id as string,
				callback: () => {
					toast({ title: 'Successfully created section', position: 'top-right', isClosable: true });
					onClose();
				
				},
			});
		}
	};

	useEffect(() => {
		setInitialValues({ title: values?.title as string });
	}, [values]);
       
		

	return (
		<Formik onSubmit={onSubmit} initialValues={initialValues} enableReinitialize validationSchema={CourseValidation.section}
			>
			<Form>
				<TextFiled name='title' label='Title' />
				<Button h={14} mt={4} w={'full'} colorScheme={'facebook'} type={'submit'}isLoading={isLoading}
					loadingText={`${t('loading', { ns: 'global' })}`}>
					Submit
				</Button>
			</Form>
		</Formik>
	);
};
export default SectionForm;