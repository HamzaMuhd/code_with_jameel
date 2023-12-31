'use client'

import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import students from "@/app/students";
import { Roboto, Josefin_Sans } from "next/font/google";

const roboto = Roboto({
    weight: '100',
    subsets: ['latin'],
  })

  const robotoBold = Roboto({
    weight: '700',
    subsets: ['latin'],
  })

  const robotoLight = Roboto({
    weight: '300',
    subsets: ['latin'],
  })

const josefin_Sans = Josefin_Sans({
    weight: '300',
    subsets: ['latin'],
})

const StudentGallery = () => {

   
    return (
        <Box
            mt='150px'
            px='16px'
            pt='30px'
        >  
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                flexDir='column'
            >
            <Heading className={roboto.className}>Members Gallery</Heading>
            <Text
                mt={5}
                mb={10} 
                fontSize={18}
                className={josefin_Sans.className}   
                textAlign={{ base:'center', md:'start' }}
            >Meet our talented individuals powering the community&apos;s innovation and growth.</Text>
            </Box>

                <Flex flexWrap="wrap" justifyContent='center'>
                {students.map((student) => (
                    <Box key={student.id} 
                        display="flex" 
                        flexDirection="column"
                        justifyContent="space-between"
                        alignItems="center"
                        margin={{ base:'15px', md:"8px" }} // Add margin to create a gap between cards
                    >
                        <Box
                            border="2px solid #bbb"
                            borderRadius="5px"
                            w="218px"
                            h="300px"
                            bgImage={student.image}
                            bgSize="cover"
                            bgPosition="center"
                        ></Box>
                        <Box pt="6px" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                            <Heading className={robotoBold.className} fontSize="16px">{student.name}</Heading>
                            <Text className={robotoLight.className} >{student.position}</Text>
                        </Box>
                    </Box>
                ))}
                </Flex>
            
        </Box>
    );
}
 
export default StudentGallery;  