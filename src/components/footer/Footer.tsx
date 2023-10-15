'use client'

import { Roboto, Josefin_Sans } from "next/font/google";
import { Box, Heading, Text, Spacer, SimpleGrid, List, ListItem, Flex } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { socialMedia } from "@/constants/constants";

const roboto = Roboto({
    weight: '100',
    subsets: ['latin'],
})

const josefin_Sans = Josefin_Sans({
    weight: '300',
    subsets: ['latin'],
})

const Footer = () => {

    const currentDate = new Date().getFullYear();

    return (
        <Box
            mt='150px'
            bg='#000'
            color='#fff'
            display='flex'
            justifyContent='space-around'
            flexDir='column'
            w="100vw"
            pt='100px'
            alignItems='center'
            px={{ md:'30px' }}
        >
            <Box
                pl='20px'
                pb='100px'
                display='flex'
                justifyContent='space-around'
            >
                <SimpleGrid minChildWidth='180px' gap={20}>
                    <Box>
                        <Heading 
                            fontSize='24px'
                            className={roboto.className}
                            pb="30px"
                        >CodeWithJameel</Heading>
                        <Text className={josefin_Sans.className}>Empowering Nigerian developers with knowledge, resources, and support. We foster tech innovation, inclusivity, and leadership, spanning various programming languages and frameworks to inspire the next generation.
                        </Text>
                    </Box>
                    <Box>
                        <Heading
                            fontSize='24px'
                            pb="30px"
                            className={roboto.className}
                        >Quick links</Heading>
                        <List className={josefin_Sans.className}>
                            <ListItem>Home</ListItem>
                            <ListItem>About</ListItem>
                            <ListItem>Contact</ListItem>
                        </List>
                    </Box>
                    <Box>
                        <Heading
                            fontSize='24px'
                            pb="30px"
                            className={roboto.className}
                        >Contact us</Heading>
                        <List className={josefin_Sans.className}>
                            <ListItem>codewithjameel@gmail.com</ListItem>
                            <ListItem>+23480-6317-2758</ListItem>
                            <ListItem>Address</ListItem>
                        </List>
                    </Box>
                    {/* <Box> */}
                    {/* <Heading
                        fontSize='24px'
                        pb="30px"
                        className={roboto.className}
                    >Social Media</Heading> */}
                    <Box display='flex'>
                        {socialMedia.map((item, index) => (
                            <Box className={roboto.className} color='white' key={index}>
                                <Heading pb={4} className={roboto.className} textAlign={{ base:'start' }} fontSize="24px">{item.title}</Heading>
                                {item.icons.map((icon) => (
                                    <Flex key={index}>
                                        <Link href={icon.link} >{icon.icon}</Link>
                                    </Flex>
                                ))}
                            </Box>
                        ))}
                    </Box>
                    {/* </Box> */}
                </SimpleGrid>
            </Box>

            <Spacer />
            <Box
                display='flex'
                justifyContent='space-around'
                pb={20}
                gap={20}
                flexDir={{ base: "column-reverse", md: "row" }}
            >
                <Text className={roboto.className} >©{currentDate} CodeWithJameel. All rights reserved.</Text>
                {/* Add your other content here */}
            </Box>
        </Box>
    );
}

export default Footer;