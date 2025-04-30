import { ReactNode } from "react";
import { CourseType } from "src/interfaces/course.interface";
import { InstructorType } from "src/interfaces/instructor.interface";
import {BooksType}from 'src/interfaces/books.interface'
import { CardType } from "src/interfaces/constants.interface";
import { ProductsType } from "../interfaces/constants.interface";
export interface LayautProps{
    children:ReactNode
}
export interface AppProviderProps {
 	courses: CourseType[];
 	course: CourseType;
	instructors:InstructorType[],
	books: BooksType[];
	cards: CardType[];
	products: ProductsType[];
 	
 }