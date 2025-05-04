import {
 	Accordion,
 	AccordionButton,
 	AccordionIcon,
 	AccordionItem,
 	AccordionPanel,
 	Box,
 	Center,
 	Checkbox,
 	Flex,
 	Heading,
 	Icon,
 	Spinner,
 	Text,
 	useColorModeValue,
 } from '@chakra-ui/react';
 import { useRouter } from 'next/router';
 import { useEffect } from 'react';
	import { BsDot } from "react-icons/bs";
    import { getLessonTime } from 'src/helpers/time-helper';
 import { useActions } from 'src/hooks/useActions';
 import { useTypedSelector } from 'src/hooks/useTypedSelector';
 
 const Sidebar = () => {
 	const { sections, pendingSection } = useTypedSelector(
 		state => state.section
 	);
 	const { course } = useTypedSelector(state => state.course);
 	const { user } = useTypedSelector(state => state.user);
 	const { getSection } = useActions();
 	const router = useRouter();
 
 	useEffect(() => {
 		getSection({ courseId: course?._id, callback: () => {} });
 	}, [course]);
 
 	return (
 		<Box
 			position={'fixed'}
 			display={{ base: 'none', lg: 'block' }}
 			top={'12vh'}
 			right={'2vh'}
 			bottom={'2vh'}
 			w={'400px'}
 			bg={useColorModeValue('gray.50', 'gray.900')}
 			color={useColorModeValue('gray.700', 'gray.200')}
 			borderRadius={'lg'}
 			boxShadow={'xl'}
 			p={5}
 			zIndex={9}
 			transition={'all .5s'}
 			overflowY={'scroll'}
 			css={{
 				'&::-webkit-scrollbar': { width: '1px' },
 				'&::-webkit-scrollbar-track': { width: '1px' },
 				'&::-webkit-scrollbar-thumb': { background: 'transparent' },
 			}}
 		>
 			{pendingSection ? (
 				<Center alignItems={'center'} h={'full'}>
 					<Spinner
 						thickness='4px'
 						speed='0.65s'
 						emptyColor='gray.600'
 						color='green.200'
 						size='xl'
 					/>
 				</Center>
 			) : (
 				<>
 					<Heading fontSize={'2xl'}>Kurs bo'limlari</Heading>
 					<Flex align={'center'} gap={2} mt={3}>
 						{sections.length}ta Bo'lim <Icon as={BsDot} />{' '}
 						{sections
 							.map(c => c.lessons.length)
 							.reduce((a, b) => +a + +b, 0)}
 						ta Darslik
 					</Flex>
 
 					<Accordion mb={5} mr={2} allowToggle>
 						{sections.map(section => (
 							<AccordionItem
 								key={section._id}
 								borderRadius={'8px'}
 								mt={5}
 							>
 								<AccordionButton
 									height={'60px'}
 									background={useColorModeValue(
 										'gray.100',
 										'gray.700'
 									)}
 									borderRadius={'md'}
 									_hover={{}}
 									fontWeight={'bold'}
 									// onClick={() => onModule(id)}
 								>
 									<Box flex='1' textAlign='left'>
 										<AccordionIcon />
 										{section.title}
 									</Box>
 								</AccordionButton>
 								<AccordionPanel px={0} pb={4}>
 									{section.lessons.map(lesson => (
 										<Box
 											key={lesson._id}
 											_hover={{
 												background: useColorModeValue(
 													'gray.100',
 													'gray.800'
 												),
 											}}
 											transition={'all .3s ease'}
 											borderRadius={'md'}
 											// onClick={() => onLesson(lesson)}
 											bg={
 												router.query.lessonId === lesson._id
 													? useColorModeValue('gray.100', 'gray.800')
 													: 'transparent'
 											}
 											fontWeight={
 												router.query.lessonId === lesson._id
 													? 'bold'
 													: 'normal'
 											}
 											color={
 												router.query.lessonId === lesson._id
 													? 'green.500'
 													: 'normal'
 											}
 										>
 											<Flex
 												justify={'space-between'}
 												mt={2}
 												cursor={'pointer'}
 												align={'center'}
 												p={4}
 											>
 												<Flex align={'center'} w={'8%'}>
 													{user ? (
 														<Checkbox
 															colorScheme={'green'}
 															// onChange={e =>
 															// onComplete(e, lesson._id)
 															// }
 															defaultChecked={lesson.completed.includes(
 																user._id
 															)}
 															// cursor={
 															// 	isComplete ? 'progress' : 'pointer'
 															// }
 														/>
 													) : null}
 												</Flex>
 												<Flex w={'92%'} justify={'space-between'}>
 													<Text>{lesson.name}</Text>
 													<Text textDecoration={'underline'} ml={1}>
 														{getLessonTime(
 															lesson.hour,
 															lesson.minute,
 															lesson.second
 														)}
 													</Text>
 												</Flex>
 											</Flex>
 										</Box>
 									))}
 								</AccordionPanel>
 							</AccordionItem>
 						))}
 					</Accordion>
 				</>
 			)}
 		</Box>
 	);
 };
 
 export default Sidebar;