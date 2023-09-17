'use client'

import { Box, Grid, Text, Heading, Button, VStack, HStack, SimpleGrid, Center, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import students from "@/app/students";

const StudentGallery = () => {

   
    return (
        <Box
        mt='80px'
        px='16px'
        >  
            <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDir='column'
            
            >
            <Heading fontFamily="monospace">Members Gallery</Heading>
            <Text
            mt={5}
            mb={10}    
            >Meet our talented individuals powering the community&apos;s innovation and growth.</Text>
            </Box>

                <Flex flexWrap="wrap" justifyContent='center'>
                {students.map((student) => (
                    <Box key={student.id} 
                    display="flex" 
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="center"
                    margin="8px" // Add margin to create a gap between cards
                    >
                    <Box
                        border="5px solid #bbb"
                        borderRadius="5px"
                        w="218px"
                        h="300px"
                        bgImage={student.image}
                        bgSize="cover"
                        bgPosition="center"
                    ></Box>
                    <Box pt="6px" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                        <Heading fontSize="16px">{student.name}</Heading>
                        <Text>{student.position}</Text>
                    </Box>
                    </Box>
                ))}
                </Flex>



                <Link href='/'><Text
                display='flex'
                justifyContent='flex-end'
                pr='120px'
                >View All</Text></Link> 
            
        </Box>
    );
}
 
export default StudentGallery;