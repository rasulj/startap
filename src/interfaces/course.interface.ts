export interface CourseType{
	slug: string;
	previewImage: string;
	title: string;
	lessonCount: number;
	totalHour: number;
	level: string;
	price: number;
	reviewAvarage: number;
	reviewCount: number;
	author: AuthorType;
	tags: string[];
	requirements: string[];
	learn: string[];
	exerpt: string;
	description: string;
	category: string;
	_id: string;
   isActive:boolean;
  language: string;
	   
}
export interface AuthorType{
    	fullName:string
		avatar:string,
}
