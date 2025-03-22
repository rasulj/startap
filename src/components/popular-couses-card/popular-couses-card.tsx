import { Avatar, Box, Divider, Flex, HStack, Heading, Icon,  Stack, Text } from "@chakra-ui/react"
import ReactStars from "react-stars"
import { PopularCousesCardProps } from "./popular-couses-card.props"
import { SiGoogleanalytics } from "react-icons/si"
import { AiOutlineClockCircle } from "react-icons/ai"
import { CiViewList } from "react-icons/ci"
import Image from "next/image"
import { loadImage } from "src/helpers/image.helper"



const PopularCousesCard = ({item}:PopularCousesCardProps):JSX.Element => {
	
	
  return (
    <Stack key={item.title} spacing={3} p={3} 
		cursor={'pointer'}
		 
		 > 
       <Box pos={'relative'} w={'full'} h={'210px'}>
 				<Image
 					src={loadImage(item.previewImage)}
 					alt={item.title}
 					fill
 					style={{ objectFit: 'cover', borderRadius: '10px' }}
 				/>
 			</Box>
           <HStack>
            <Text color={'#e59819'}> 4</Text>
            <ReactStars edit={false} value={2} color2={'#e59819'}/>
            <Text opacity={'.8'}> 2</Text>
           </HStack>
           	<Heading fontSize={'xl'}>{item.title}</Heading>
						<HStack>
							<Flex align={'center'} gap={1}>
								<Icon as={CiViewList} />
								<Text boxSize={'fit-content'}> {item.lessonCount} Lesson</Text>
							</Flex>
							<Flex align={'center'} gap={1}>
								<Icon as={AiOutlineClockCircle} />
								<Text>{item.totalHour} Hour</Text>
							</Flex>
							<Flex align={'center'} gap={1}>
								<Icon as={SiGoogleanalytics} />
								<Text>{item.level}</Text>
							</Flex>
						</HStack>
						<Divider />
              <Flex justifyContent={'space-between'} alignItems={'center'}>
                <HStack>
                 <Avatar src={item.author.avatar} name={item.author.fullName} />
 					<Text>{item.author.fullName}</Text>
                </HStack>
                  <Text> {item.price.toLocaleString('en-US',{style:'currency', currency:'USD'})}</Text>
              </Flex>
        </Stack>
  )
}

export default PopularCousesCard