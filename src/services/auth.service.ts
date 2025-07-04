import axios from 'axios';
import Cookies from 'js-cookie';
import $axios from 'src/api/axios';
import { API_URL, getAuthUrl, getMailUrl, getUserUrl} from 'src/config/api.config';
import { removeTokensCookie,saveTokenCookies } from 'src/helpers/auth.helper';
import { UserType } from 'src/interfaces/user.interface';
import { AuthUserResponse } from 'src/store/user/user.interface';

export const AuthService = {
	async register(email: string, password: string) {
		const response = await axios.post<AuthUserResponse>(`${API_URL}${getAuthUrl('register')}`, {
			email,
			password,
		});

		if (response.data.accessToken) {
			saveTokenCookies(response.data);
		}

		return response;
	},

	async login(email: string, password: string) {
		const response = await axios.post<AuthUserResponse>(`${API_URL}${getAuthUrl('login')}`, {
			email,
			password,
		});

		if (response.data.accessToken) {
			saveTokenCookies(response.data);
		}

		return response;
	},

		async checkUser(email: string, ) {
		const response = await axios.post<'user' | 'no-user'>(`${API_URL}${getAuthUrl('check-user')}`, {email,});
		return response.data;
	},
	
	async sendOtp(email: string ,isUser?:boolean) {
		const response = await axios.post<'Success'>(`${API_URL}${getMailUrl('send-otp')}`, { email , isUser });
		return response;
	},

	async verifyOtp(email: string, otpVerification: string) {
		const response = await axios.post<'Success'>(`${API_URL}${getMailUrl('verify-otp')}`, {
			email,
			otpVerification,
		});

		return response;
	},


	logout() {
		removeTokensCookie();
		localStorage.removeItem('user');
	},

		async editProfilePassword(email: string, password: string) {
		const response = await axios.put<'Success'>(`${API_URL}${getUserUrl('edit-password')}`, {
			email,
			password,
		});

		return response;
	},
	async getNewTokens() {
		const refreshToken = Cookies.get('refresh');
		const response = await axios.post(`${API_URL}${getAuthUrl('access')}`, { refreshToken });

		if (response.data.accessToken) {
			saveTokenCookies(response.data);
		}

		return response;
	},
		async checkInstructor(token?: string) {
 		try {
 			const { data } = await axios.get(`${API_URL}${getAuthUrl('check-instructor')}`, {
 				headers: {
 					Authorization: `Bearer ${token}`,
 				},
 			});
 
 			return data;
 		} catch (error) {
 			console.log(error);
 		}
 	},
	 async updateUser(body:UserType) { 
		try {
			const { data } = await $axios.put(
				`${getUserUrl('update')}`,
				body
			);

			return data;
		} catch (error) {
			console.log(error);
		}
	},
	async getTransactions() {
		try {
			const { data } = await $axios.get(
				`${getUserUrl('transactions')}`
			);

			return data;
		} catch (error) {
			console.log(error);
		}
	},

	async getMyCourses() {
		try {
			const { data } = await $axios.get(
				`${getUserUrl('my-courses')}`
			);

			return data;
		} catch (error) {
			console.log(error);
		}
	},

	async getSavedCards() {
		try {
			const { data } = await $axios.get(`/customer/saved-cards`);

			return data;
		} catch (error) {
			console.log(error);
		}
	},
};