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
import { EmailIcon } from "@chakra-ui/icons";
import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

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
      icon: <FaFacebookF color='blue' />,
      label: 'facebook',
      link: 'https://www.facebook.com/profile.php?id=61552373251396&mibextid=ZbWKwL',
    },
    {
      icon: <FaXTwitter color='black' />,
      label: 'twitter',
      link: 'https://twitter.com/Codewithjameel?t=YSaFmhfeaClCRkIpsLvYUQ&s=09',
    },
    {
      icon: <FaInstagram color='red' />,
      label: 'instagram',
      link: 'https://www.instagram.com/invites/contact/?i=19zvqga1gcdm8&utm_content=sofwqvo',
    },
    {
      icon: <FaLinkedinIn color='blue' />,
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
                    <Link key={index} target="_blank" rel="noopener noreferrer" aria-label={socialMedia.label} href={socialMedia.link}>
                      <IconButton
                        border='1px'
                        bg='transparent'
                        rounded={'full'}
                        borderColor='gray.400'
                        _hover={{ bg: 'transparent' }}
                        aria-label={socialMedia.label}
                        boxSize={{base:'2.5em', md:'50px'}}
                        fontSize={{ base: "20px", md: "35px" }}
                      >
                        {socialMedia.icon}
                      </IconButton>
                    </Link>
                  ))}
                  <Link aria-label='email' href='mailto:info@codewithjameel.org.ng'>
                    <IconButton 
                        border='1px'
                        borderColor='gray.400'
                        rounded={'full'} 
                        boxSize={{base:'2.5em', md:'50px'}}
                        fontSize={{ base: "20px", md: "35px" }}
                        _hover={{ bg: 'transparent' }} bg='transparent' aria-label='email'>
                      <EmailIcon />
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