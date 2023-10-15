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
                        <Text textAlign={{ base:'justify', md:'start' }} fontSize={{ base:'16px', }} className={josefin_Sans.className}>
                            Get ready for a fintech game-changer that&apos;s about to redefine your financial world! CodeWithJameel Community has been quietly crafting KashCycle, a groundbreaking web app that&apos;s set to make waves. Be the first in line to unveil our truly extraordinary fintech experience. Follow us on social media, because something big is on the horizon, and we can&apos;t wait to share it with you. Brace yourself for CashCycle – it's not just an app; it&apos;s a revolution!
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
            {/* <HStack
            gap={5}
            align='flex-start'
            flexDirection={{base:"column", md:"row"}}
            width='25%'
            pt='100px'
            pl='100px'
            >
            <Text textAlign="justify" className={josefin_Sans.className}>KashCycle is an innovative and ongoing project initiated by CodeWithJameel, aimed at revolutionizing thrift contribution practices, commonly known as ADASHE within Nigeria and beyond. This digital platform seeks to modernize and streamline the traditional savings and contribution system, making it more accessible, efficient, and secure for users.</Text>
            </HStack> */}
            </Box>
        </Box>
    );
}
 
export default LatestProjects;