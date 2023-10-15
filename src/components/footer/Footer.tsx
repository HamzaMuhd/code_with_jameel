'use client'

import {
  Flex,
  Container,
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
  
const socialMediaLinks = [
    {
      icon: <FaFacebook color='blue' size='35px' />,
      label: 'facebook',
      link: 'https://www.facebook.com/profile.php?id=61552227451895&mibextid=ZbWKwL',
    },
    {
      icon: <FaTwitter color='blue' size='35px' />,
      label: 'twitter',
      link: 'https://www.twitter.com/',
    },
    {
      icon: <FaInstagram color='red' size='35px' />,
      label: 'instagram',
      link: 'https://www.instagram.com/invites/contact/?i=19zvqga1gcdm8&utm_content=sofwqvo',
    },
    {
      icon: <FaLinkedin color='blue' size='35px' />,
      label: 'linkedin',
      link: 'http://www.linkedin.com/in/jameel-wubni-05aa96295',
    },
  ];
  
  const Footer = () => {
    const currentDate = new Date().getFullYear();
  
    return (
      <footer>
        <Container maxW='100vw' m='0' p='0'>
          <Flex flexDir='column' w='100%'>
            <Flex w='100%' justifyContent={'center'} align='center' bg='#fff' px={{ sm: '10', lg: '10' }} py={10}>
              <Stack>
                <HStack>
                  {socialMediaLinks.map((socialMedia, index) => (
                    <Link key={index} aria-label={socialMedia.label} href={socialMedia.link}>
                      <IconButton
                        _hover={{ bg: 'transparent' }}
                        bg='transparent'
                        aria-label={socialMedia.label}
                        border='1px'
                        borderColor='gray.400'
                        rounded={'full'}
                      >
                        {socialMedia.icon}
                      </IconButton>
                    </Link>
                  ))}
                  <Link aria-label='email' href='mailto:info@codewithjameel.org.ng'>
                    <IconButton 
                        border='1px'
                        borderColor='gray.400'
                        rounded={'full'} _hover={{ bg: 'transparent' }} bg='transparent' aria-label='email'>
                      <EmailIcon boxSize='35px' />
                    </IconButton>
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
                fontSize={{ base: '13px', md: '15px' }}
              >
                <Text className={roboto.className}>©{currentDate} CodeWithJameel. All rights reserved.</Text>
              </Text>
            </Flex>
          </Flex>
        </Container>
      </footer>
    );
  };
  
  export default Footer;  