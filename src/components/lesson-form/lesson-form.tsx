import { Box, Button, Flex, Stack, Text, useColorModeValue, useToast } from '@chakra-ui/react';
import { Form, Formik, FormikValues } from 'formik';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { editLessonModules } from 'src/config/editor.config';
import TextAreaField from '../text-area-field/text-area-field';
import TextFiled from '../text-filed/text-filed';
import { LessonFormProps } from './lesson-form.props';
import { LessonType } from 'src/interfaces/instructor.interface';
import { useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { manageLessonValues } from 'src/validations/course.validation';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const LessonForm = ({values,sectionId ,onToggle}:LessonFormProps) => { 

	const [initialValues , setInitialValues]= useState(manageLessonValues)
	const toast = useToast()
  const {createLesson, getSection,editLesson}= useActions()
const { course } = useTypedSelector(state => state.instructor);
const { isLoading } = useTypedSelector(state => state.section);
const {t}=useTranslation()


	const onSubmit = (formValues: FormikValues , {resetForm}) => {
		const data = formValues as LessonType
       
		  if(values){
             editLesson({lessonId:values._id, ...data , callback:()=>{
				onToggle()			
		        resetForm()
			 }})
		  }else{
		  createLesson({ sectionId,...data,callback:()=>{
			toast({title: t('successfully_created_course', { ns: 'instructor' }), position: 'top-right', isClosable: true });
		onToggle()			
		resetForm()
	  }})	
		  }
    
	}

useEffect(() => {
		if (values?._id) {
			setInitialValues(values);
		}
	}, [values]);
	
	return (
		<Box
			p={5}
			mt='4'
			border={'1px'}
			borderRadius={'lg'}
			borderColor={useColorModeValue('gray.200', 'gray.500')}
		>
			<Formik onSubmit={onSubmit} initialValues={initialValues} enableReinitialize>
				{formik => (
					<Form>
						<Stack spacing={5}>
						<TextFiled name='name' label={t('name', { ns: 'instructor' })} />
							<TextAreaField
								name='embedVideo'
								label={t('embed_video', { ns: 'instructor' }) || 'Embed video'}
							/>
							<Flex gap={3}>
							<TextFiled name='hour' label={t('hour', { ns: 'instructor' })} type='number' />
								<TextFiled name='minute' label={t('minute', { ns: 'instructor' })} type='number' />
								<TextFiled name='second' label={t('second', { ns: 'instructor' })} type='number' />
							</Flex>
							<Box>
								<ReactQuill
									modules={editLessonModules}
									onChange={data => formik.setFieldValue('material', data)}
									value={formik.values.material}
								/>
								{formik.errors.material && formik.touched.material && (
									<Text mt={2} fontSize='14px' color='red.500'>
										{formik.errors.material as string}
									</Text>
								)}
							</Box>
							<Button h={14} mt={4} w={'full'} colorScheme={'facebook'} type={'submit'}
							isLoading={isLoading}
								loadingText={`${t('loading', { ns: 'global' })}`}
							>
									{t('search_input_btn', { ns: 'courses' })}
							</Button>
						</Stack>
					</Form>
				)}
			</Formik>
		</Box>
	);
};
export default LessonForm;

