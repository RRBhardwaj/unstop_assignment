import { Box, Flex, Grid, GridItem,  Text, IconButton } from '@chakra-ui/react'
import React from 'react';
import {BsBarChartFill, BsGlobe} from "react-icons/bs";
import {MdDoNotDisturbOnTotalSilence} from "react-icons/md";
import {CgProfile} from "react-icons/cg";
import "../Styles/Chart.css";

const Chart = () => {
  return (
    <Box w="100%" border="1px solid gray" m="auto" h="auto" borderRadius={"10px"}>
        <Grid
        key={"grid"}
        templateRows='repeat(1,1fr)'
        templateColumns='repeat(9, 1fr)'
        className='hide-on-mobile'
    >
        <GridItem colSpan={1} p="2">
            <Text fontSize="16px" m="auto">Total Assessment</Text>
            <Flex pt="2">
                <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<BsBarChartFill />} bgColor={"#47c6ed"} mt="2"/>
                <Text m="auto">34</Text>  
            </Flex>
        </GridItem>
        <hr className='vertical-line'/>
        <GridItem colSpan={2}  ml="-110px"  p="2">
            <Text fontSize="16px">Candidates</Text>
            <Flex pt="2">
                    <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<CgProfile />} bgColor={"#47c6ed"} mt="3"/>
                <Box p="2" mr="2">
                    <Text m="auto">11,145<span className='green'>+89</span></Text>
                    <Text>Total Condidates</Text>
                </Box>
                <hr className='vertical-line'/>
                <Box p="2" ml="2">
                    <Text m="auto">1,14<span className='green'>+89</span></Text>
                    <Text>Who Attempted</Text>
                </Box>
            </Flex>
        </GridItem>
        <hr className='vertical-line'/>
        <GridItem colSpan={2}  ml="-110px"  p="2">
            <Text>Candidates Source</Text>
            <Flex pt="2">
                    <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<BsGlobe />} bgColor={"#e88079"} mt="3"/>
                <Box p="2" ml="2">
                    <Text m="auto">11,000<span className='green'>+89</span></Text>
                    <Text>E-mail</Text>
                </Box>
                <hr className='vertical-line'/>
                <Box p="2" ml="2">
                    <Text m="auto">145<span className='green'>+89</span></Text>
                    <Text>Social Share</Text>
                </Box>
                <hr className='vertical-line'/>
                <Box p="2">
                    <Text m="auto">145<span className='green'>+89</span></Text>
                    <Text>Unique Link</Text>
                </Box>
            </Flex>
        </GridItem>
        <hr className='vertical-line'/>
        <GridItem colSpan={1}  ml="-90px"  p="2">
            <Text p="2" pl="0" fontSize="16px" m="auto">Total Purpose</Text>
            <Flex pt="1">
                <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<MdDoNotDisturbOnTotalSilence />} bgColor={"#47c6ed"}/>
                <Text m="auto" ml="20px">11</Text>  
            </Flex>
        </GridItem>
    </Grid>
        
    </Box>
  )
}

export default Chart