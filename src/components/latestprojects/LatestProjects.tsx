'use client'

import { Box, Button, HStack, Heading, Text, VStack } from "@chakra-ui/react"
import Link from "next/link"
import { Roboto, Josefin_Sans } from "next/font/google";

const roboto = Roboto({
    weight: '100',
    subsets: ['latin'],
  })

const josefin_Sans = Josefin_Sans({
    weight: '300',
    subsets: ['latin'],
})

const LatestProjects = () => {
    return (
        <Box
            display="flex"
            flexDir="column"
            mt={{ base:'10', md:'150px' }}
            px='16px'
            pt={{ base:'10px', md:'30px' }}
            width="100vw"
            h='100vh'
            color="white"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundImage={{ 
                base:"url('/phone-bg3.png')", 
                md:"url('/project.jpg')",
            }}
        >
            <VStack py={{ base:`${2}`, md:'' }}>
                <Heading className={roboto.className}>Ongoing Projects</Heading>
                <Text
                    fontSize={18}
                    py={{ base:`${4}`, md:'' }}
                    className={josefin_Sans.className}   
                    textAlign={{ base:'center', md:'start' }}
                >Explore our current initiatives driving innovation and progress.</Text>
            </VStack>
            <Box>
                <HStack 
                    flexDirection={{base:"column", md:"row"}}
                    gap={50}
                >
                    <Box 
                        w={{base:"100%", md:"370px"}}
                        h={{base:"100%", md:"330px"}}
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        flexDir='column'
                        gap={3}
                        mx='145px'
                        mb='80px'
                    >   
                        <Text textAlign='justify' fontSize={{ base:'16px', }} className={josefin_Sans.className}>
                            Get ready for a fintech game-changer that&apos;s about to redefine your financial world! CodeWithJameel Community of <span style={{ fontWeight:'900' }}>developers and innovators</span> have been quietly crafting KashCycle, a groundbreaking web app that&apos;s set to make waves. <span style={{ fontWeight:'900' }}>Be the first in line to unveil our truly extraordinary fintech experience.</span> Follow us on social mediato <span style={{ fontWeight:'900' }}>get updates</span>, because something big is on the horizon, and we can&apos;t wait to share it with you. Brace yourself for KashCycle – it&apos;s not just an app; it&apos;s a revolution!
                        </Text>
                        <Link href="https://kashcycle.com.ng" passHref>
                            <Button
                                size="sm"
                                mt={2}
                                color="black"
                                bg="white"
                                className={josefin_Sans.className}
                                _hover={{
                                    bg: "black",
                                    color: "white",
                                    border:'2px',
                                    borderColor:'white',
                                }}
                            >
                                SIGNUP NOW!
                            </Button>
                        </Link>
                    </Box>
                </HStack>
            </Box>
        </Box>
    );
}
 
export default LatestProjects;