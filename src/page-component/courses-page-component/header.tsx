import {
	Box,
	Button,
	Divider,
	Flex,
	IconButton,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Stack,
	Text,
	useColorMode,
	useColorModeValue,
	useDisclosure,
	useToast,
} from '@chakra-ui/react';
import { Form, Formik, FormikValues } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { FaRegCommentDots, FaTelegram } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import { HiHeart } from 'react-icons/hi';
import { RiLogoutBoxLine } from 'react-icons/ri';
import ReactStars from 'react-stars';
import TextAreaField from 'src/components/text-area-field/text-area-field';
import TextFiled from 'src/components/text-filed/text-filed';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { DarkLogo, LightLogo } from 'src/icons';
import { CourseService } from 'src/services/course.service';

const defaultReview = {
	email: '',
	name: '',
	rating: 0,
	summary: '',
};

const Header = () => {
	const [reviewVal, setReviewVal] = useState(defaultReview);
	const [reviewId, setReviewId] = useState<string>();

	const { colorMode, toggleColorMode } = useColorMode();
	const { course } = useTypedSelector(state => state.course);
	const { user } = useTypedSelector(state => state.user);
	const router = useRouter();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const toast = useToast();

	useEffect(() => {
	const fetchUserReview = async () => {
		if (isOpen && course?._id && user?.id) {
			try {
				const response = await CourseService.getReviewByUser({
					course: course._id,
					user: user.id,
				});
				if (response?._id) {
					setReviewVal({
						...reviewVal,
						summary: response.summary,
						rating: response.rating,
						name: user.fullName || '',
						email: user.email || '',
					});
					setReviewId(response._id);
				}
			} catch (err) {
				console.error('Review fetch error:', err);
			}
		}
	};
	fetchUserReview();
}, [isOpen]);

	const onReviewSubmit = async (formikValues: FormikValues) => {
		try {
			if (!course?._id || !user?.id) {
				toast({
					title: 'Foydalanuvchi yoki kurs ma’lumotlari topilmadi.',
					status: 'error',
				});
				return;
			}

			if (reviewId) {
				await CourseService.editReview(
					{
						summary: formikValues.summary,
						rating: formikValues.rating,
					},
					reviewId
				);
				toast({ title: 'Successfully edited', status: 'success' });
				setReviewId('');
				onClose();
			} else {
				const response = await CourseService.getReviewByUser({
					course: course._id,
					user: user.id,
				});

				if (response?._id) {
					setReviewVal({
						...reviewVal,
						summary: response.summary,
						rating: response.rating,
					});
					setReviewId(response._id);
					toast({
						title: 'Already have review, you can change it now',
						status: 'warning',
					});
				} else {
					await CourseService.createReview({
						course: course._id,
						author: user.id,
						rating: formikValues.rating,
						summary: formikValues.summary,
					});
					toast({
						title: 'Successfully created new review',
						status: 'success',
					});
					onClose();
				}
			}
		} catch (error) {
			console.error('Review error:', error);
			toast({
				title: 'Xatolik yuz berdi!',
				status: 'error',
			});
		}
	};

	// Ma'lumotlar hali yuklanmagan bo‘lsa komponentni render qilmaymiz
	if (!course || !user) return null;

	return (
		<Box
			position={'fixed'}
			top={0}
			left={0}
			zIndex={99}
			right={0}
			h={'10vh'}
			bg={useColorModeValue('gray.50', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}
		>
			<Stack
				h={'10vh'}
				w={'90%'}
				mx={'auto'}
				direction={'row'}
				align={'center'}
				justify={'space-between'}
			>
				<Stack direction={'row'}>
					<Link href='/'>{colorMode === 'light' ? <DarkLogo /> : <LightLogo />}</Link>
				</Stack>

				<Stack direction={'row'} align={'center'}>
					<IconButton
						colorScheme={'green'}
						variant={'ghost'}
						onClick={toggleColorMode}
						icon={colorMode == 'light' ? <BsFillMoonStarsFill /> : <FiSun />}
						aria-label={'moon'}
					/>
					<IconButton
						icon={<FaTelegram />}
						onClick={() => window.open('https://t.me/')}
						aria-label={'telegram'}
						variant={'ghost'}
						colorScheme={'telegram'}
						display={{ base: 'none', md: 'flex' }}
					/>
					<IconButton
						onClick={onOpen}
						icon={<FaRegCommentDots />}
						aria-label={'comment'}
						variant={'outline'}
						colorScheme={'green'}
						display={{ base: 'none', md: 'flex' }}
					/>
					<Button
						leftIcon={<HiHeart color='red' />}
						onClick={() => window.open('https://t.me/')}
						colorScheme={'green'}
						display={{ base: 'none', md: 'flex' }}
					>
						Sponsor
					</Button>
					<IconButton
						onClick={() => router.push(`/course/${course.slug}`)}
						icon={<RiLogoutBoxLine />}
						aria-label={'logout'}
						variant={'outline'}
						colorScheme={'red'}
					/>
				</Stack>
			</Stack>

			<Modal isOpen={isOpen} onClose={onClose} size='2xl'>
				<ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)' />
				<ModalContent>
					<ModalHeader>Izoh</ModalHeader>
					<ModalCloseButton />
					<Divider />
					<Formik
						initialValues={reviewVal}
						onSubmit={onReviewSubmit}
						enableReinitialize
					>
						{formik => (
							<Form>
								<ModalBody>
									<Text fontWeight='bold' mb='1rem'>
										Kurs haqida o'z fikringizni yozishingiz mumkin.
									</Text>
									<Flex gap={2}>
										<TextFiled name='email' label='Email manzilingiz' disabled />
										<TextFiled name='name' label='Ismingiz' disabled />
									</Flex>
									<Box mt={2}>
										<ReactStars
											edit
											size={20}
											value={formik.values.rating}
											onChange={e => formik.setFieldValue('rating', e)}
										/>
									</Box>
									<Box mt={2}>
										<TextAreaField
											name='summary'
											label='Izohingiz'
											resize='none'
											height='150px'
											placeholder={
												"Men ushbu kursni ko'rib bir texnologiyani to'liq o'rgana oldim. Kurslar ham amaliy ham nazariy ekan...."
											}
										/>
									</Box>
								</ModalBody>
								<ModalFooter>
									<Button type='submit' colorScheme='facebook' w='full' h={14}>
										{reviewId ? 'Edit' : 'Submit'}
									</Button>
								</ModalFooter>
							</Form>
						)}
					</Formik>
				</ModalContent>
			</Modal>
		</Box>
	);
};

export default Header;