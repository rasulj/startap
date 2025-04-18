import {
 	Button,
 	ButtonGroup,
 	Table,
 	TableCaption,
 	TableContainer,
 	Tbody,
 	Td,
 	Th,
 	Thead,
 	Tr,
	  useToast,
 } from '@chakra-ui/react';
 import { AiOutlineFieldNumber, AiOutlineReload } from 'react-icons/ai';
import { AdminInstructorProps } from './admin-instructor-table.props';
import { useTranslation } from 'react-i18next';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { useRouter } from 'next/router';
import { useActions } from 'src/hooks/useActions';

 const AdminInstructorTable  = ({instructors ,approved}:AdminInstructorProps) => {
  
	const { approveInstructor,  clearAdminError,deleteInstructor  } = useActions();
 	const { isLoading, error } = useTypedSelector(state => state.admin);
 	const { t } = useTranslation();
 	const router = useRouter();
 	const toast = useToast();
 
 	const approveInstructorHandler = (instructorId: string) => {
 		approveInstructor({
 			instructorId,
 			callback: () => {
 				router.replace(router.asPath);
 				toast({
 			title: t('successfully_approve', { ns: 'admin' }),
 					status: 'success',
 					position: 'top-right',
 					isClosable: true,
 				});
 			},
 		});
 	};

 	const deleteInstructorHandler = (instructorId: string) => {
 		deleteInstructor({
 			instructorId,
 			callback: () => {
 				router.replace(router.asPath);
 				toast({
 					 title: t('successfully_deleted', { ns: 'instructor' }),
 					status: 'info',
 					position: 'top-right',
 					isClosable: true,
 				});
 			},
 		});
 	};
 	return (
 		<TableContainer>
 			<Table variant='striped' colorScheme='teal'>
 				<TableCaption>
 					<Button colorScheme={'facebook'} variant={'outline'} rightIcon={<AiOutlineReload />}>
 						{t('more', { ns: 'instructor' })}...
 					</Button>
 				</TableCaption>
 				<Thead>
 					<Tr>
 						<Th isNumeric>
 							<AiOutlineFieldNumber fontSize={20} />
 						</Th>
 						<Th>{t('email', { ns: 'instructor' })}</Th>
 							<Th>{t('full_name', { ns: 'instructor' })}</Th>
 							<Th>{t('job', { ns: 'admin' })}</Th>
 							<Th>{t('social_media', { ns: 'admin' })}</Th>
 							<Th>{t('actions', { ns: 'admin' })}</Th>
 					</Tr>
 				</Thead>
 						<Tbody>
 						{instructors.map((instructor, idx) => (
 							<Tr key={idx}>
 								<Td>{idx + 1}</Td>
 								<Td>{instructor.author.email}</Td>
 								<Td>{instructor.author.fullName}</Td>
 								<Td>{instructor.author.jop}</Td>
 								<Td>{instructor.socialMedia}</Td>
 								<Td>
 									<ButtonGroup variant='outline'>
 										{approved ? (
 											<Button
 												isLoading={isLoading}
 												size={'sm'}
 												colorScheme={'red'}
 												onClick={() => deleteInstructorHandler(instructor._id)}
 											>
 												{t('del', { ns: 'admin' })}
 											</Button>
 										) : (
 											<Button
 												size={'sm'}
 												colorScheme='facebook'
 												isLoading={isLoading}
 												onClick={() => approveInstructorHandler(instructor._id)}
 											>
 											{t('appr', { ns: 'admin' })}
 											</Button>
 										)}
 									</ButtonGroup>
 								</Td>
 							</Tr>
 						))}
 					</Tbody>
 			</Table>
 		</TableContainer>
 	);
 };
 
 export default AdminInstructorTable;