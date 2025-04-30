import { createSlice, PayloadAction } from '@reduxjs/toolkit';
 import { BooksType } from 'src/interfaces/books.interface';
 import { CourseType } from 'src/interfaces/course.interface';
import { CartInitialState } from './cart-interface';
<<<<<<< HEAD
import { ProductsType } from 'src/interfaces/constants.interface';
=======
>>>>>>> 25889e5ed2447fe1262d2b1f9685c2f8c5e8b06a

 
 const initialState: CartInitialState = {
 	books: [],
 	courses: [],
<<<<<<< HEAD
	product: {} as ProductsType,
=======
>>>>>>> 25889e5ed2447fe1262d2b1f9685c2f8c5e8b06a
 };
 
 export const cartSlice = createSlice({
 	name: 'cart',
 	initialState,
 	reducers: {
 		addBookToCart: (state, { payload }: PayloadAction<BooksType>) => {
 			state.books = [...state.books, payload];
			
 		},
<<<<<<< HEAD
		addProductToCart: (state, { payload }: PayloadAction<ProductsType>) => {
 			state.product = payload;
 		},
 		addCourseToCart: (state, { payload }: PayloadAction<CourseType>) => {
 			state.courses = [...state.courses, payload];
 		},
 		removeBookFromCart: (state, { payload }: PayloadAction<string>) => {
 			const newArr = state.books.filter(c => c._id !== payload);
 			state.books = newArr;
 		},
 		removeCourseFromCart: (state, { payload }: PayloadAction<string>) => {
=======
 		addCourseToCart: (state, { payload }: PayloadAction<CourseType>) => {
 			state.courses = [...state.courses, payload];
 		},
 		removeBookToCart: (state, { payload }: PayloadAction<string>) => {
 			const newArr = state.books.filter(c => c._id !== payload);
 			state.books = newArr;
 		},
 		removeCourseToCart: (state, { payload }: PayloadAction<string>) => {
>>>>>>> 25889e5ed2447fe1262d2b1f9685c2f8c5e8b06a
 			const newArr = state.courses.filter(c => c._id !== payload);
 			state.courses = newArr;
 		},
 	},
 });
 
 export const cartReducer = cartSlice.reducer;
 export const cartSliceAction = cartSlice.actions;