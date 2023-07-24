import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Chart from './Chart'
import "../Styles/Desktop.css";
import Assignment from './Assignment';

const Desktop = () => {  
  return (
    <Box position="absolute" className='width' border="2px solid white" m="auto" bgColor={"white"} h="100vh" w="screen">
      <Box h="auto" p="10px" m="5px" className='hide-on-mobile'>
        <Text  fontWeight={"semibold"} pb="2">Assessments Overview</Text>
          <Chart/>
      </Box>
      <Box h="auto" p="8px" m="5px" pt="50px">
        <Text pl="3" fontWeight={"semibold"} className='hide-on-mobile'>My Assessment</Text>
        <Assignment/>
      </Box>
    </Box>
  )
}

export default Desktop