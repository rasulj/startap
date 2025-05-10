import { LessonType } from "src/interfaces/instructor.interface";

export interface LessonBodyType{
    sectionId?: string
    lessonId?:string
    courseId?:string
    callback:()=>void
}
export interface LessonInitialStateType{
      isLoading: boolean,
      error: string | null | unknown;
      lesson: LessonType;
}