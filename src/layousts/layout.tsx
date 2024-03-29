
import { FunctionComponent, useState } from 'react'
import Header from './header/header'
import { LayautProps } from './layouts.props'
import { Box, Container } from '@chakra-ui/react'
import Sidebar from './sidebar/sidebar'
import Footer from './footer/footer'


const Layout = ({children ,...props}:LayautProps) => {
  const [ toggle ,setTogle]= useState<boolean>(false)

  const onTogle =()=> setTogle( prev => !prev)
  return (
    <Box maxW={"full"} overflow={"hidden"}>
  <Header onToggle={onTogle}/>
  <Sidebar  toggle={toggle}/>
  <Box mt={'11vh'} pl={{ base: 0, lg: '320px' }}minH={'90vh'} transition={'all .4s ease'} >
    <Container maxW={'container.lg'}>
      {children}
    </Container>
     </Box>
     <Footer/>
    </Box>
  )
}

export default Layout 

export const withLayout = <T extends Record< string,unknown>>(Component:FunctionComponent<T>)=>{
 return function withLayoutComponent(props:T){
    return <Layout>
    <Component {...props}/>
        </Layout>
 }
}