'use client'

import { Box, Center, Heading, Text, VStack, Button } from "@chakra-ui/react";
import Navbar from "../navbar/Navbar";
import { useState, useEffect } from "react";
import { Roboto, Josefin_Sans } from "next/font/google";

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

  useEffect(() => {
    // Simulate the typewriter effect for the header text
    const textToType = "Welcome to Strong Community of Nigerian Developers";
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
      height="100vh"
      w="100vw"
      color="#fff"
      position="relative"
      py={5}
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
      <Center>
        <Box mt={["160px", "160px"]} w={["80%", "50%"]}>
          <VStack>
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
              fontSize={18}
              zIndex={1}
            >
              A community of passionate coders, eager to learn the latest tech
              trends, and looking to connect with like-minded individuals.
              CodeWithJameel is a gateway to a vibrant and supportive
              community of developers from all corners of Nigeria.
            </Text>
            <Button
              size="lg"
              mt={4}
              color="black"
              bg="white"
              className={josefin_Sans.className}
              _hover={{
                bg: "black",
                color: "white",
              }}
            >
              Donate
            </Button>
          </VStack>
        </Box>
      </Center>
    </Box>
  );
};

export default HeroSection;
