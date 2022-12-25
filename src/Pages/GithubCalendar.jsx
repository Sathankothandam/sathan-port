import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from "react-github-calendar";
// import GitStats from './GitStats';
const GithubCalendar = () => {

  return (
    <Box      
    w={"100%"}
    bg={"#f7fafc"}
    padding={{base:"20px 20px",sm:"30px 20px",md:"50px 20px"}} boxSizing={"border-box"}>
        <Text
         textAlign={"center"}
         fontWeight={"bold"}
         fontSize={{ base: "30px", sm: "50px", md: "65px" }}
         color={"#2d3748"}
        >
         GITHUB CALENDAR</Text>
        <Box w={"65%"} m={"auto"} mt={"30px"}>
        <GitHubCalendar username="Sathankothandam" hideColorLegend/>
        </Box>
        {/* <GitStats/> */}
    </Box>
  )
}

export default GithubCalendar