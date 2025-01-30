import { Box, Button, Divider, Flex, Heading, HStack, Icon, Stack, Text, Toast } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { CiViewList } from 'react-icons/ci';
import { FiEdit2 } from 'react-icons/fi';
import { HiOutlineStatusOnline } from 'react-icons/hi';
import { SiGoogleanalytics } from 'react-icons/si';
import { VscOpenPreview } from 'react-icons/vsc';
import { InstructoCoursesCardProps } from './instructor-courses-card.props';
import { loadImage } from 'src/helpers/image.helper';
import { useRouter } from 'next/router';
import { useActions } from 'src/hooks/useActions';

const InstructorCoursesCard: FC<InstructoCoursesCardProps> = ({ item }): JSX.Element => {
	
	const { deleteCourse}= useActions()
	const router = useRouter()
	
const onDelete = ()=>{
const isAgree = confirm('Are you sure?')

if(isAgree){
	deleteCourse({
		courseId:item._id ,
		callback:()=>{
				Toast({
						title: 'Successfully deleted',
						description: item.title,
						position: 'top-right',
						isClosable: true,
					});
					setTimeout(()=>{
						router.replace(router.asPath)
					},1500)
	}})
}
}

	return (
		<HStack key={item.title} p={5} boxShadow={'dark-lg'} mt={5} borderRadius={'lg'}>
			<Stack spacing={5} w={'70%'}>
				<Text fontSize={'20px'} color={'facebook.500'} fontWeight={'bold'}>
					{item.level}
				</Text>
				<Heading>{item.title}</Heading>
				<HStack>
					<Flex align={'center'} gap={1}>
						<Icon as={CiViewList} />
						<Text>{item.lessonCount} lesson</Text>
					</Flex>
					<Flex align={'center'} gap={1}>
						<Icon as={AiOutlineClockCircle} />
						<Text>{item.totalHour} hours</Text>
					</Flex>
					<Flex align={'center'} gap={1}>
						<Icon as={SiGoogleanalytics} />
						<Text>{item.level}</Text>
					</Flex>
				</HStack>
				<Divider />
				<HStack>
					<Button rightIcon={<VscOpenPreview />}>Preview</Button>
					<Button rightIcon={<FiEdit2 />} onClick={()=> router.push(`/instructor/edit-courses/${item.slug}`)}> Edit</Button>
					<Button rightIcon={<BsTrash />} onClick={onDelete}>Delete</Button>
					<Button rightIcon={<HiOutlineStatusOnline />} >curriculum</Button>
				</HStack>
			</Stack>
			<Box w={'30%'} h={'300px'} position={'relative'}>
				<Image
					fill
					src={loadImage(item.previewImage)}
					alt={item.title}
					style={{ objectFit: 'cover', borderRadius: '10px' }}
				
				/>
			</Box>
		</HStack>
	);
};

export default InstructorCoursesCard;

