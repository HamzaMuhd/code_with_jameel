'use client'

import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { Roboto, Josefin_Sans } from "next/font/google";

const robotoLight = Roboto({
    weight: '100',
    subsets: ['latin'],
  })

const roboto = Roboto({
    weight: '300',
    subsets: ['latin'],
  })

const josefin_Sans = Josefin_Sans({
    weight: '300',
    subsets: ['latin'],
})

const NumberOfStudent = () => {
    return (
        <Box
        mt='200px'
        w='100vw'
        h='420px'
        bg='#D9D9D9'
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDir='column'
        gap={20}
        >
            <Heading className={robotoLight.className}>Number of Beneficiaries</Heading>
           
            <HStack 
            flexDirection={{base:"column", md:"row"}}
            gap={{base:"15px", md:"150px"}}
            >
                <VStack>
                    <Heading className={roboto.className} >23+</Heading>
                    <Text className={roboto.className} >HTML,CSS, JavaScript</Text>
                </VStack>
                <VStack>
                    <Heading className={roboto.className} >12</Heading>
                    <Text className={roboto.className}  >Frontend Engineers</Text>
                </VStack>
                <VStack>
                    <Heading className={roboto.className} >4</Heading>
                    <Text className={roboto.className}  >Backend Engineers</Text>
                </VStack>
            </HStack>
        </Box>
    );
}
 
export default NumberOfStudent;