import { BoxProps } from "@chakra-ui/react";


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


 export interface CourseDashboardProps extends BoxProps {}