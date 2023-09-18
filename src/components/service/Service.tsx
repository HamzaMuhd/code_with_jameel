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
            className={josefin_Sans.className}
            fontSize={18}           
            >Elevating Nigerian Tech Talent and Fostering Innovation through our 3 E&apos;s</Text>
            <HStack 
            flexDirection={{base:"column", md:"row"}}
            gap={50}>
                <Box 
                w={{base:"260px", md:"370px"}}
                h="330px"
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
                    <Text className={josefin_Sans.className}>We&apos;re dedicated to offering top-notch tech education to Nigerian youth, equipping them with expertise to excel in the digital era through structured curriculum and hands-on experience.</Text>
                </Box>
                <Box 
                 w={{base:"260px", md:"370px"}}
                 h="330px"
                 bg='#D9D9D9'
                 borderRadius="15px"
                 display='flex'
                 justifyContent='center'
                 alignItems='center'
                 flexDir='column'
                 p='30px'
                 gap={3}
                >
                   <div>
                        <RiTimeFill size={48} />{/* Adjust the size as needed */}
                    </div>
                    <Heading textAlign="justify" className={roboto.className}>Expeirence</Heading>
                    <Text className={josefin_Sans.className}>We provide a supportive environment for students to apply their knowledge in real-world scenarios through projects, hackathons, and mentorship, paving their path to success</Text>
                </Box>
                <Box 
                w={{base:"260px", md:"370px"}}
                 h="330px"
                 bg='#D9D9D9'
                 borderRadius="15px"
                 display='flex'
                 justifyContent='center'
                 alignItems='center'
                 flexDir='column'
                 p='30px'
                 gap={3}
                >
                    <div>
                        <RiBriefcaseFill size={48} /> {/* Adjust the size as needed */}
                    </div>
                    <Heading textAlign="justify" className={roboto.className}>Employement</Heading>
                    <Text className={josefin_Sans.className} >We prepare students for the job market and connect them with tech industry opportunities. Partnering with businesses, we create employment pathways and internships. </Text>
                </Box>
            </HStack>
            </VStack>
        </Box>
    );
}
 
export default Service;