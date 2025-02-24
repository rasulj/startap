import { SectionType } from "src/interfaces/instructor.interface";



export interface SectionBodyType{
    title?: string
    courseId?: string
    sectionId?:string
    callback:()=>void
    sections?: string[];
	lessons?: string[];

}
export interface SectionInitialStateType {
	isLoading: boolean;
	pendingSection: boolean;
	error: string | null | unknown;
	sections: SectionType[];
}