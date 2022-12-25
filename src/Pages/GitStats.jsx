import { Box, SimpleGrid,Image, Text } from '@chakra-ui/react'
import React from 'react'

const GitStats = () => {
  return (
    <Box 
    w={"100%"}
    bg={"#011627"}
    padding={{base:"20px 20px",sm:"30px 20px",md:"50px 20px"}} boxSizing={"border-box"} >
              <Text
         textAlign={"center"}
         fontWeight={"bold"}
         fontSize={{ base: "30px", sm: "50px", md: "65px" }}
         color={'#f7fafc'}
        >
         GITHUB STATS</Text>
         <SimpleGrid gap={"20px"} width={"80%"} m={"auto"} columns={{base:1, sm:1, md:2}}>
               <Box>
                <Image src="https://github-readme-stats.vercel.app/api?username=sathankothandam&show_icons=true&locale=en"/>
               </Box>
               <Box >
                <Image src='https://github-readme-streak-stats.herokuapp.com/?user=sathankothandam&%22%20alt=%22sathankothandam'/>
               </Box>
         </SimpleGrid>
    </Box>
  )
}

export default GitStats