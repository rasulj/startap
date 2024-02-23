import Cookies from "js-cookie"; 
import { AuthToken, AuthUserResponse } from "src/store/user/user.interface";

export const saveTokenCookies = (data: AuthToken)=>{
    Cookies.set('accessToken' ,data.accessToken)
     Cookies.set('refreshToken' ,data.refreshToken)
}
export const saveStorage =( data:AuthUserResponse)=>{
    saveTokenCookies(data)
    localStorage.setItem('user',JSON.stringify(data.user))
}
export const removeTokensCookie = ()=>{
    Cookies.remove('accessToken' )
     Cookies.remove('refreshToken' )
}