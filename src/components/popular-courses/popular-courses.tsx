
import Carousel from 'react-multi-carousel';
import SectionTitle from '../section-title/section-title';
import { courseCarousel } from 'src/config/carusel';
import { useTranslation } from 'react-i18next';

import PopularCousesCard from '../popular-couses-card/popular-couses-card';
import { useTypedSelector } from 'src/hooks/useTypedSelector';



const PopularCourses = () => {
const {t}= useTranslation()

const { courses } = useTypedSelector(state => state.course);


  return (
    <>
     <SectionTitle title={t("popular_courses_title",{ns:'home'})} subtitle={t("popular_courses_description",{ns:'home'})} />
     <Carousel responsive={courseCarousel} showDots={false} arrows={true} autoPlay={true} autoPlaySpeed={5000} infinite>
       { courses.map(item =>( <PopularCousesCard item={item} key={item.title}/>))}
      </Carousel>
    </>
  )
}

export default PopularCourses


