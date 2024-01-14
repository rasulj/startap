import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex,  Input, Radio, RadioGroup, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import ReactStars from "react-stars"
import SectionTitle from "src/components/section-title/section-title"
import { courses, coursesFilter } from "src/config/constants"
import { FilterItemPRrops } from "./courses-page-props"
import { AllCoursesCard } from "src/components"
import { useTranslation } from "react-i18next"


const CoursesPageComponent = () => {
	const {t} = useTranslation()
  return (
    <>
    <SectionTitle  title={t("title",{ns:'courses'})} subtitle={t("description",{ns:'courses'})}/>
    	<Box pos={'relative'} mt={5}>
						<Input
							h={14}
							w={'full'}
							bg={'white'}
							color={'gray.900'}
							placeholder={t("search_input_placeholder",{ns:'course'}) || 'search...'}
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
						{coursesFilter.map( (item,idx)=>( <FilterItem item={item} idx={idx} key={idx} />)) }
					</Box>
                    <Box w={{base:"100%",md:'70%'}}>
						{ courses.map((item ,idx) => <AllCoursesCard course ={item} key={idx}/>)}
					</Box>
                </Flex>
    </>
    
    
  )
}

export default CoursesPageComponent

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