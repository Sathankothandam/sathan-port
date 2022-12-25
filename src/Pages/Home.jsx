import { Box, Image, Text, Flex,} from "@chakra-ui/react";
import React from "react";
import Picture from "../assets/sathport.png";
import Resume from "../Components/Resume";
const Home = () => {
  return (
    <Flex
     className="home-container" id="home"
      bg={"#011627"}
      padding={{base:"20px 20px",sm:"30px 20px",md:"130px 20px"}}
      w={"100%"}
      justifyContent={"center"}
      alignItems={{ base: "start", sm: " start", md: "center" }}
      mt={"-30px"}
    >
      <Box
        mt={{ base: "50px", sm: "50px", md: "0px" }}
        w={"80%"}
        h="60%"
        gap={"20px"}
        justifyContent={"center"}
        alignItems={"center"}
        display={{ base: "block", sm: "block", md: "flex" }}
      >
        <Box textAlign={"center"} w={{ base: "100%", sm: "100%", md: "60%" }}>
          <Text fontSize={{base:"sm",sm:"sm",md:"lg"}} color={"gray.300"}>Hi, I'm Sathan Kumar</Text>
          <Text
            fontSize={{ base: "24px", sm: "40px", md: "56px" }}
            color={"#319795"}
          >
            A Full Stack Web Developer
          </Text>
          <Resume/>
        </Box>
        <Box
          w={{ base: "100%", sm: "100%", md: "40%" }}
          mt={{ base: "20px", sm: "20px", md: "0px" }}
        >
          <Image m={"auto"} borderRadius={"15px"}  src={Picture} />
        </Box>
      </Box>
    </Flex>
  );
};

export default Home;
