import Carousel from "react-multi-carousel"
import SectionTitle from "../section-title/section-title"
import { Box, Icon,  Stack,  Text,  useColorModeValue } from "@chakra-ui/react"
import { categories,  } from "src/config/constants"
import { categoryCarousel } from "src/config/carusel"
import { useTranslation } from "react-i18next"



 const Categories = () => {
  const backgroundColor = useColorModeValue("gray.100",'gray.900');
  const fill= useColorModeValue("#020288",'gray.600')
  const {t} =useTranslation()
  return (
  <>
    <SectionTitle title={t("category_title",{ns:'home'})} subtitle={t("category_description",{ns:'home'})} />
   <Carousel responsive={categoryCarousel}
    showDots={false} arrows={false} autoPlay autoPlaySpeed={2000} infinite
     >
    { categories.map(item =>(
      <Box key={item.id}
       backgroundColor={backgroundColor}
       h={200} textAlign={'center'} p={5} mx={2}
       borderRadius={'lg'} cursor={'pointer'}
       >
         <Icon as={item.icon} w={20} h={20} fill={fill}/>
         <Text mt={2} fontSize={'large'}> { t(item.name,{ns:'home'})}</Text>
      </Box>
    ))}
    
   </Carousel>
  </>
  
  )
}
export default Categories
