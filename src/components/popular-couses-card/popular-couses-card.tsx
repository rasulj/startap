import { Divider, Flex, HStack, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react"
import ReactStars from "react-stars"
import { PopularCousesCardProps } from "./popular-couses-card.props"
import { SiGoogleanalytics } from "react-icons/si"
import { AiOutlineClockCircle } from "react-icons/ai"
import { CiViewList } from "react-icons/ci"



const PopularCousesCard = ({courses}:PopularCousesCardProps):JSX.Element => {
  return (
    <Stack key={courses.title} spacing={3} p={3} 
		cursor={'pointer'}
		 
		 > 
         <Image src={courses.image} alt={courses.title} borderRadius={'lg'} objectFit={'cover'} h={'210px'} w={'300px'}/>
           <HStack>
            <Text color={'#e59819'}> {courses.reviewAvarage.toFixed(1)}</Text>
            <ReactStars edit={false} value={courses.reviewAvarage} color2={'#e59819'}/>
            <Text opacity={'.8'}>( {courses.reviewCount})</Text>
           </HStack>
           	<Heading fontSize={'xl'}>{courses.title}</Heading>
						<HStack>
							<Flex align={'center'} gap={1}>
								<Icon as={CiViewList} />
								<Text boxSize={'fit-content'}> {courses.lessonCount} Lesson</Text>
							</Flex>
							<Flex align={'center'} gap={1}>
								<Icon as={AiOutlineClockCircle} />
								<Text>{courses.totalHour} Hour</Text>
							</Flex>
							<Flex align={'center'} gap={1}>
								<Icon as={SiGoogleanalytics} />
								<Text>{courses.level}</Text>
							</Flex>
						</HStack>
						<Divider />
              <Flex justifyContent={'space-between'} alignItems={'center'}>
                <HStack>
                  <Image src={courses.author.avatar} alt={courses.author.firstName} h={'50px'} w={"50px"} borderRadius={'full'}/>
                  <Text> {courses.author.firstName} {courses.author.lastName[0]}.</Text>
                </HStack>
                  <Text> {courses.price.toLocaleString('en-US',{style:'currency', currency:'USD'})}</Text>
              </Flex>
        </Stack>
  )
}

export default PopularCousesCard