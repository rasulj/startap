

export interface categoryListProps{
    name:string;
    id:string
}

 export interface FilterCourseType {
 	category: string;
 	id: string;
 }
 export interface FilterItemProps {
	title: string;
	id: string;
	categoryList: categoryListProps[];
}

