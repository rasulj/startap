




export interface InstructorIntialStateType {
     isLoading:boolean
     error: null | string | unknown,
}

export interface instructorApplyBody{
    firstNama:string
    lastName:string
    email:string
    sociaMedia:string
    callback:()=>void
}