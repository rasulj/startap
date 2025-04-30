<<<<<<< HEAD
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex,  Input, Radio, RadioGroup, Spinner, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import ReactStars from "react-stars"
import SectionTitle from "src/components/section-title/section-title"
import {  coursesFilter } from "src/config/constants"
import { FilterCourseType, FilterItemProps, FilterItemPRrops } from "./courses-page-props"
import { AllCoursesCard } from "src/components"
import { useTranslation } from "react-i18next"
import { useTypedSelector } from "src/hooks/useTypedSelector"
import { AppService } from "src/services/app.service"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { CourseType } from "src/interfaces/course.interface"


const CoursesPageComponent = () => {

	const [filter, setFilter] = useState<FilterCourseType>({ id: '', category: '' });
 	const [allCourses, setAllCourses] = useState<CourseType[]>([]);
 	const [isLoading, setIsLoading] = useState<boolean>(false);
 
 	const { t } = useTranslation();
 	const { courses } = useTypedSelector(state => state.course);
 
 	useEffect(() => {
 		const getCoursesByLng = async (lng: string) => {
 			setIsLoading(true);
 			return await AppService.getCourses(lng);
 		};
 
 		if (filter.id == 'category') {
 			setAllCourses(courses.filter(c => c.category == filter.category));
 		} else if (filter.id == 'rating') {
 			setAllCourses(courses.filter(c => c.reviewAvarage >= Number(filter.category)));
 		} else if (filter.id == 'level') {
 			setAllCourses(courses.filter(c => c.level == filter.category));
 		} else if (filter.id == 'language') {
 			getCoursesByLng(filter.category).then(res => {
 				setIsLoading(false);
 				setAllCourses(res);
 			});
 		}
 	}, [filter]);
 
 	useEffect(() => {
 		setAllCourses(courses);
 	}, [courses]);
	 
=======
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex,  Input, Radio, RadioGroup, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import ReactStars from "react-stars"
import SectionTitle from "src/components/section-title/section-title"
import {  coursesFilter } from "src/config/constants"
import { FilterItemPRrops } from "./courses-page-props"
import { AllCoursesCard } from "src/components"
import { useTranslation } from "react-i18next"
import { useTypedSelector } from "src/hooks/useTypedSelector"


const CoursesPageComponent = () => {
	const {t} = useTranslation()
	const { courses } = useTypedSelector(state => state.instructor);
	console.log(courses);
	
>>>>>>> 25889e5ed2447fe1262d2b1f9685c2f8c5e8b06a
  return (
    <>
    <SectionTitle  title={t("title",{ns:'courses'})} subtitle={t("description",{ns:'courses'})}/>
    	<Box pos={'relative'} mt={5}>
						<Input
							h={14}
							w={'full'}
							bg={'white'}
							color={'gray.900'}
							placeholder={t("search_input_placeholder",{ns:'courses'}) || 'search...'}
							_placeholder={{ color: 'gray.500' }}
						/>
						<Button pos={'absolute'} right={2} top={2} colorScheme={'facebook'} zIndex={999}>
							{t("search_input_btn",{ns:'courses'})}
						</Button>
					</Box>
                <Flex mt={5} gap={5} direction={{ base: 'column', md: 'row' }} >
                    <Box w={{base:"100%",md:'30%'}}
					 p={5} h={'fit-content'} 
					 border={'1px'} 
					 borderRadius={'lg'}
					  color={useColorModeValue('gray.700','gray.200')}
					  >
<<<<<<< HEAD
					{isLoading ? (
 						<Flex h={'60vh'} justify={'center'} align={'center'}>
 							<Spinner />
 						</Flex>
 					) : (
 						<>
 							{allCourses.map(item => (
 								<AllCoursesCard key={item.title} course={item} />
 							))}
 						</>
 					)}
=======
						{coursesFilter.map( (item,idx)=>( <FilterItem item={item} idx={idx} key={idx} />)) }
>>>>>>> 25889e5ed2447fe1262d2b1f9685c2f8c5e8b06a
					</Box>
                    <Box w={{base:"100%",md:'70%'}}>
						{ courses.map((item ,idx) => <AllCoursesCard course ={item} key={idx}/>)}
					</Box>
                </Flex>
    </>
    
    
  )
}

export default CoursesPageComponent

<<<<<<< HEAD
const FilterItem = ({
	item,
	idx,
	setFilter,
}: {
	item: FilterItemProps;
	idx: number;
	setFilter: Dispatch<SetStateAction<FilterCourseType>>;
}) => {
	const { t } = useTranslation();

	const renderFilterItem = () => (
		<>
			{item.categoryList.map(c => (
				<Radio
					key={c.id}
					onChange={() => setFilter({ category: c.id, id: item.id })}
					value={c.id}
					colorScheme={'facebook'}
				>
					<Flex gap={2}>
						{item.id === 'rating' && (
							<ReactStars value={Number(c.id)} edit={false} color2={'#e59819'} />
						)}
						{t(c.name, { ns: 'courses' })}
					</Flex>
				</Radio>
			))}
		</>
	);

	return (
		<Accordion key={item.id} allowToggle defaultIndex={idx === 0 ? 0 : idx}>
			<AccordionItem borderTop={'none'}>
				<AccordionButton>
					<Text fontSize={'xl'} flex='1' textAlign='left'>
						{t(item.title, { ns: 'courses' })}
					</Text>
					<AccordionIcon />
				</AccordionButton>
				<AccordionPanel pb={4}>
					<RadioGroup>
						<Stack>{renderFilterItem()}</Stack>
					</RadioGroup>
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
};
=======
const FilterItem = ({item,idx}:{item:FilterItemPRrops,idx:number})=>{
	const {t} = useTranslation()
	const renderFilterItem =()=>{
		return(
			<RadioGroup>
						<Stack>
							{item.categoryList.map(c =>(
								<Radio value={c.id} colorScheme={'facebook'}>
									<Flex gap={2}>
										{ item.id === 'rating' && <ReactStars value={Number(c.id)} edit={false} color2="#e59819"/>}
										{t(c.name,{ns:'courses'})}	
									</Flex>
										
								</Radio>
								))}	
						</Stack>
					</RadioGroup>
		)
	}
	return(
        <Accordion key={idx}  defaultIndex={ idx == 0 ? 0 : idx} allowToggle>
            <AccordionItem borderTop={'none'}>
    			<AccordionButton borderTop={'none'}>
       				<Text fontSize={'xl'} flex='1' textAlign='left'>
   						 { t( item.title,{ns:'courses'}) }
    				</Text>
     				<AccordionIcon />
    			</AccordionButton>
  				 <AccordionPanel pb={4}>
			        { renderFilterItem()}
 	  			</AccordionPanel>
            </AccordionItem>
		 </Accordion>
	)
}
>>>>>>> 25889e5ed2447fe1262d2b1f9685c2f8c5e8b06a
