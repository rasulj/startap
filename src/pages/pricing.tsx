import React from 'react'
import { withLayout } from 'src/layousts/layout'
import { PricingPageComponent } from 'src/page-component'

const Pricing = () => {
  return (
   <>
   <PricingPageComponent/>
   </>
  )
}

export default withLayout(Pricing)