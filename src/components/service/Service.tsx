'use client'

import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { FaReact } from 'react-icons/fa';
import { RiGraduationCapFill,  RiBriefcaseFill, RiTimeFill} from 'react-icons/ri'
import { Roboto, Josefin_Sans } from "next/font/google";

const roboto = Roboto({
    weight: '100',
    subsets: ['latin'],
  })

const josefin_Sans = Josefin_Sans({
    weight: '300',
    subsets: ['latin'],
})

const Service = () => {
    
    return (
        <Box
            id="service"
            mt='150px'
            pt='30px'
            px='16px'
        >
            <VStack>
                <Heading className={roboto.className}>Our Mission</Heading>
                <Text 
                    mt={5}
                    mb={10}
                    fontSize={18}    
                    className={josefin_Sans.className}
                    textAlign={{ base:'center', md:'start' }}       
                >Elevating Nigerian Tech Talent and Fostering Innovation through our 3 E&apos;s</Text>
                <HStack 
                    flexDirection={{base:"column", md:"row"}}
                    gap={50}
                    w='100%'
                    h='fit-content'
                    justifyContent={'center'}
                >
                    <Box 
                        w={{base:"100%", md:"370px"}}
                        maxW={{base:"350px", md:"500px"}}
                        h={{ base:"100%", md:"400px" }}
                        bg='#D9D9D9'
                        borderRadius="15px"
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        flexDir='column'
                        p='30px'
                        gap={3}
                        mx='14px'
                    >
                        <div>
                            <RiGraduationCapFill size={48} /> {/* Adjust the size as needed */}
                        </div>
                        <Heading textAlign="justify" className={roboto.className}>Education</Heading>
                        <Text textAlign={{ base:'center', md:'start' }} className={josefin_Sans.className}  fontSize={20}>Skill Development</Text>
                        <Text textAlign={{ base:'center', md:'start' }} className={josefin_Sans.className}>Whether you&apos;re a seasoned developer or just starting your tech journey, we offer a platform for skill development. Choose your area of interest, and let us guide you towards mastery.</Text>
                    </Box>
                    <Box 
                        w={{base:"100%", md:"370px"}}
                        maxW={{base:"350px", md:"500px"}}
                        h={{ base:"100%", md:"400px" }}
                        bg='#D9D9D9'
                        borderRadius="15px"
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        flexDir='column'
                        p='30px'
                        gap={3}
                        mx='14px'
                    >
                    <div>
                            <RiTimeFill size={48} />{/* Adjust the size as needed */}
                        </div>
                        <Heading textAlign="justify" className={roboto.className}>Experience</Heading>
                        <Text textAlign={{ base:'center', md:'start' }} className={josefin_Sans.className}  fontSize={20}>Project Collaboration</Text>
                        <Text textAlign={{ base:'center', md:'start' }} className={josefin_Sans.className}>We believe that the best way to learn and grow is by working on real-world projects. CodeWithJameel provides opportunities for hands-on experience through collaborative projects.</Text>
                    </Box>
                    <Box 
                        w={{base:"100%", md:"370px"}}
                        maxW={{base:"350px", md:"500px"}}
                        h={{ base:"100%", md:"400px" }}
                        bg='#D9D9D9'
                        borderRadius="15px"
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        flexDir='column'
                        p='30px'
                        gap={3}
                        mx='14px'
                    >
                        <div>
                            <RiBriefcaseFill size={48} /> {/* Adjust the size as needed */}
                        </div>
                        <Heading textAlign="justify" className={roboto.className}>Employement</Heading>
                        <Text textAlign={{ base:'center', md:'start' }} className={josefin_Sans.className}  fontSize={20}>Business Focus</Text>
                        <Text textAlign={{ base:'center', md:'start' }} className={josefin_Sans.className} >It&apos;s not just about learning; we are passionate about innovation. Join us, and you&apos;ll have the chance to work on projects that have real-world applications and the potential to turn into viable businesses. </Text>
                    </Box>
                </HStack>
            </VStack>
        </Box>
    );
}
 
export default Service;