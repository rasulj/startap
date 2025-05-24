import { Box, Button, Flex, Stack, useColorModeValue, useToast } from '@chakra-ui/react';
import { Form, Formik, FormikHelpers } from 'formik';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import 'react-quill/dist/quill.snow.css';
import { editLessonModules } from 'src/config/editor.config';
import { useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { LessonType } from 'src/interfaces/instructor.interface';
import { CourseValidation, manageLessonValues } from 'src/validations/course.validation';

import TextAreaField from '../text-area-field/text-area-field';
import TextFiled from '../text-filed/text-filed';
import { LessonFormProps } from './lesson-form.props';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const LessonForm = ({ sectionId, values, onToggle }: LessonFormProps) => {
  // Boshlang‘ich qiymatlarni LessonType ga moslang
  const [initialValues, setInitialValues] = useState<LessonType>(manageLessonValues as LessonType);
  const { createLesson, clearError, editLesson } = useActions();
  const { isLoading, error } = useTypedSelector(state => state.section);
  const { t } = useTranslation();
  const toast = useToast();

  // onSubmit: to‘g‘ri tiplarga ega bo‘lishi kerak
  const onSubmit = (
    formValues: LessonType,
    { resetForm }: FormikHelpers<LessonType>
  ) => {
    if (values) {
      // Mavjud darsni tahrirlash
      editLesson({
        lessonId: values._id,
        ...formValues,
        callback: () => {
          toast({
            title: t('successfully_edited', { ns: 'instructor' }),
            position: 'top-right',
            isClosable: true,
          });
          onToggle();
          resetForm();
        },
      });
    } else {
      // Yangi dars yaratish
      createLesson({
        ...formValues,
        sectionId,
        callback: () => {
          toast({
            title: t('successfully_created_course', { ns: 'instructor' }),
            position: 'top-right',
            isClosable: true,
          });
          onToggle();
          resetForm();
        },
      });
    }
  };

  // Agar tashqi `values` o‘zgarsa, initialValues ni yangilang
  useEffect(() => {
    if (values?._id) {
      setInitialValues(values);
    }
  }, [values]);

  return (
    <Box
      p={5}
      mt="4"
      border={'1px'}
      borderRadius={'lg'}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
    >
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={CourseValidation.lesson}
        enableReinitialize
      >
        {formik => (
          <Form>
            <Stack spacing={5}>
  
              <TextFiled name="name" label={t('name', { ns: 'instructor' })} />
              <TextAreaField name="embedVideo" label={t('embed_video', { ns: 'instructor' }) || 'Embed video'} />
              <Flex gap={3}>
                <TextFiled name="hour" label={t('hour', { ns: 'instructor' })} type="number" />
                <TextFiled name="minute" label={t('minute', { ns: 'instructor' })} type="number" />
                <TextFiled name="second" label={t('second', { ns: 'instructor' })} type="number" />
              </Flex>
              <Box>
                <ReactQuill
                  modules={editLessonModules}
                  onChange={(data) => formik.setFieldValue('material', data)}
                  value={formik.values.material}
                />
              </Box>
              <Button
                h={14}
                mt={4}
                w="full"
                colorScheme="facebook"
                type="submit"
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
