import { Box, Link } from '@chakra-ui/react'
import React from 'react'
import { AiFillLinkedin,AiFillGithub,AiOutlineMail } from 'react-icons/ai';
const ContactButton = () => {
  return (
    <Box 
    display={{base:'none', sm:'flex', md:'flex'}}
    justifyContent={"space-evenly"}
    flexDirection={"column"}
    w={"3rem"}
    h={"10rem"}
    position={"fixed"}
    left={0}
    bottom={0}
    textAlign={"center"}
    m={"auto"}
    alignItems={"center"}
    fontSize={"2rem"}
    color = "#319795"
    >
         <Link href='https://github.com/Sathankothandam'>
            <AiFillGithub/>
         </Link>
         <Link href='https://www.linkedin.com/in/sathan-kothandam/'>
            <AiFillLinkedin/>
         </Link>
         <Link href='https://gmail.com'>
            <AiOutlineMail/>
         </Link>
    </Box>
  )
}

export default ContactButton