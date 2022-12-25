import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import Html from "../assets/html.png";
import Css from "../assets/css.jpg";
import Js from "../assets/js.png";
import Reactjs from "../assets/react.png";
import Reduxjs from "../assets/redux.png";
import Npm from "../assets/npm.png";
import Git from "../assets/git.png";
import Chakra from "../assets/chakra.png"
import Boot from "../assets/boot.png"
// import Github from "../assets/github.png";

    const data = [
      {
        img: Html,
        name: "HTML"
      },
      {
        img: Css,
        name: "CSS"
      },
      {
        img: Js,
        name: "JAVA SCRIPT"
      },
      {
        img: Reactjs,
        name: "REACT JS"
      },
      {
        img: Reduxjs,
        name: "REDUX"
      },
      {
        img: Npm,
        name: "NPM"
      },
      {
        img: Git,
        name: "GIT"
      },
      {
        img: Chakra,
        name: "CHAKRA UI"
      },
      {
        img: Boot,
        name: "BOOT STRAP"
      },
    ]
const Skills = () => {
  return (
    <Box
    className="skills-container" id="skills"
    bg={"#011627"}
    padding={{base:"20px 20px",sm:"30px 20px",md:"50px 20px"}}
    w={"100%"}>
            <Text
        textAlign={"center"}
        fontWeight={"bold"}
        fontSize={{ base: "30px", sm: "50px", md: "65px" }}
        color={"#f7fafc"}
      >
       TECH SKILLS
      </Text>
        <SimpleGrid gap={"30px"} w={"80%"} m={"auto"} mt={"50px"} columns={{base:2, sm:3, md:5}}>
             {data.map((data)=>{
              return(
                <Box boxShadow={"base"} bg={"white"} padding={{base:"10px 10px",sm:"15px 15px",md:"15px 15px"}} 
                 key={data.name}>
                  <Image objectFit={"contain"} m={"auto"} h={{base:"60px",sm:"80px",md:"120px"}} w={{base:"90px",sm:"120px",md:"150px"}} src={data.img}/>
                  <Text mt={"15px"} fontWeight={"bold"} fontSize={{base:"xs",sm:"xs",md:"md"}} textAlign={"center"} color={"#2d3748"}>{data.name}</Text>
                </Box>
              )
             })}
        </SimpleGrid>
    </Box>
  )
}

export default Skills