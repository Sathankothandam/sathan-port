import { Box, Button, Flex, Heading, Image, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { AiFillGithub } from 'react-icons/ai';
import { GrDeploy } from 'react-icons/gr';
import React from 'react'
const data = [
    {
        img:"https://www.smartsites.com/media/Overstock.com-in-2014.jpeg",
        name:"Overstock-Clone",
        discription:"This website is a clone of 'Overstock' & here i implemented some functionalities product sorting & filtering,add to cart etc.  ",
        tech:"HTML,CSS,JAVASCRIPT",
        deploy:"https://overstockweb17.netlify.app",
        github:"https://github.com/amitprakash28/Overstock_clone"
        
          },
          {
          img:"https://camo.githubusercontent.com/7c8ab49f629e73de8108d10afdeb4a255e7bc90540ea3b5200d70f2a15a99d89/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f333834302f312a594d5f6e556a454e4f3832784467554a534b537762512e706e67",
          name:"PharmEasy-clone",
          discription:"This website is a clone of 'PharmEasy' & here i implemented some functionalities product sorting & filtering,add to cart etc.  ",
          tech:"HTML,CSS,JAVASCRIPT",
          deploy:"https://gleaming-youtiao-027db4.netlify.app",
          github:"https://github.com/h73krishnan/TeamProject"
            },
            {
              img:"https://camo.githubusercontent.com/0078f246639729005244b4605b2bb0622263c5bd176af79f5f14b8236e08d45f/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3730302f312a72756947714d7546766344535f6237797763685257672e6a706567",
              name:"Beauty bebo-Clone",
              discription:"This website is a clone of 'Beauty bebo' & here i implemented some functionalities product sorting & filtering,add to cart etc.  ",
              tech:"HTML,CSS,JAVASCRIPT,React,Chakra UI",
              linked:"",
              deploy:"https://beautybebo7.netlify.app/",
              github:"https://github.com/Sathankothandam/BeautyBebo-Clone"
                },
             {
                  img:"https://camo.githubusercontent.com/e4d7c4c10b3f7574cc67f289d46d368463e239b505c573556eaf1d45c310e35c/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313430302f312a6e5f44563156533641703464796730556856783755412e706e67",
                  name:"Ideakart-Clone",
                  discription:"This website is a clone of 'Idea Kart' & here i implemented some functionalities product sorting & filtering,add to cart etc.  ",
                  tech:"HTML,CSS,JAVASCRIPT,React,Chakra UI",
                  github:"https://github.com/fahisayub/ideakart-clone",
                  deploy:"https://ideakart-clone-rct101.netlify.app/",
             }
  ]
const Projects = () => {
  return (
    <Box
    className="work-container" id="work"
    w={"100%"}
    bg={"#f7fafc"}
    padding={{base:"20px 20px",sm:"30px 20px",md:"50px 20px"}} boxSizing={"border-box"} >
        <Text
        textAlign={"center"}
        fontWeight={"bold"}
        fontSize={{ base: "30px", sm: "50px", md: "65px" }}
        color={"#2d3748"}
      >
        MY WORKS
      </Text>
           <SimpleGrid  gap={"30px"} w={"80%"} m={"auto"} mt={"30px"} columns={{base:1, sm: 1, md:2}}>
              {data.map((data)=>{
                return(
                    <Stack boxShadow={"base"} bg={"white"} p={"15px"} w={"100%"}  key={data.name}>
                         <Box w={"100%"} h={{base:"auto", sm:"auto", md:"300px"}} >
                            <Image h={"100%"} src={data.img}/>
                         </Box>
                         <Box >
                            <Heading textAlign={"center"}>{data.name}</Heading>
                            <Text mt={"10px"} fontSize={{base:"xs",sm:"md",md:"lg"}} fontWeight={"bold"} color={"#319795"}>DESCRIPTION</Text>
                            <Text>{data.discription}</Text>
                         </Box>
                         <Box >
                            <Text fontSize={{base:"xs",sm:"md",md:"lg"}} fontWeight={"bold"} color={"#319795"}>TECH STACK</Text>
                            <Text>{data.tech}</Text>
                         </Box>
                         <Flex color={"white"} justifyContent={"space-evenly"}>
                           <Link href={data.github}>
                           <Button variant='solid' bg={"gray.900"}  size='md'><AiFillGithub/></Button>
                           </Link>
                           <Link href={data.deploy}>
                           <Button variant='solid' bg={"blue.500"} size='md'><GrDeploy/></Button>
                           </Link>
                         </Flex>
                    </Stack>
                )
              })}
           </SimpleGrid>
    </Box>
  )
}

export default Projects;

