<<<<<<< HEAD
import axios from 'axios';
import $axios from 'src/api/axios';
 import { API_URL, getPaymentUrl } from 'src/config/api.config';
=======
import $axios from 'src/api/axios';
 import { getPaymentUrl } from 'src/config/api.config';
>>>>>>> 25889e5ed2447fe1262d2b1f9685c2f8c5e8b06a
 
 export const PaymentService = {
 	async paymentBooks(price: number) {
 		try {
 			const { data } = await $axios.post(`${getPaymentUrl('books')}`, { price });
 
 			return data;
 		} catch (error) {
 			console.log(error);
 		}
 	},
<<<<<<< HEAD

 	async productList() {
 		try {
 			const { data } = await axios.get(`${API_URL}${getPaymentUrl('list-products')}`);
 
 			return data;
 		} catch (error) {
 			console.log(error);
 		}
 	},
=======
>>>>>>> 25889e5ed2447fe1262d2b1f9685c2f8c5e8b06a
 };