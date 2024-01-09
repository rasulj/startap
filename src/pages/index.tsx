  import React from 'react'
import { withLayout } from 'src/layousts/layouts'
import { HomePageComponent } from 'src/page-component'
  
  const Home = () => {
    return (
      <><HomePageComponent/> </>
    )
  }
  
  export default withLayout(Home)