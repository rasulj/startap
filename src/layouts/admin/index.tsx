import { Box, Container } from '@chakra-ui/react';
 import { FC, FunctionComponent, useState } from 'react';
import { LayoutProps } from '../layouts.props';
import AdminSidebar from '../sidebar/admin-sidebat';
import {AdminProps} from './admin.props';
import AdminProvider from 'src/provider/admin.provider';
import Header from '../header/header';
import AdminHeader from '../header/admin-header';
 
 const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
	 const [ toggle ,setTogle]= useState<boolean>(false)
	
	  const onTogle =()=> setTogle( prev => !prev)

 	return (
 		<>
		 <AdminHeader onToggle={onTogle}/>
 			<AdminSidebar  toggle={toggle}/>
 			<Box pl={{ base: 0, lg: '420px' }} minH={'100vh'} transition={'all .4s ease'}>
 				<Container maxW={'container.lg'}>{children}</Container>
 			</Box>
 		</>
 	);
 };
 
 export default Layout;
 
export const withAdminLayout = <T extends Record<string, unknown> & AdminProps>(
 	Component: FunctionComponent<T>
 ) => {
 	return function withLayoutComponent(props: T): JSX.Element {
 		return (
 			<Layout>
 				<AdminProvider courses={props.courses} instructors={props.instructors}  users={props.users} books={props.books}>
 					<Component {...props} />
 				</AdminProvider>
 			</Layout>
 		);
 	};}