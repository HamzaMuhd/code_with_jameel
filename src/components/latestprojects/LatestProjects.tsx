'use client'

import projects from "@/app/projects";
import { Box, Button, HStack, Heading, Text, VStack } from "@chakra-ui/react"
import Image from "next/image";
import Link from "next/link"
const LatestProjects = () => {
    return (
        <Box
        display="flex"
        flexDir="column"
        justifyContent='center'
        alignItems="center"
        mt='80px'
        px='16px'
        >
            <VStack>
            <Heading fontFamily="monospace" >Ongoing Projects</Heading>
            <Text
            mt={5}
            mb={10}    
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
            <Link href='/'><Text
            display='flex'
            justifyContent='flex-end'
            mt='20px'
            >View All</Text></Link>
            </Box>
        </Box>
    );
}
 
export default LatestProjects;