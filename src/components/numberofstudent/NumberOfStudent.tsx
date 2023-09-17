'use client'

import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";

const NumberOfStudent = () => {
    return (
        <Box
        w='100vw'
        h='420px'
        bg='#D9D9D9'
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDir='column'
        gap={20}
        >
            <Heading fontFamily="monospace" >Number of Beneficiaries</Heading>
           
            <HStack 
            flexDirection={{base:"column", md:"row"}}
            gap={{base:"15px", md:"150px"}}
            >
                <VStack>
                    <Heading>23+</Heading>
                    <Text>HTML,CSS, JavaScript</Text>
                </VStack>
                <VStack>
                    <Heading>12</Heading>
                    <Text>Frontend Engineers</Text>
                </VStack>
                <VStack>
                    <Heading>4</Heading>
                    <Text>Backend Engineers</Text>
                </VStack>
            </HStack>
        </Box>
    );
}
 
export default NumberOfStudent;