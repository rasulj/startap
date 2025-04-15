import * as userActions from './user/user.actions';
import { userSliceAction } from './user/user.slice';
import * as courseActions from './course/course.action';
import { courseSliceAction } from './course/course.slice';
import * as instructorAction from './instructor/instructor.action'
import { instructorSliceAction} from './instructor/instructor.slice'
import * as sectionAction from './section/section.actions'
import { sectionSliceAction} from './section/section.slice'
import * as lessonAction from './lesson/lesson.action'
import { lessonSliceAction} from './lesson/lesson.slice'
import { adminSliceAction } from './admin/admin.slice';
import * as adminActions from './admin/admin.action'

export const allActions = { ...userActions ,
    ...userSliceAction ,
    ...instructorSliceAction,
    ...instructorAction ,
    ...courseActions,
    ...courseSliceAction,
    ... sectionAction,
    ...sectionSliceAction,
    ...lessonAction,
    ...lessonSliceAction,
    ...adminSliceAction,
	...adminActions,
 }
