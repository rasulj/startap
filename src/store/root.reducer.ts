import {  userReducer} from './user/user.slice'
import { instructorReducer} from './instructor/instructor.slice'
import { courseReducer } from './course/course.slice'
import { sectionReducer} from './section/section.slice'
import { lessonReducer } from './lesson/lesson.slice'
import { adminReducer } from './admin/admin.slice'
import { booksReducer } from './books/books.slice'
import { cartReducer } from './cart/cart-slice'


export const reducer={
    user:userReducer,
    instructor:instructorReducer,
    course:courseReducer,
    section:sectionReducer,
    lesson:lessonReducer,
    admin: adminReducer,
    books: booksReducer,
    cart: cartReducer,
}