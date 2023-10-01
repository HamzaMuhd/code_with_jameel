'use client'

import projects from "@/app/projects";
import { Box, Button, HStack, Heading, Text, VStack } from "@chakra-ui/react"
import Image from "next/image";
import Link from "next/link"
import { Roboto, Josefin_Sans } from "next/font/google";

const roboto = Roboto({
    weight: '100',
    subsets: ['latin'],
  })

const josefin_Sans = Josefin_Sans({
    weight: '300',
    subsets: ['latin'],
})

const LatestProjects = () => {
    return (
        <Box
        display="flex"
        flexDir="column"
        mt='150px'
        px='16px'
        pt='30px'
        backgroundImage="url('/project.jpg')"
        backgroundPosition="center"
        backgroundSize="cover"
        width="100vw"
        height="100vh"
        color="white"
        >
            <VStack>
            <Heading fontFamily="monospace" className={roboto.className}>Ongoing Projects</Heading>
            <Text
            mt={5}
            mb={10} 
            fontSize={18}
            className={josefin_Sans.className}   
            >Explore our current initiatives driving innovation and progress.</Text>
            </VStack>
            <Box>
            <HStack
            gap={5}
            flexDirection={{base:"column", md:"row"}}
            >
            
            </HStack>
            </Box>
        </Box>
    );
}
 
export default LatestProjects;