import { Box, Card, CardBody, Flex, Grid, HStack } from '@chakra-ui/react';
 import SectionTitle from 'src/components/section-title/section-title';
 import { LaunchCourseIcon } from 'src/icons';
 import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { AdminCourseCard } from 'src/components';
import { useActions } from 'src/hooks/useActions';
import { useTranslation } from 'react-i18next';

 const CoursesPageComponent = () => {
	const { courses, error} = useTypedSelector(state => state.admin);
	const { t } = useTranslation();
 	const { clearAdminError } = useActions();
 	return (
 		<>
 			<Card mt={10}>
 				<CardBody>
 					<HStack>
 						<Box w={'30%'}>
 							<SectionTitle title={t('courses_section_title', { ns: 'admin' })}
 								subtitle={t('courses_section_descr', { ns: 'admin' })} />
 						</Box>
 						<Flex w={'70%'} justify={'flex-end'}>
 							<LaunchCourseIcon />
 						</Flex>
 					</HStack>
 				</CardBody>
 			</Card>
			<Grid gridTemplateColumns={{base:'1fr',md:'repeat(3, 1fr)'}} gap={4}>
 				{courses.map(c => (
 					<AdminCourseCard key={c._id} course={c} />
 				))}
 			</Grid>
 		</>
 	);
 };
 
 export default CoursesPageComponent;