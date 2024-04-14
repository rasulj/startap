import * as userActions from './user/user.actions';
import { userSliceAction } from './user/user.slice';
import * as courseActions from './course/course.action';
import { courseSliceAction } from './course/course.slice';
import * as instructorAction from './instructor/instructor.action'
import { instructorSliceAction} from './instructor/instructor.slice'

export const allActions = { ...userActions ,
    ...userSliceAction ,
    ...instructorSliceAction,
    ...instructorAction ,
    ...courseActions,
    ...courseSliceAction
 }
