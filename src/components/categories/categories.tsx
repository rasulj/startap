import Carousel from "react-multi-carousel"
import SectionTitle from "../section-title/section-title"
import { Box, Icon,  Text,  useColorModeValue } from "@chakra-ui/react"
import { categories, responsive } from "src/config/constants"



 const Categories = () => {
  const backgroundColor = useColorModeValue("gray.100",'gray.900');
  const fill= useColorModeValue("#020288",'gray.600')
  return (
  <>
    <SectionTitle title='Top categories' subtitle='Learn our courses with high rating' />
   <Carousel responsive={responsive}
    showDots={false} arrows={false} autoPlay autoPlaySpeed={2000} infinite
  
     >
    { categories.map(item =>(
      <Box key={item.id}
       backgroundColor={backgroundColor}
       h={200} textAlign={'center'} p={5} mx={2}
       borderRadius={'lg'} cursor={'pointer'}
       >
         <Icon as={item.icon} w={20} h={20} fill={fill}/>
         <Text mt={2} fontSize={'large'}> { item.name}</Text>
      </Box>
    ))}
   </Carousel>
  </>
  )
}
export default Categories
