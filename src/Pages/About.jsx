import { Box, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Box
      w={"100%"}
      bg={"#f7fafc"}
      padding={"50px 0px"}
      className="about-container" id="about"
    >
      <Text
        textAlign={"center"}
        fontWeight={"bold"}
        fontSize={{ base: "30px", sm: "50px", md: "65px" }}
        color={"#2d3748"}
      >
        ABOUT ME
      </Text>
      <Box
        mt={{ base: "50px", sm: "50px", md: "50px" }}
        w={"80%"}
        h="60%"
        gap={"20px"}
        justifyContent={"center"}
        alignItems={"center"}
        display={{ base: "block", sm: "block", md: "flex" }}
        margin={"auto"}
      >
        <Box
          w={{ base: "100%", sm: "100%", md: "40%" }}
          mt={{ base: "20px", sm: "20px", md: "0px" }}
        >
          <Image
            m={"auto"}
            src="https://i.pinimg.com/originals/88/1f/02/881f020dbf5645b11d7fc8e73da2d06f.gif"
          />
        </Box>
        <Box
          color={"#2d3748"}
          w={{ base: "100%", sm: "100%", md: "55%" }}
          fontWeight={"bold"}
          textAlign={"start"}
        >
          <UnorderedList spacing={3}>
            <ListItem>
              Hello! My name is Sathan Kumar and I enjoy creating things that
              live on the internet.
            </ListItem>
            <ListItem>
              My interest in web development started back last year when I was
              trying to edit things on the web, that taught me a lot about HTML
              & CSS.
            </ListItem>
            <ListItem>
              As I grow and flourish as a Developer, one thing which keeps me
              going is my inquisitiveness for discovering new things every day.
            </ListItem>
            <ListItem>
              Fast Forwarding to today, I built a number of web applications and
              4 major projects. Learned a great deal about teamwork, leadership,
              and communication. After months of rigorous training, here I am
              looking for an opportunity as a full stack web developer.
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
