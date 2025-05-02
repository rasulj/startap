
import { FunctionComponent, useState } from 'react'
import { AppProviderProps, LayoutProps, } from './layouts.props'
import { Box, Container } from '@chakra-ui/react'
import Sidebar from './sidebar/sidebar'
import Footer from './footer/footer'
import AppProvider from 'src/provider/app.provider'
import Header from './header/header'


const Layout = ({children ,...props}:LayoutProps) => {
  const [ toggle ,setTogle]= useState<boolean>(false)

  const onTogle =()=> setTogle( prev => !prev)
  return (
    <Box maxW={"full"} overflow={"hidden"}>
  <Header onToggle={onTogle}/>
  <Sidebar  toggle={toggle}/>
  <Box mt={'11vh'} pl={{ base: 0, lg: '220px' }}minH={'90vh'} transition={'all .4s ease'} >
    <Container maxW={'container.lg'}>
      {children}
    </Container>
     </Box>
     <Footer/>
    </Box>
  )
}

export default Layout 

export const withLayout = <T extends Record< string,unknown> & AppProviderProps>(Component:FunctionComponent<T>)=>{

 return function withLayoutComponent(props:T){

    return <Layout>
     
         	<AppProvider
 					course={props.course}
 					courses={props.courses}
 					instructors={props.instructors}
 					books={props.books}
 				>
 					<Component {...props} />
 				</AppProvider>
   
        </Layout>
 }
}