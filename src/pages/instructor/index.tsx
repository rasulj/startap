import { GetServerSideProps } from 'next'
import React from 'react'
import { withInstructorLayout } from 'src/layousts/instructor'

const InstructorPage = () => {
  return (
    <div>InstructorPage</div>
  )
}

export default withInstructorLayout( InstructorPage) 
export const getServerSideProps: GetServerSideProps = async () => {
	return {
		redirect: {
			destination: '/instructor/students',
			permanent: false,
		},
	};
};