'use client'

import { Box, Heading, Text, List, ListItem, HStack, VStack, Center, Spacer, SimpleGrid, Flex} from "@chakra-ui/react";
import Link from "next/link";
import { Roboto, Josefin_Sans} from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
    weight: '100',
    subsets: ['latin'],
  })

const josefin_Sans = Josefin_Sans({
    weight: '300',
    subsets: ['latin'],
})



const Footer = () => {

    const currentDate = new Date().getFullYear()
    const socialMedia = [
        { src: 'facebook.svg', alt: "facebook logo" },
        { src: '/twitter.svg', alt: "twitter logo" },
        { src: '/instagram.svg', alt: "instagram logo" },
    ];
    
    
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
        >  
        <Box 
        display='flex'
        justifyContent='space-around'
        pl='20px'
        pb='100px'>
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
                    ></Heading>
                    <List className={josefin_Sans.className}>
                        <ListItem></ListItem>
                        <ListItem></ListItem>
                        <ListItem></ListItem>
                    </List>
                </Box>
                <Box>
                    <Heading
                    fontSize='24px'
                    pb="30px"
                    className={roboto.className}
                    ></Heading>
                    <List className={josefin_Sans.className}>
                        <ListItem></ListItem>
                        <ListItem></ListItem>
                        <ListItem></ListItem>
                    </List>
                </Box>
                <Box>
                    <Heading
                    fontSize='24px'
                    pb="30px"
                    className={roboto.className}
                    >Social Media</Heading>
                <Box display='flex'>
                    {socialMedia.map((icon) => (
                        <Box key={icon.alt} display='flex' mr={20} justifyContent="center" alignItems="center" width='38px' height='38px' backgroundColor='white' borderRadius={99}>
                        <Image 
                        src={icon.src}
                        alt={icon.alt}
                        width={24}
                        height={24}
                        />
                </Box>
                ))}
                </Box>
                </Box>
                </SimpleGrid>
            </Box>
           
            <Spacer /> 
            <Box 
                display='flex'
                justifyContent='space-around'
                pb={20}
                gap={20}
                >
                    <Text className={roboto.className} >©{currentDate} CodeWithJameel. All rights reserved.</Text>
                   
                    {/* <Flex  gap={20}>
                      <Link href='/terms'><Text>Terms</Text> </Link> 
                      <Link href='/privacy'><Text>Privacy Policy</Text> </Link> 
                    </Flex>   */}
                </Box>
            </Box>
    );
}
 
export default Footer;