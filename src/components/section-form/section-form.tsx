import { Button, useToast } from '@chakra-ui/react';
import { Form, Formik, FormikValues } from 'formik';
import TextFiled from '../text-filed/text-filed';
import { useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { SectionFormProps } from './section-props';
import { useTranslation } from 'react-i18next';

const SectionForm = ({onClose}:SectionFormProps) => {

	const { createSection,getSection}= useActions()
	const { course} = useTypedSelector( state => state.instructor)
		const { isLoading} = useTypedSelector( state => state.section)
   const  toast = useToast()
   const {t}= useTranslation()

	const onSubmit = (formValues: FormikValues) => {
        createSection({
			 title: formValues.title,
			courseId:course?._id as string,
			callback:()=>{
            toast({ title: 'Successfully created section', position: 'top-right', isClosable: true });
			onClose()
			getSection({
					courseId: course?._id,
					callback: () => {},
				})
			}
		})
		
	};
	return (
		<Formik onSubmit={onSubmit} initialValues={{ title: '' }}>
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