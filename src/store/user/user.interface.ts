import { UserType } from "src/interfaces/user.interface"

export interface UserIntialStateType{
     user: UserType | null
     isLoading:boolean
     error: null | string | unknown,
}
export interface AuthToken {
    refreshToken:string
    accessToken:string
}
export interface AuthUserResponse extends AuthToken {
    user:UserType
}
export interface InterfaceEmailAndPassword{
   email:string
   password:string
   
} 
export interface InterfaceEmailAndOtp {
	email: string;
	otpVerification: string;
}