import { ReactNode } from "react";
import { CourseType } from "src/interfaces/course.interface";
import { InstructorType } from "src/interfaces/instructor.interface";
import {BooksType}from 'src/interfaces/books.interface'
<<<<<<< HEAD
import { CardType } from "src/interfaces/constants.interface";
import { ProductsType } from "../interfaces/constants.interface";
=======
>>>>>>> 25889e5ed2447fe1262d2b1f9685c2f8c5e8b06a
export interface LayautProps{
    children:ReactNode
}
export interface AppProviderProps {
 	courses: CourseType[];
 	course: CourseType;
	instructors:InstructorType[],
	books: BooksType[];
<<<<<<< HEAD
	cards: CardType[];
	products: ProductsType[];
=======
>>>>>>> 25889e5ed2447fe1262d2b1f9685c2f8c5e8b06a
 	
 }