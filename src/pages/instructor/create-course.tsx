import { NextPage } from "next";
import { withInstructorLayout } from "src/layouts/instructor";
import { InstructorCreateCourseComponent } from "src/page-component";


const CreateCourse:NextPage = ()=>{
  return( 
<InstructorCreateCourseComponent/>
  )  
}
export default withInstructorLayout(CreateCourse)