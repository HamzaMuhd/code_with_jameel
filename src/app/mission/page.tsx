'use client'

import { Box, Heading , Flex} from "@chakra-ui/react";
import Link from "next/link";


const Mission = () => {
    return (
        <Box>
            <Heading
            textAlign='center'
            mb='30px'
            fontSize='18px'
            >Our Mission statement</Heading>
            
            <Flex 
            justifyContent='center'
            flexWrap='wrap'
            gap={10}

            >
                <Link href='/mission/our-party' >
                    <Box 
                     border='5px solid #bbb'
                     borderRadius='5px'
                     w='300px'
                     h='400px'
                     position='relative'
                     bgImage='/member.png'
                     bgSize='cover'
                     bgPosition='center'
                    >
                    </Box>
                    <Heading
                    fontSize='20px'
                    fontWeight='bold'
                    pt='10px'
                    textAlign='center'
                    >Our Party</Heading>                
                </Link>
                <Link href='/mission/our-campaign'  >
                <Box 
                    border='5px solid #bbb'
                    borderRadius='5px'
                    w='300px'
                    h='400px'
                    position='relative'
                    bgImage='/member1.png'
                    bgSize='cover'
                    bgPosition='center'
                    >
                    </Box>
                    <Heading
                    bottom='10px'
                    fontSize='20px'
                    fontWeight='bold'
                    pt='10px'
                    textAlign='center'
                    >Our Compaign</Heading>           
                </Link>
               
                <Link href='/mission/become-a-volunteer' >
                <Box 
                     border='5px solid #bbb'
                     borderRadius='5px'
                     w='300px'
                     h='400px'
                     position='relative'
                     bgImage='/member2.png'
                     bgSize='cover'
                     bgPosition='center'
                    >
                    </Box>
                    <Heading
                    pt='10px'
                    textAlign='center'
                    fontSize='20px'
                    fontWeight='bold'
                    >Become a Volunteer</Heading>               
                </Link>
            </Flex>
        </Box>
    );
}
 
export default Mission;