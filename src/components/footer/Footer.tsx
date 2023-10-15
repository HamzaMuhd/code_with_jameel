'use client'

import {
  Flex,
  Container,
  Box,
  Heading,
  Text,
  HStack,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import { Roboto, Josefin_Sans } from "next/font/google";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { EmailIcon } from "@chakra-ui/icons";

const roboto = Roboto({
    weight: '100',
    subsets: ['latin'],
})

const josefin_Sans = Josefin_Sans({
    weight: '300',
    subsets: ['latin'],
})

// const colors = {
//     facebook: '#1877F2',
//     twitter: '#1DA1F2',
//     instagram: '#E4405F',
//     linkedin: '#0077B5',
//     email: '#FFA500',
// };

const Footer = () => { 
    const currentDate = new Date().getFullYear();

    return (
        <footer>
            <Container maxW="100vw" m='0' p='0'>
                <Flex flexDir='column'w='100%' >
                    <Flex w='100%' justifyContent={'center'} align='center' bg='#fff' px={{ sm:'10', lg:'10' }} py={10}> 
                        <Stack>
                            <Heading fontWeight='600' pb={4} className={roboto.className} textAlign='center' fontSize="24px">Follow Us</Heading>
                            <HStack>
                                <Link aria-label="facebook" href="https://www.facebook.com/profile.php?id=61552227451895&mibextid=ZbWKwL">
                                    <IconButton _hover={{ bg:'transparent' }} bg='transparent' aria-label="facebook"><FaFacebook color='blue' /></IconButton>
                                </Link>
                                <Link aria-label="twitter" href="https://www.twitter.com/">
                                    <IconButton _hover={{ bg:'transparent' }} bg='transparent' aria-label="twitter"><FaTwitter color='#FFA500'/></IconButton>
                                </Link>
                                <Link aria-label="instagram" href="https://www.instagram.com/invites/contact/?i=19zvqga1gcdm8&utm_content=sofwqvo">
                                    <IconButton _hover={{ bg:'transparent' }} bg='transparent' aria-label="instagram"><FaInstagram /></IconButton>
                                </Link>
                                <Link aria-label="linkedin" href="http://www.linkedin.com/in/jameel-wubni-05aa96295">
                                    <IconButton _hover={{ bg:'transparent' }} bg='transparent' aria-label="linkedin"><FaLinkedin /></IconButton>
                                </Link>
                                <Link aria-label="email" href="mailto:info@codewithjameel.org.ng">
                                    <IconButton _hover={{ bg:'transparent' }} bg='transparent' aria-label="email"><EmailIcon /></IconButton>
                                </Link>
                            </HStack>
                        </Stack>
                    </Flex>  
                    <Flex bg='#000'> 
                        <Text
                            py={4}
                            as='h6'
                            w='100%'
                            bg='bg.500'
                            color='#fff'
                            textAlign='center'
                            fontSize= {{ base:"13px", md:"15px" }}
                        >
                        <Text className={roboto.className} >©{currentDate} CodeWithJameel. All rights reserved.</Text>
                    </Text> 
                    </Flex>
                </Flex>
            </Container>
        </footer>
    );
};

export default Footer;