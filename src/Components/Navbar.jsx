import React from 'react'
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-scroll';
import Resume from './Resume';
 const Links = [
  {
    title : "HOME",
    id : "home-container",
    to : "home"
  },
  {
    title : "ABOUT",
    id : "about-container",
    to : "about"
  },
  {
    title : "SKILLS",
    id : "skills-container",
    to : "skills"
  },
  {
    title : "WORK",
    id : "work-container",
    to : "work"
  },
  {
    title : "CONTACT",
    id : "contact-container",
    to : "contact"
  },
 ]

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box 
    position={"sticky"}
    top="0"
    zIndex={"1000"}>
        <Box 
         bg={'#011627'} px={4}>
        <Flex  h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box fontSize={"lg"} color={"white"}>SK</Box>
          </HStack>
          <Flex gap={"15px"}>
          <HStack
              color={'gray.300'}
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => {
              return (
                <Box
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                 cursor: "pointer"
                }} >
                <Link key={link}
                spy={true} id={link.id}  to={link.to} smooth={true} activeClass="activeClass">
                {link.title}
                </Link>
                </Box>
              )
              })
              };
            </HStack>
           <Resume/>
          </Flex>     
        </Flex>

        {isOpen ? (
          <Box color={"white"} pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            {Links.map((link) => {
              return (
                <Box
                px={2}
                py={1}
                rounded={'md'} >
                <Link aria-label={'Open Menu'}
                onClick={onClose} key={link}
                spy={true} id={link.id}  to={link.to} smooth={true} activeClass="activeClass">
                {link.title}
                </Link>
                </Box>
              )
              })
              };
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  )
}

export default Navbar