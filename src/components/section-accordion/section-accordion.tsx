import {
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Button,
	Center,
	Collapse,
	Flex,
	Icon,
	List,
	useDisclosure,
	useToast,
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdDelete, MdEdit } from 'react-icons/md';
import LessonAccordionItem from '../lesson-accardion-item/Lesson-accordion-item';
import LessonForm from '../lesson-form/lesson-forn';
import { SectionAccordionProps } from './section-accordion-props';
import { useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { DragEvent } from 'react';


const SectionAccordion = ({ section ,onOpen,setSectionTitle,sectionIdx}:SectionAccordionProps) => {
	const { isOpen, onToggle } = useDisclosure();

 const { deleteSection, getSection , dragSection} = useActions();

	const {  sections ,isLoading} = useTypedSelector(state => state.section);
 const { course} = useTypedSelector( state => state.instructor)

 const toast = useToast()

	const onDelete = () => {
		const isAgree = confirm('Are you sure?');
		if (isAgree) {
			deleteSection({
				sectionId: section._id,
				courseId: course?._id, 
				callback: () => {
					toast({ title: 'Successfully deleted section', position: 'top-right', isClosable: true });
					getSection({
						courseId: course?._id,
						callback: () => {},
					});
				},
			});
		}
	};
const onEditSection = () => {
		onOpen();
		setSectionTitle({ title: section.title, id: section._id });
	};
	
	const onDragStartSection = (e: DragEvent<HTMLButtonElement>) => {
		e.dataTransfer.setData('sectionIdx', String(sectionIdx));
	};

	const onDropSection = (e: DragEvent<HTMLButtonElement>) => {
		const movingSectionIndex = Number(e.dataTransfer.getData('sectionIdx'));
		const allSections = [...sections];
		const movingItem = allSections[movingSectionIndex];
		allSections.splice(movingSectionIndex, 1);
		allSections.splice(sectionIdx, 0, movingItem);
		const editedIdx = allSections.map(c => c._id);
		dragSection({
			sections: editedIdx,
			courseId: course?._id,
			callback: () => {
				getSection({
					courseId: course?._id,
					callback: () => {},
				});
			},
		});
	};

return (
		<AccordionItem>

			<AccordionButton h={14} p={2} fontWeight={'bold'} cursor={isLoading ? 'progress' : 'pointer'}
			    draggable
				onDragStart={onDragStartSection}
				onDrop={onDropSection}>
				<Flex w={'100%'} align={'center'} justify={'space-between'}>
					<Flex align={'center'} gap={2}>
						<Icon as={AiOutlineMenu} w={5} h={5} />
						{section.title}
					</Flex>
					<Flex fontSize={'15px'} align={'center'} gap={3}>
						<Icon as={MdEdit} w={5} h={5} onClick={onEditSection} />
						
						<Icon as={MdDelete} w={5} h={5} onClick={onDelete} />
						<AccordionIcon />
					</Flex>
				</Flex>
			</AccordionButton>
			<AccordionPanel pb={4}>
				<List onDragOver={e => e.preventDefault()}>
					{section.lessons.map((lesson, idx) => (
						<LessonAccordionItem
							key={lesson._id}
							lessonIdx={idx}
							lesson={lesson}
							sectionId={section._id}
						/>
					))}
				</List>
				<Center>
					<Button
						variant={'unstyled'}
						color={'facebook.200'}
						_hover={{ textDecoration: 'underline' }}
						onClick={onToggle}
					>
						{isOpen ? 'Close form' : 'Create lesson'}
					</Button>
				</Center>
				<Collapse in={isOpen} animateOpacity>
					<LessonForm  sectionId={section._id}/>
				</Collapse>
			</AccordionPanel>
		</AccordionItem>
	);
};
export default SectionAccordion;