import "../Styles/Assignment.css";
import { Box, Button, Flex, Grid, GridItem, HStack, IconButton, Input,  Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack, Tag, TagCloseButton, TagLabel, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react';
import {AiOutlinePlus} from "react-icons/ai";
import {PiSuitcaseBold} from "react-icons/pi";
import {BiDotsVerticalRounded,BiSolidCalendar,BiShareAlt} from "react-icons/bi";


const Assignment = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef(null)
  return (
    <Box>
        <Box className="hide-on-mobile">
        <Grid templateColumns='repeat(3, 1fr)' gap={6} p="4" h="400px" m="auto">
            <GridItem w='100%' h='280px' border={"1px solid gray"} p="4" borderRadius={"20px"}  textAlign={"center"} onClick={onOpen} cursor="pointer" overflow={"contain"}>
                <Box ref={btnRef}>
                    <Box m="auto">
                        <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<AiOutlinePlus />} bgColor={"white"} borderRadius={"25px"}/>
                    </Box>
                    <Text m="auto" fontWeight={"semibold"} pt="2">New Assessment</Text>
                    <Text pt="4">From here you can ass questions of multiple types like MCQs, subjective(text and paragraph!)</Text>
                </Box>
            </GridItem>
            <GridItem w="100%" h='280px' border={"1px solid gray"} p="3" borderRadius={"20px"}>
                <Box>
                    <Box>
                        <Box display={"flex"} justifyContent={"space-between"} pb="2">
                            <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<PiSuitcaseBold />} bgColor={"blue.100"} borderRadius={"10px"}/>
                            <IconButton size="md" variant="ghost" aria-label="open menu" icon={<BiDotsVerticalRounded />}  />
                        </Box>
                        <Box>
                            <Text fontWeight={"semibold"}>Math Assessment</Text>
                            <Box>
                                <span>JOB{"  "}| </span>
                                <IconButton size="md" variant="ghost" aria-label="open menu" icon={<BiSolidCalendar/>} />
                                <span> 20 Apr 2023</span>
                            </Box>
                        </Box>
                    </Box>
                    <hr className="dotted-hr"/>
                    <Flex pt="2">
                        <Box>
                            <Text>00</Text>
                            <Text>Duration</Text>
                        </Box>
                        <Box pl="2">
                            <Text>00</Text>
                            <Text>Questions</Text>
                        </Box>
                        <Box display={"flex"}>
                            <Box display={"flex"} ml="16" border={"1px solid gray"} borderRadius={"25px"}>
                                <IconButton size="md" variant="ghost" aria-label="open menu" icon={<BiShareAlt/>} />
                                <Text pt="2" pr="2">Share</Text>
                            </Box>
                            <Box pl="2">
                                <Box bgColor={'blue'} borderRadius={"25px"} w="40px" h="40px"><Text color="white" textAlign={"center"} alignItems={"center"} p="2">LP</Text></Box>
                            </Box>
                        </Box>
                    </Flex>
                </Box>
            </GridItem>
            <GridItem w='100%' h='280px' border={"1px solid gray"} p="3" borderRadius={"20px"}>
                <Box>
                    <Box>
                        <Box display={"flex"} justifyContent={"space-between"} pb="2">
                            <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<PiSuitcaseBold />} bgColor={"blue.100"} borderRadius={"10px"}/>
                            <IconButton size="md" variant="ghost" aria-label="open menu" icon={<BiDotsVerticalRounded />}  />
                        </Box>
                        <Box>
                            <Text fontWeight={"semibold"}>Math Assessment</Text>
                            <Box>
                                <span>JOB{"  "}| </span>
                                <IconButton size="md" variant="ghost" aria-label="open menu" icon={<BiSolidCalendar/>} />
                                <span> 20 Apr 2023</span>
                            </Box>
                        </Box>
                    </Box>
                    <hr className="dotted-hr"/>
                    <Flex pt="2">
                        <Box>
                            <Text>00</Text>
                            <Text>Duration</Text>
                        </Box>
                        <Box pl="2">
                            <Text>00</Text>
                            <Text>Questions</Text>
                        </Box>
                        <Box display={"flex"}>
                            <Box display={"flex"} ml="14" border={"1px solid gray"} borderRadius={"25px"}>
                                <IconButton size="md" variant="ghost" aria-label="open menu" icon={<BiShareAlt/>} />
                                <Text pt="2" pr="2">Share</Text>
                            </Box>
                            <Box pl="1" display={"flex"}>
                                <Box bgColor={'violet'} borderRadius={"25px"} w="40px" h="40px" ><Text color="white" textAlign={"center"} alignItems={"center"} p="2">LP</Text></Box>
                                <Box bgColor={'blue.500'} borderRadius={"25px"} w="40px" h="40px" ml="-20px"><Text color="white" textAlign={"center"} alignItems={"center"} p="2">LP</Text></Box>
                                <Box bgColor={'cyan.900'} borderRadius={"25px"} w="40px" h="40px" ml="-20px"><Text color="white" textAlign={"center"} alignItems={"center"} p="2">LP</Text></Box>
                            </Box>
                        </Box>
                    </Flex>
                </Box>
            </GridItem>
        </Grid>

        </Box>
        <Box className="hide-on-desktop">
        <Grid templateRows='repeat(8, 1fr)' gap={6} h="auto" m="auto">
            <GridItem w='100%' h='auto' border={"1px dotted gray"} p="4" borderRadius={"20px"}  textAlign={"center"} onClick={onOpen} cursor="pointer" overflow={"contain"}>
                <Box ref={btnRef}>
                    <Box m="auto">
                        <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<AiOutlinePlus />} bgColor={"white"} borderRadius={"25px"}/>
                    </Box>
                    <Text m="auto" fontWeight={"semibold"} pt="2">New Assessment</Text>
                    <Text pt="4">From here you can ass questions of multiple types like MCQs, subjective(text and paragraph!)</Text>
                </Box>
            </GridItem>
            <GridItem w='100%' h='auto' border={"1px solid gray"} borderRadius={"20px"}>
                <Box>
                    <Box>
                        <Box display={"flex"} p="2">
                            <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<PiSuitcaseBold />} bgColor={"blue.100"} borderRadius={"10px"}/>
                            <Box pl="4">
                                <Text fontWeight={"semibold"}>Math Assessment</Text>
                                <Box>
                                    <span>JOB{"  "}| </span>
                                    <IconButton size="md" variant="ghost" aria-label="open menu" icon={<BiSolidCalendar/>} />
                                    <span> 20 Apr 23</span>
                                </Box>
                            </Box>
                            <IconButton size="md" variant="ghost" aria-label="open menu" icon={<BiDotsVerticalRounded />} position={"absolute"} right={"30px"}/>
                        </Box>
                       
                    </Box>
                    <hr className="dotted-hr"/>
                    <Flex pt="2" p="2">
                        <Box>
                            <Text>00</Text>
                            <Text>Duration</Text>
                        </Box>
                        <Box pl="2">
                            <Text>00</Text>
                            <Text>Questions</Text>
                        </Box>
                        <Box display={"flex"}>
                            <Box display={"flex"} ml="16" border={"1px solid gray"} borderRadius={"25px"} position={"absolute"} right={"80px"}>
                                <IconButton size="md" variant="ghost" aria-label="open menu" icon={<BiShareAlt/>} />
                                <Text pt="2" pr="2">Share</Text>
                            </Box>
                            <Box pl="2">
                                <Box bgColor={'blue'} borderRadius={"25px"} w="40px" h="40px" position={"absolute"} right={"30px"}><Text color="white" textAlign={"center"} alignItems={"center"} p="2">LP</Text></Box>
                            </Box>
                        </Box>
                    </Flex>
                </Box>
            </GridItem>
            <GridItem w='100%' h='auto' border={"1px solid gray"} borderRadius={"20px"}>
                <Griddefault/>
            </GridItem>
            <GridItem w='100%' h='auto' border={"1px solid gray"} borderRadius={"20px"}>
                <Griddefault/>
            </GridItem>
            <GridItem w='100%' h='auto' border={"1px solid gray"} borderRadius={"20px"}>
                <Griddefault/>
            </GridItem>
            <GridItem w='100%' h='auto' border={"1px solid gray"} borderRadius={"20px"}>
                <Griddefault/>
            </GridItem>
            <GridItem w='100%' h='auto' border={"1px solid gray"} borderRadius={"20px"}>
                <Griddefault/>
            </GridItem>
            <GridItem w='100%' h='auto' border={"1px solid gray"} borderRadius={"20px"}>
                <Griddefault/>
            </GridItem>
            <GridItem w='100%' h='auto' border={"1px solid gray"} borderRadius={"20px"}>
                <Griddefault/>
            </GridItem>
        </Grid>


        <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={'outside'}
        size={'lg'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Assessment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Stack spacing={4}>
                <Text mb='8px' className="hide-on-mobile">Name of assessment</Text>
                <Input
                    className="hide-on-mobile"
                    placeholder='Type Here'
                    size='sm'
                />
                <Text mb='8px'>Purpose of the test is</Text>
                <Select placeholder='Select'></Select>
                <Text mb='8px'>Description</Text>
                <Select placeholder='Select'></Select>
                <Text mb='8px'>Skills</Text>
                <HStack spacing={4}>
                        <Tag
                        size={"lg"}
                        borderRadius='full'
                        variant='solid'
                        colorScheme='blue'
                        >
                        <TagLabel>Web Development</TagLabel>
                        <TagCloseButton />
                        </Tag>
                        <Tag
                        size={"lg"}
                        borderRadius='full'
                        variant='solid'
                        colorScheme='blue'
                        >
                        <TagLabel>No of question</TagLabel>
                        <TagCloseButton />
                        </Tag>
                        <Tag
                        size={"lg"}
                        borderRadius='full'
                        variant='solid'
                        colorScheme='blue'
                        >
                        <TagLabel>UI/UX</TagLabel>
                        <TagCloseButton />
                        </Tag>
                </HStack>
                <Text mb='8px'>Duration of assessment</Text>
                <Input
                    placeholder='HH:MM:SS'
                    size='sm'
                />
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} m="auto" w="full" backgroundColor={"blue"} color="white">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </Box>

    </Box>
  )
}

const Griddefault = () => {
    return (
        <Box>
                    <Box>
                        <Box display={"flex"} p="2">
                            <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<PiSuitcaseBold />} bgColor={"blue.100"} borderRadius={"10px"}/>
                            <Box pl="4">
                                <Text fontWeight={"semibold"}>Math Assessment</Text>
                                <Box>
                                    <span>JOB{"  "}| </span>
                                    <IconButton size="md" variant="ghost" aria-label="open menu" icon={<BiSolidCalendar/>} />
                                    <span> 20 Apr 23</span>
                                </Box>
                            </Box>
                            <IconButton size="md" variant="ghost" aria-label="open menu" icon={<BiDotsVerticalRounded />} position={"absolute"} right={"30px"}/>
                        </Box>
                       
                    </Box>
                    <hr className="dotted-hr"/>
                    <Flex pt="2" pl="2">
                        <Box>
                            <Text>00</Text>
                            <Text>Duration</Text>
                        </Box>
                        <Box pl="2">
                            <Text>00</Text>
                            <Text>Questions</Text>
                        </Box>
                        <Box display={"flex"} position={"absolute"} right={"16px"}>
                            <Box display={"flex"} ml="14" border={"1px solid gray"} borderRadius={"25px"}>
                                <IconButton size="md" variant="ghost" aria-label="open menu" icon={<BiShareAlt/>} />
                                <Text p="2" pl="0">Share</Text>
                            </Box>
                            <Box pl="1" display={"flex"}>
                                <Box bgColor={'violet'} borderRadius={"25px"} w="35px" h="35px" ><Text color="white" textAlign={"center"} alignItems={"center"} p="2">LP</Text></Box>
                                <Box bgColor={'blue.500'} borderRadius={"25px"} w="35px" h="35px" ml="-22px"><Text color="white" textAlign={"center"} alignItems={"center"} p="2">LP</Text></Box>
                                <Box bgColor={'cyan.900'} borderRadius={"25px"} w="35px" h="35px" ml="-22px"><Text color="white" textAlign={"center"} alignItems={"center"} p="2">LP</Text></Box>
                            </Box>
                            <Text pt="2">+324</Text>
                        </Box>
                    </Flex>
                </Box>
    )
}

export default Assignment


