import { Box, Flex, Grid, GridItem, Heading, HStack, Icon,  Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { FaUserGraduate } from 'react-icons/fa';
import SectionTitle from '../section-title/section-title';
import { useTranslation } from 'react-i18next';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import Image from 'next/image';
import { loadImage } from 'src/helpers/image.helper';

const Instructors = () => {
 
	const {t} = useTranslation()

	const { instructors } = useTypedSelector(state => state.instructor);


	return (
		<>
			<SectionTitle title={t("instructor_title" ,{ns:'home'})} subtitle={t("instructor_description",{ns:'home'})} />

			<Grid gap={3} gridTemplateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }} mt={5}>
				{instructors?.map((item, idx) => (
					<GridItem key={idx}>
						<Stack spacing={3}>
							<Box pos={'relative'} w={'full'} h={'330px'}>
 								<Image
 									src={item.avatar ? loadImage(item.avatar) : '/images/altimag.webp'}
 									alt={item.fullName}
 									fill
 									style={{ objectFit: 'cover', borderRadius: '8px' }}
 								/>
 							</Box>
							
							<Heading fontSize={'xl'}>
								{item.fullName} 
							</Heading>
							<Text color={'gray.500'}>??????</Text>
							<HStack opacity={'.6'}>
								<Flex align={'center'} gap={1}>
									<Icon as={FaUserGraduate} />
									<Text>0 students</Text>
								</Flex>
								<Flex align={'center'} gap={1}>
									<Icon as={AiOutlinePlayCircle} />
									<Text> 100 courses</Text>
								</Flex>
							</HStack>
						</Stack>
					</GridItem>
				))}
			</Grid>

			<Text textAlign={'center'}>
				{t("instructor_link_title",{ns:'home'})}{' '}
				<Box as={'span'} color={'teal'} _hover={{ textDecoration: 'underline' }}>
					<Link href={'/become-instructor'}> {t("instructor_link_router",{ns:'home'})}</Link>
				</Box>
			</Text>
		</>
	);
};

export default Instructors;

