import React from 'react';
import "../Styles/Sidebar.css";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure
} from '@chakra-ui/react';

import {
  FiMenu,
} from 'react-icons/fi';
import {AiOutlineMobile, AiOutlineWifi} from "react-icons/ai";
import {BsLaptop} from "react-icons/bs";
import {GiNetworkBars} from "react-icons/gi";
import {BsBatteryFull, BsFillTriangleFill} from "react-icons/bs";
import {LuLayoutDashboard} from "react-icons/lu";
import {MdOutlineAssessment} from "react-icons/md";
import {BsQuestionSquare} from "react-icons/bs";
import {BiSearchAlt2} from "react-icons/bi";
import {IoIosStats} from "react-icons/io";


const LinkItemFirst = [
    { name: 'Dashboard', icon: LuLayoutDashboard },
    { name: 'Assessment', icon: MdOutlineAssessment},
    { name: 'My Library', icon: BsQuestionSquare },
]


export default function SidebarWithHeader({children}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}


const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="4s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="100vh"
      pr="40px"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="arial" className="hide-on-desktop">
            Menu
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
        <Box className='hide-on-desktop'>
            {LinkItemFirst.map((link) => (
                <NavItem key={link.name} icon={link.icon} >
                {link.name}
                </NavItem>
            ))}
            <hr className='dotted-hr'/>
            <Box display={{ base: 'flex', md: 'flex-column' }}>
            <NavItem key="Round State" icon="GrStatusInfo">
                Round Status
            </NavItem>
            <NavItem key="admin" style={{border: "1px solid red", color:"red", height:"10px", marginTop:"10px"}}>
                Admin
            </NavItem>
            </Box>
        </Box>
        <Box className='hide-on-mobile' >
        <Box display={"Flex"} flexDirection={"Column"}>
            {LinkItemFirst.map((link) => (
                <Flex direction={"column"} m="auto" pt="10px" key={link.name}>
                  <NavItem key={link.name} icon={link.icon}>
                  </NavItem>
                <Text>{link.name}</Text>
              </Flex>
            ))}
            <hr className='dotted-hr'/>
            <Box display="flex" flexDirection={"column"}>
            <NavItem key="admin" style={{border: "1px solid red", color:"red", width:"80px", margin:"auto", height:"10px", borderRadius:"25px"}} display="flex">
                Admin
            </NavItem>
              <Flex direction={"column"} m="auto" pt="5px">
                <NavItem key="Round State" icon="GrStatusInfo">
                </NavItem>
                <Text>Round Status</Text>
              </Flex> 
            </Box>
        </Box>
        </Box>
        
    </Box>
  );
};


const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};


const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Box bgColor={"white"}>
        <Box backgroundColor={"white"} className='hide-on-desktop'>
            <Flex justifyContent={"space-between"}>
                <Flex alignItems={"flex-start"} pl="20px" fontWeight={"bold"} letterSpacing={"2px"}>
                    9:41
                </Flex>
                <Flex >
                    <IconButton icon={<GiNetworkBars/>} bg={"white"}/>
                    <IconButton icon={<AiOutlineWifi/>} bg={"white"}/>
                    <IconButton icon={<BsBatteryFull/>} bg={"white"}/>
                </Flex>
            </Flex>
        </Box>
    <Flex
    ml={{ base: 0, md: 60 }}
    px={{ base: 4, md: 4 }}
    height="20"
    alignItems="center"
    bg={useColorModeValue('white', 'gray.900')}
    borderBottomWidth="1px"
    borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
    justifyContent={{ base: 'space-between', md: 'flex-end' }}
    {...rest}>
        
    <IconButton
      display={{ base: 'flex', md: 'none' }}
      onClick={onOpen}
      variant="outline"
      aria-label="open menu"
      icon={<FiMenu />}
    />
    <Box className='hide-on-mobile' position="absolute" left={["270px"]} fontWeight="bold" fontSize="25px">
        <Flex>
        <Box pr="15px" >
            Assessment
        </Box>
        <Box className="vl" ></Box>
        <Box className='highlighted'>
            My Assessments
        </Box>
        </Flex>
    </Box>
    <Text
      display={{ base: 'flex', md: 'none' }}
      ml={["0px","-140px"]}
      fontSize="2xl"
      fontFamily="rial, sans-serif"
      fontWeight="bold">
      Assessment
    </Text>
    <IconButton
        display={{ base: 'flex', md: 'none' }}
        size="lg"
        variant="ghost"
        aria-label="open menu"
        icon={<BsLaptop />}
    />
    <IconButton
        display={{ base: 'none', md: 'flex' }}
        size="lg"
        variant="ghost"
        aria-label="open menu"
        icon={<AiOutlineMobile />}
    />
   </Flex>
   <Box position={"absolute"} top="115px" className='hide-on-desktop' bgColor={"white"} display={"flex"} justifyContent={"space-around"} w="100%" h="50px" borderBottom={"1px solid gray"}> 
      <Box borderBottom={"1px solid Blue"}> 
        <Text color={"blue.400"}>My Assessments</Text>
      </Box>
      <Box>
        <Text>Unstop Assessment</Text>
      </Box>
   </Box>
   <Box position={"absolute"} top="170px" className='hide-on-desktop' bgColor={"white"} display={"flex"} justifyContent={"space-between"} w="100%" h="50px" p="2" pt="4">
    <Text fontWeight={"bold"} fontSize={"25px"} pl="35px">My Assessment</Text>
    <Box>
      <Box position={"absolute"} right={"20px"}>
          <IconButton size={"lg"} icon={<BiSearchAlt2/>} bg={"white"}/>
          <IconButton icon={<BsFillTriangleFill/>} bg={"white"}/>
          <IconButton icon={<IoIosStats/>} bg={"white"}/>
      </Box>
    </Box>
   </Box>
  </Box>
  );
};