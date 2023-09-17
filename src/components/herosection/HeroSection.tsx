import { Box, Button, Center, Heading, Text, VStack } from "@chakra-ui/react";
import Navbar from "../navbar/Navbar";

const HeroSection = () => {
  return (
    <Box
      backgroundImage="/heroF.jpg"
      backgroundSize="cover"
      bgPosition="center"
      backgroundRepeat="no-repeat"
      height="100vh"
      w="100vw"
      color="#fff"
      position="relative" // Add this to position the overlay
    >
      {/* Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundColor="rgba(0, 0, 0, 0.5)" // Adjust the opacity as needed
      ></Box>

      <Navbar />
      <Center>
        <Box mt={["160px", "160px"]} w={["80%", "50%"]}>
          <VStack>
            <Heading
              textAlign="center"
              lineHeight={["45px", "60px"]}
              fontFamily="Monospace"
              fontSize={34}
              zIndex={1} 
            >
              Welcome to Strong Community of Nigerian Developers
            </Heading>
            <Text
              fontFamily="Montserrat"
              textAlign="center"
              lineHeight="24px"
              fontSize={18}
              zIndex={1} 
            >
              A community of passionate coders, eager to learn the latest tech
              trends, and looking to connect with like-minded individuals.
              CodeWithJameel is a gateway to a vibrant and supportive community
              of developers from all corners of Nigeria.
            </Text>
            <Button
                colorScheme="gray"
                size="lg"
                mt={4}
                color="black" // Set the text color to black
                bg="white"   // Set the background color to white
                _hover={{    // Define hover styles for the button
                    bg: "black", // Change background color on hover to black
                    color: "white", // Change text color on hover to white
                }}
                fontFamily="monospace"
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
