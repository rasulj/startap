

import { Box, Button, Flex, FormLabel, Icon, Stack, Text } from '@chakra-ui/react';
import { Form, Formik, FormikValues } from 'formik';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
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
import { FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { loadImage } from 'src/helpers/image.helper';
import { CourseType } from 'src/interfaces/course.interface';


const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const InstructorManageCourse = ({ submitHandler, titleBtn ,courseValues}: InstructorManageCourseProps) => {

	
	const [errorFile, setErrorFile] = useState('');
	const [file, setFile] = useState<File | string | null>();
	const [initialValues, setInitialValues] = useState(manageCourseValues);

     const {error ,isLoading} = useTypedSelector(state => state.course)
    const {t} = useTranslation()
	const { clearCourseError, startLoading } = useActions();
	const handleChange = (file: File) => {
		setFile(file);
	};



const onSubmit = async (formValues: FormikValues) => {
	
		if (!file) {
			setErrorFile("preview image is requried")
			return
			}
			let imageUrel = file
			if( typeof file !== 'string'){
           	startLoading()
			 const formData = new FormData();
		
			formData.append('image', file as File);
       const response = await FileService.fileUpload(formData, 'preview-image');
	       imageUrel = response.url
		const data = { ...formValues, previewImage:imageUrel } as CourseType
	
		submitHandler(data);
			}
			
	};
		useEffect(() => {
		if (courseValues) {
			setInitialValues(courseValues);
			setFile(courseValues.previewImage);
		}
	}, [courseValues]);
	return (
		<>
			<Formik
				onSubmit={onSubmit}
				initialValues={initialValues}
				validationSchema={CourseValidation.create}
				enableReinitialize
			>
				{formik => (
					<Form>
						<Flex mt={12} gap={4}>
							<Box w={'70%'}>
								<Stack spacing={5}>
									<TextField name='title' label={t('title', { ns: 'instructor' })} />
									<TextAreaField
										name='exerpt'
										placeholder='Full course about JavaScript'
										height={'150px'}
										label={t('excerpt', { ns: 'instructor' }) || 'Exerpt'}
									/>
									<Flex gap={4}>
										<TagField
											label={t('what_students_will_learn', { ns: 'instructor' })}
											name='learn'
											values={formik.values.learn}
											placeholder='Full project...'
											formik={formik}
											errorMessage={ formik.touched.requirements ? (formik.errors.requirements as string):''}
										/>
										<TagField
												label={t('requirements', { ns: 'instructor' })}
											name='requirements'
											values={formik.values.requirements}
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
										label={t('level', { ns: 'instructor' })}
										placeholder='-'
										arrOptions={courseLevel}
									/>
									<SelectField
										name='category'
										label={t('category', { ns: 'instructor' })}
										placeholder='-'
										arrOptions={courseCategory}
									/>
									<SelectField
										name='price'
											label={t('price', { ns: 'instructor' })}
										placeholder='-'
										arrOptions={coursePrice}
									/>
									<TagField
										label={t('course_tags', { ns: 'instructor' })}
											values={formik.values.tags}
										name='tags'
										placeholder='JavaScript...'
										formik={formik}
										errorMessage={ formik.touched.requirements ? (formik.errors.requirements as string):''}
									/>
									<FormLabel>
											Course preview image{' '}
											<Box as={'span'} color={'red.300'}>
												*
											</Box>
										</FormLabel>

									{ file ? (<Box pos={'relative'} w={'full'} h={200}>
											<Image src={typeof file === 'string'? loadImage(file as string): URL.createObjectURL(file)}
												alt={'preview image'}
												fill
												style={{ objectFit: 'cover', borderRadius: '8px' }}
											/>
											<Icon
												as={FaTimes}
												fontSize={20}
												pos={'absolute'}
												right={2}
												top={2}
												cursor={'pointer'}
												onClick={() => setFile(null)}
											/>
										</Box>) :(
												<Box>
											<FileUploader
												handleChange={handleChange}
												name='file'
												types={['JPG', 'PNG', 'GIF']}
												style={{ minWidth: '100%' }}
											/>
											{errorFile && (
												<Text mt={2} fontSize='14px' color='red.500'>
													{errorFile}
												</Text>
											)}
										</Box>
										)  }
									
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

 