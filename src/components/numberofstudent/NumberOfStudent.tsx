'use client'

import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { Roboto, Josefin_Sans } from "next/font/google";

const roboto = Roboto({
    weight: '100',
    subsets: ['latin'],
  })

const josefin_Sans = Josefin_Sans({
    weight: '300',
    subsets: ['latin'],
})

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
            <Heading className={roboto.className} >Number of Beneficiaries</Heading>
           
            <HStack 
            flexDirection={{base:"column", md:"row"}}
            gap={{base:"15px", md:"150px"}}
            >
                <VStack>
                    <Heading>23+</Heading>
                    <Text className={josefin_Sans.className}>HTML,CSS, JavaScript</Text>
                </VStack>
                <VStack>
                    <Heading>12</Heading>
                    <Text className={josefin_Sans.className} >Frontend Engineers</Text>
                </VStack>
                <VStack>
                    <Heading>4</Heading>
                    <Text className={josefin_Sans.className} >Backend Engineers</Text>
                </VStack>
            </HStack>
        </Box>
    );
}
 
export default NumberOfStudent;