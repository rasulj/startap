
import { useRouter } from 'next/router'
import { withLayout } from 'src/layousts/layout'
import Seo from 'src/layousts/seo/seo'
import { DetailedCourseComponent } from 'src/page-component'

const DetailedCoursePage = () => {
  const router = useRouter()
  return (
   <Seo metaTitle={`Sammi course | ${router.query.slug}`} >
    <DetailedCourseComponent/>
   </Seo>
   
   
  )
}

export default withLayout(DetailedCoursePage) 
