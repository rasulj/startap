import {  userReducer} from './user/user.slice'
import { instructorReducer} from './instructor/instructor.slice'
export const reducer={
    user:userReducer,
    instructor:instructorReducer
}