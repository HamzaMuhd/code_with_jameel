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
        color="white"
        >
            <VStack>
            <Heading className={roboto.className}>Ongoing Projects</Heading>
            <Text
            mt={5}
            fontSize={18}
            className={josefin_Sans.className}   
            >Explore our current initiatives driving innovation and progress.</Text>
            </VStack>
            <Box>
            <HStack 
            flexDirection={{base:"column", md:"row"}}
            gap={50}>
                <Box 
                w={{base:"260px", md:"370px"}}
                h="330px"
                display='flex'
                justifyContent='center'
                alignItems='center'
                flexDir='column'
                gap={3}
                mx='145px'
                mb='80px'
                >   
                    <Text className={josefin_Sans.className}>KashCycle is an innovative and ongoing project initiated by CodeWithJameel, aimed at revolutionizing thrift contribution practices, commonly known as ADASHE within Nigeria and beyond. This digital platform seeks to modernize and streamline the traditional savings and contribution system, making it more accessible, efficient, and secure for users.</Text>
                    <Link href="https://kashcycle.com.ng" passHref>
                        <Button
                        colorScheme="gray"
                        size="sm"
                        mt={2}
                        color="black"
                        bg="white"
                        className={josefin_Sans.className}
                        _hover={{
                            bg: "black",
                            color: "white",
                        }}
                        >
                        SIGNUP NOW!
                        </Button>
                    </Link>
                </Box>
                </HStack>
            {/* <HStack
            gap={5}
            align='flex-start'
            flexDirection={{base:"column", md:"row"}}
            width='25%'
            pt='100px'
            pl='100px'
            >
            <Text textAlign="justify" className={josefin_Sans.className}>KashCycle is an innovative and ongoing project initiated by CodeWithJameel, aimed at revolutionizing thrift contribution practices, commonly known as ADASHE within Nigeria and beyond. This digital platform seeks to modernize and streamline the traditional savings and contribution system, making it more accessible, efficient, and secure for users.</Text>
            </HStack> */}
            </Box>
        </Box>
    );
}
 
export default LatestProjects;