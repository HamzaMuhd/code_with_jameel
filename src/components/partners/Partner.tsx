'use client'

import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

const Partners = () => {
    return (
        <Box
        mt='80px'
        mb='80px'
        px='16px'
        >
            <VStack>
                <Heading fontFamily="monospace">Partners</Heading>
                <Text
                mt={5}
                mb={10}    
                >Collaborators who amplify our mission and drive technology forward with us.</Text>
                <HStack 
                flexDir={{base:'column', md:'row'}}
                gap={20}>
                    <Image src="/" alt="IMag" width={80} height={20} />
                    <Image src="/" alt="IMag" width={80} height={20} />
                    <Image src="/" alt="IMag" width={80} height={20} />
                    <Image src="/" alt="IMag" width={80} height={20} />
                    Partners
                </HStack>
            </VStack>
        </Box>
    );
}
 
export default Partners;