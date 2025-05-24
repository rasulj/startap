import { Collapse, Flex, Icon, Text,  useColorModeValue, useDisclosure, useToast } from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
import { FiDelete } from 'react-icons/fi';
import LessonForm from '../lesson-form/lesson-form';
import { LessonAccordionItemProps } from './lesson-accordion-item.props';
import {  useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { DragEvent } from 'react';
import { LessonType, SectionType } from 'src/interfaces/instructor.interface';
import { useTranslation } from 'react-i18next';

const LessonAccordionItem = ({ lesson , sectionId ,lessonIdx}:LessonAccordionItemProps) => {
	const { isOpen, onToggle } = useDisclosure();
   const {deleteLesson, getSection,editSection }= useActions()
    const { course} = useTypedSelector( state => state.instructor)
		const { sections } = useTypedSelector(state => state.section);
   const toast = useToast()
    const {t}= useTranslation()
   const onDelete =()=>{

	deleteLesson({lessonId:lesson._id , sectionId,
		callback:()=>{
        toast({
						title: t('successfully_deleted', { ns: 'instructor' }),
						position: 'top-right',
						isClosable: true,
					});

		}
	})
   }

   	const onDragStartLesson = (e: DragEvent<HTMLDivElement>) => {
		e.dataTransfer.setData('lessonIdx', String(lessonIdx));
	};

	const onDropLesson = (e: DragEvent<HTMLDivElement>) => {
		const movingLessonIndex = Number(e.dataTransfer.getData('lessonIdx'));
		const currentSection = sections.find(c => c._id == sectionId) as SectionType;
		const allLessons = [...currentSection.lessons] as LessonType[];
		const movingItem = allLessons[movingLessonIndex];
		allLessons.splice(movingLessonIndex, 1);
		allLessons.splice(lessonIdx, 0, movingItem);
		const editedIdx = allLessons.map(c => c._id).filter((id): id is string => id !== undefined);
		editSection({
			sectionId,
			lessons: editedIdx ,
			callback: () => {},
		});
	};
	return (
		<>
			<Flex
				draggable
				onDragStart={onDragStartLesson}
				onDrop={onDropLesson}
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
				<LessonForm  sectionId={sectionId} values={lesson} onToggle={onToggle}/>
			</Collapse>
		</>
	);
};
export default LessonAccordionItem;