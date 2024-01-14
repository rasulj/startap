import React from 'react'
import { withLayout } from 'src/layousts/layouts'
import { CoursesPageComponent } from 'src/page-component'

const Courses = () => {
  return (
    <CoursesPageComponent/>
  )
}

export default withLayout(Courses)