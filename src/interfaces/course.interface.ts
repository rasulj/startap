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
  updatedAt: Date;
  allStudents: number;
  reviewAvg:number
	   
}
export interface AuthorType{
    	fullName:string
		avatar:string,
		job:string
}

export interface ReviewType {
	author: string,
	course:string,
	createdAt?: Date;
	rating: number;
	summary: string;
	updatedAt?: Date;
}