import {  userReducer} from './user/user.slice'
import { instructorReducer} from './instructor/instructor.slice'
import { courseReducer } from './course/course.slice'
import { sectionReducer} from './section/section.slice'
import { lessonReducer } from './lesson/lesson.slice'

export const reducer={
    user:userReducer,
    instructor:instructorReducer,
    course:courseReducer,
    section:sectionReducer,
    lesson:lessonReducer
}