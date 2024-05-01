import {  userReducer} from './user/user.slice'
import { instructorReducer} from './instructor/instructor.slice'
import { courseReducer } from './course/course.slice'
export const reducer={
    user:userReducer,
    instructor:instructorReducer,
    course:courseReducer
}