import Cookies from "js-cookie"; 
import { AuthToken, } from "src/store/user/user.interface";

export const saveTokenCookies = (data: AuthToken)=>{
  Cookies.set('access', data.accessToken);
	Cookies.set('refresh', data.refreshToken);
}
// export const saveStorage =( data:AuthUserResponse)=>{
//     saveTokenCookies(data)
//    // localStorage.setItem('user',JSON.stringify(data.user))
// }
export const removeTokensCookie = ()=>{
   Cookies.remove('access');
	Cookies.remove('refresh');
}