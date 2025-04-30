import React from 'react'
import { useTranslation } from 'react-i18next';
import { withLayout } from 'src/layouts/layout'
import Seo from 'src/layouts/seo/seo';
import { CoursesPageComponent } from 'src/page-component'
<<<<<<< HEAD
import {GetServerSideProps} from 'next'
import { API_URL } from 'src/config/api.config';
import { AppService } from 'src/services/app.service';
import { CourseType } from 'src/interfaces/course.interface';
=======
>>>>>>> 25889e5ed2447fe1262d2b1f9685c2f8c5e8b06a

const Courses = () => {
 const { t } = useTranslation();

	return (
		<Seo
			metaTitle={
				`Sammi | ${t('course_page_title', { ns: 'seo' })}` ||
				'Sammi | All Courses'
			}
			metaDescription={
				`Sammi | ${t('course_page_description', { ns: 'seo' })}` ||
				'All courses in sammi platform just learn and relax'
			}
		>
			<CoursesPageComponent />
		</Seo>
	);
}

<<<<<<< HEAD
export default withLayout(Courses)


 export const getServerSideProps: GetServerSideProps<MainPageProps> = async ({ req }) => {
 	const courses = await AppService.getCourses(req.cookies.i18next);
 
 	return {
 		props: { courses },
 	};
 };
 
 interface MainPageProps {
 	courses: CourseType[];
 }
=======
export default withLayout(Courses)
>>>>>>> 25889e5ed2447fe1262d2b1f9685c2f8c5e8b06a
