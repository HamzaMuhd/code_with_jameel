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
        justifyContent='center'
        alignItems="center"
        mt='150px'
        px='16px'
        pt='30px'
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
                {projects.map((project)=>(
                    <Box key={project.id}  >
                    <Box bgSize='cover'>
                        <Image src={project.image} alt="latest project" width={280} height={40} />
                    </Box>
                    <HStack background="#D9D9D9" w='280px' gap='70px'>
                        <Box pl='15px'>
                            <Heading fontSize='16px'>{project.name} </Heading>
                            <Text fontSize='12px'>{project.description}</Text>
                        </Box>
                        <Text><Link href='/'>Launched</Link></Text>
                    </HStack>
                </Box>
                ))}
            </HStack>
            </Box>
        </Box>
    );
}
 
export default LatestProjects;