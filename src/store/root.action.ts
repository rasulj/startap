import * as userActions from './user/user.actions';
import { userSliceAction } from './user/user.slice';
import * as instructorAction from './instructor/instructor.action'
import { instructorSliceAction} from './instructor/instructor.slice'
export const allActions = { ...userActions ,...userSliceAction ,...instructorSliceAction,...instructorAction }
