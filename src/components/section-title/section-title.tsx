
import { Box, Heading, Text } from '@chakra-ui/react'
import { SectionTitleProps } from './section.props'

 const SectionTitle = ({ subtitle, title ,...props}:SectionTitleProps) => {
  return (
    <Box {...props}> 
      <Heading as={'h3'}> {title}</Heading>
       <Text mt={1} opacity={'.8'}>{subtitle}</Text>
    </Box>

  )
}
export default SectionTitle
