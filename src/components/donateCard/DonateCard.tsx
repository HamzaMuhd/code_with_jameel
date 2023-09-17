'use client'

import { Box, Text, Heading, Button, Avatar }  from "@chakra-ui/react"
import Image from "next/image";
import Link from "next/link";

const DonateCard = () => {
    return (
        <>
            <Box
            maxW='300px'
            h='400px'
            pos='relative'
            bg='#7F53A1'
            borderRadius={5}
            >
                <Box>
                    <Box                   
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDir='column'
                    pt='110px'
                    color='#fff'
                    gap={1}
                    >
                       <Avatar 
                       size={["lg", "xl"]} 
                       name='Ryan Florence' 
                       src='/team.png' 
                       />
                        <Heading
                        fontSize={25}
                        fontWeight='bold'
                        >Carlton</Heading>
                        <Text
                        color='black'
                        >Prime Minister</Text>
                        <Text>Let&apos;s Make Canada Great Together</Text>
                    
                        <Text>Donate by clicking the button below</Text>
                        <Button
                        variant='outline'
                        rounded='full'
                        color='#fff'
                        textTransform='uppercase'
                        px='45px'
                        py='12px'
                        colorScheme='transparent'
                        mt='8px'
                        >
                        <Link href='/'>Donate Now</Link>
                        </Button>
                    
                    </Box>
                    <Box 
                    w='235px' 
                    h='45px' 
                    bg='#fff' 
                    pos='absolute'
                    top='40px'
                    left='0'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    borderRightRadius='10px'
                    textTransform='uppercase'
                    color='red'
                    >
                        <Text>United party canada</Text>
                    </Box>
                </Box>
            </Box>
            
        </>
    );
}
 
export default DonateCard;
