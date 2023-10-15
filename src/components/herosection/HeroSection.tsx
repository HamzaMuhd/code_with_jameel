'use client'

import Navbar from "../navbar/Navbar";
import React, { useState, useEffect } from "react";
import { Roboto, Josefin_Sans } from "next/font/google";
import { Box, Center, Heading, Collapse, Text, VStack, Button, Flex, Container } from "@chakra-ui/react";

  const roboto = Roboto({
    weight: '100',
    subsets: ['latin'],
  })

  const josefin_Sans = Josefin_Sans({
    weight: '300',
    subsets: ['latin'],
  })

const HeroSection = () => {

  const [headerText, setHeaderText] = useState("");
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  useEffect(() => {
    // Simulate the typewriter effect for the header text
    const textToType = "Welcome to CodeWithJameel";
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= textToType.length) {
        setHeaderText(textToType.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 60); // Adjust the typing speed as needed (in milliseconds)
  }, []);

  return (
    <Box
      backgroundImage="/heroF.jpg"
      backgroundSize="cover"
      bgPosition="center"
      backgroundRepeat="no-repeat"
      minH="100vh"
      maxW="100vw"
      color="#fff"
      position="relative"
    >
      {/* Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundColor="rgba(0, 0, 0, 0.5)"
      ></Box>

      <Navbar />
      <Container maxW='4xl' pt={{ base:'10em', md:'160px', lg:'170px' }}>
        <Flex p='5' flexDir='column' align='center' color='white'>
          <Heading
            textAlign="center"
            lineHeight={["45px", "60px"]}
            zIndex={1}
            className={roboto.className}
          >
            {headerText}
          </Heading>
          <Text
            className={josefin_Sans.className}
            textAlign="center"
            lineHeight="24px"
            fontSize={22}
            zIndex={1}
            pt={3}
            pb={5}
          >
            Empowering Tech Enthusiasts and Innovators
          </Text>
          <Collapse 
            startingHeight={50} 
            in={show}
          >
            <Text
              className={josefin_Sans.className}
              textAlign="center"
              lineHeight="24px"
              fontSize={18}
              zIndex={1}
              color="white"
            >
              CodeWithJameel is where IT excellence meets community! We&apos;re a passionate group of IT specialists from across Nigeria, eager to learn the latest tech trends and connect with like-minded individuals. Join us to enhance your skills and be part of a vibrant community. Whether you&apos;re an aspiring member or an investor, together, we&apos;re shaping a future where innovation thrives, skills are honed, and impactful business solutions are created. Join us on this extraordinary journey of knowledge, collaboration, and success!
            </Text>
          </Collapse>
          <Button
            size="lg"
            mt={{ base:'10', md:`${5}` }}
            color="black"
            bg="white"
            onClick={handleToggle}
            className={josefin_Sans.className}
            _hover={{
              bg: "black",
              color: "white",
              border:'2px',
              borderColor:'white',
            }}
          >
            Read {show ? 'less' : 'more'}
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default HeroSection;