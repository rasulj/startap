export enum Language {
	EN = 'en',
	RU = 'ru',
	UZ = 'uz',
	TR = 'tr',
}
<<<<<<< HEAD
export type RoleUser ='ADMIN'|'USER'|'INSTRUCTOR'
export interface CardType {
 	id: string;
 	billing_details: {
 		address: {
 			city: string;
 			country: string;
 			line1: string;
 			line2: string;
 			postal_code: string;
 			state: string;
 		};
 		name: string;
 	};
 	card: {
 		brand: string;
 		exp_month: number;
 		exp_year: number;
 		last4: string;
 	};
 }

 export interface ProductsType {
 	default_price: {
 		id: string;
 		nickname: string;
 		unit_amount: number;
 	};
 	description: string;
 	id: string;
 	name: string;
 }
=======
export type RoleUser ='ADMIN'|'USER'|'INSTRUCTOR'
>>>>>>> 25889e5ed2447fe1262d2b1f9685c2f8c5e8b06a
