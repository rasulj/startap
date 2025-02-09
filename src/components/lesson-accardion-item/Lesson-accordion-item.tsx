import { Collapse, Flex, Icon, Text,  useColorModeValue, useDisclosure, useToast } from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
import { FiDelete } from 'react-icons/fi';
import LessonForm from '../lesson-form/lesson-forn';
import { LessonAccordionItemProps } from './lesson-accordion-item.props';
import {  useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';

const LessonAccordionItem = ({ lesson , sectionId }:LessonAccordionItemProps) => {
	const { isOpen, onToggle } = useDisclosure();
   const {deleteLesson, getSection}= useActions()
    const { course} = useTypedSelector( state => state.instructor)
   const toast = useToast()

   const onDelete =()=>{

	
	deleteLesson({lessonId:lesson._id , sectionId,
		callback:()=>{
       toast({ title: 'Successfully deleted lesson', position: 'top-right', isClosable: true });
					getSection({
						courseId:course?._id,
						callback: () => {},
					});
		}
	})
   }
	return (
		<>
			<Flex
				py={3}
				w={'full'}
				cursor={'pointer'}
				justify={'space-between'}
				align={'center'}
				borderColor={useColorModeValue('gray.200', 'gray.600')}
			>
				<Flex align={'center'} gap={2} w={'80%'}>
					<Icon as={FaEdit} onClick={onToggle} />
					<Text>{lesson.name}</Text>
				</Flex>
				<Flex gap={3}>
					<Icon as={FiDelete} cursor={'pointer'} onClick={onDelete} />
				</Flex>
			</Flex>
			<Collapse in={isOpen} animateOpacity>
				<LessonForm  sectionId={sectionId} values={lesson}  />
			</Collapse>
		</>
	);
};
export default LessonAccordionItem;