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
 } from '@chakra-ui/react';
 import { AiOutlineFieldNumber, AiOutlineReload } from 'react-icons/ai';
 import { instructorUsers } from 'src/config/constants';
import { AdminCourseCardProps } from '../admin-course-card/admin-cours-card.props';
import { AdminInstructorProps } from './admin-instructor-table.props';
 
 const AdminInstructorTable  = ({instructors ,approved}:AdminInstructorProps) => {
 	return (
 		<TableContainer>
 			<Table variant='striped' colorScheme='teal'>
 				<TableCaption>
 					<Button colorScheme={'facebook'} variant={'outline'} rightIcon={<AiOutlineReload />}>
 						more...
 					</Button>
 				</TableCaption>
 				<Thead>
 					<Tr>
 						<Th isNumeric>
 							<AiOutlineFieldNumber fontSize={20} />
 						</Th>
 						<Th>Email</Th>
 						<Th>FullName</Th>
 						<Th>Job</Th>
 						<Th>Social media</Th>
 						<Th>Actions</Th>
 					</Tr>
 				</Thead>
 				<Tbody>
 					{instructors.map((user, idx) => (
 						<Tr key={idx}>
 							<Td>{idx + 1}</Td>
 							<Td>{user.author.email}</Td>
 							<Td>{user.fullName}</Td>
 							<Td>{user.jop}</Td>
 							<Td>{user.socialMedia}</Td>
 							<Td>
 								<ButtonGroup variant='outline'>
 									{approved ? (
 										<Button size={'sm'} colorScheme={'red'}>
 											Del
 										</Button>
 									) : (
 										<Button size={'sm'} colorScheme='facebook'>
 											Appr
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