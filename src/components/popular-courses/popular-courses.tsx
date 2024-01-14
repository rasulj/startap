import { Divider, Flex, Heading, HStack, Icon, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import SectionTitle from '../section-title/section-title';
import ReactStars from 'react-stars';
import { CiViewList } from 'react-icons/ci';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { SiGoogleanalytics } from 'react-icons/si';
import { courseCarousel } from 'src/config/carusel';
import { useTranslation } from 'react-i18next';
import { courses } from 'src/config/constants';
import PopularCousesCard from '../popular-couses-card/popular-couses-card';



const PopularCourses = () => {
const {t}= useTranslation()
  return (
    <>
     <SectionTitle title={t("popular_courses_title",{ns:'home'})} subtitle={t("popular_courses_description",{ns:'home'})} />
     <Carousel responsive={courseCarousel} showDots={false} arrows={true} autoPlay={true} autoPlaySpeed={5000} infinite>
       { courses.map(item =>( <PopularCousesCard courses={item} key={item.title}/>))}
      </Carousel>
    </>
  )
}

export default PopularCourses


