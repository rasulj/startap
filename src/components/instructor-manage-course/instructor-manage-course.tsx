

import { Box, Button, Flex, FormLabel, Stack, Text } from '@chakra-ui/react';
import { Form, Formik, FormikValues } from 'formik';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { GiSave } from 'react-icons/gi';
import 'react-quill/dist/quill.snow.css';
import { courseCategory, courseLevel, coursePrice } from 'src/config/constants';
import { editorModules } from 'src/config/editor.config';
import { CourseValidation, manageCourseValues } from 'src/validations/course.validation';
import SelectField from '../select-field/select-field';
import TagField from '../tag-field/tag-field';
import TextAreaField from '../text-area-field/text-area-field';
import { useActions } from 'src/hooks/useActions';
import { FileService } from 'src/services/file.service';
import {InstructorManageCourseProps,SubmitValuesInterface,} from './instructor-manage-course.props';
import TextField from '../text-filed/text-filed';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import ErrorAlert from '../error-alert/error-alert';
import { useTranslation } from 'react-i18next';


const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const InstructorManageCourse = ({ submitHandler, titleBtn }: InstructorManageCourseProps) => {

	const [file, setFile] = useState<File>();
	const [errorFile, setErrorFile] = useState('');
     const {error ,isLoading} = useTypedSelector(state => state.course)
    const {t} = useTranslation()
	const { clearCourseError, startLoading } = useActions();
	const handleChange = (file: File) => {
		setFile(file);
	};

const onSubmit = async (formValues: FormikValues) => {
	const previewImage: string = ''
		if (!file) {
			setErrorFile("preview image is requried")
			return
			}
			const formData = new FormData();
			startLoading()
			formData.append('image', file as File);
       const response = await FileService.fileUpload(formData, 'preview-image');
	
		const data = { ...formValues, previewImage: response.url } as SubmitValuesInterface
	
		submitHandler(data);
	};
	return (
		<>
			<Formik
				onSubmit={onSubmit}
				initialValues={manageCourseValues}
				validationSchema={CourseValidation.create}
			>
				{formik => (
					<Form>
						<Flex mt={12} gap={4}>
							<Box w={'70%'}>
								<Stack spacing={5}>
									<TextField name='title' label='Title' placeholder='JavaScript from 0 to hero' />
									<TextAreaField
										name='exerpt'
										placeholder='Full course about JavaScript'
										height={'150px'}
										label={'Exerpt'}
									/>
									<Flex gap={4}>
										<TagField
											label='What will students learn in your course?'
											name='learn'
											placeholder='Full project...'
											formik={formik}
											errorMessage={ formik.touched.requirements ? (formik.errors.requirements as string):''}
										/>
										<TagField
											label='Requirements'
											name='requirements'
											placeholder='Basic JavaScript...'
											formik={formik}
											errorMessage={ formik.touched.requirements ? (formik.errors.requirements as string):''}
										/>
									</Flex>
									<Box>
										<FormLabel mb={3}>
											Description{' '}
											<Box as={'span'} color={'red.300'}>
												*
											</Box>
										</FormLabel>
										<ReactQuill
											modules={editorModules}
											onChange={data => formik.setFieldValue('description', data)}
											value={formik.values.description}
										/>
										{formik.errors.description && formik.touched.description && (
											<Text mt={2} fontSize='14px' color='red.500'>
												{formik.errors.description as string}
											</Text>
										)}
									</Box>
										<>
										{error && (
											<ErrorAlert title={error as string} clearHandler={clearCourseError} />
										)}
									</>
									<Button
										w={'full'}
										type={'submit'}
										h={14}
										colorScheme={'facebook'}
										isLoading={isLoading}
										loadingText={`${t('loading', { ns: 'global' })}`}
										rightIcon={<GiSave />}
									>
										{titleBtn}
									</Button>
								</Stack>
							</Box>
							<Box w={'30%'}>
								<Stack spacing={5}>
									<SelectField
										name='level'
										label='Level'
										placeholder='-'
										arrOptions={courseLevel}
									/>
									<SelectField
										name='category'
										label='Category'
										placeholder='-'
										arrOptions={courseCategory}
									/>
									<SelectField
										name='price'
										label='Price'
										placeholder='-'
										arrOptions={coursePrice}
									/>
									<TagField
										label='Course tags'
										name='tags'
										placeholder='JavaScript...'
										formik={formik}
										errorMessage={ formik.touched.requirements ? (formik.errors.requirements as string):''}
									/>
									<Box>
										<FormLabel>
											Course preview image{' '}
											<Box as={'span'} color={'red.300'}>
												*
											</Box>
										</FormLabel>
										<FileUploader
											handleChange={handleChange}
											name='file'
											types={['JPG', 'PNG', 'GIF']}
											style={{ minWidth: '100%' }}
										/>
									</Box>
								</Stack>
							</Box>
						</Flex>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default InstructorManageCourse;