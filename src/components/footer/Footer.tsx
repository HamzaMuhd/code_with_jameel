'use client'

import { Box, Heading, Text, Spacer, Flex, SimpleGrid, List, ListItem } from "@chakra-ui/react";
import { Roboto, Josefin_Sans } from "next/font/google";
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
    const currentDate = new Date().getFullYear();
    // const socialMedia = [
    //     { src: 'facebook.svg', alt: "facebook logo" },
    //     { src: '/twitter.svg', alt: "twitter logo" },
    //     { src: '/instagram.svg', alt: "instagram logo" },
    // ];

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
                    <Box>
                        <Heading
                            fontSize='24px'
                            pb="30px"
                            className={roboto.className}
                        >Social Media</Heading>
                        <Box display='flex'>
                            {/* {socialMedia.map((icon) => (
                                <Box key={icon.alt} display='flex' mr={20} justifyContent="center" alignItems="center" width='38px' height='38px' backgroundColor='white' borderRadius={99}>
                                    <Image 
                                        src={icon.src}
                                        alt={icon.alt}
                                        width={24}
                                        height={24}
                                    />
                                </Box>
                            ))} */}
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
                flexDir={{ base: "column-reverse", md: "row" }}
            >
                <Text className={roboto.className} >©{currentDate} CodeWithJameel. All rights reserved.</Text>
                {/* Add your other content here */}
            </Box>
        </Box>
    );
}

export default Footer;

// 'use client'

// import {
//   Flex,
//   Container,
//   Box,
//   Heading,
//   Text,
// } from "@chakra-ui/react";
// import Link from "next/link";
// import { Roboto, Josefin_Sans } from "next/font/google";
// import { footerLinks, socialMedia } from "@/constants/constants";
// // import { Link } from "@chakra-ui/next-js";


// const roboto = Roboto({
//     weight: '100',
//     subsets: ['latin'],
// })

// const josefin_Sans = Josefin_Sans({
//     weight: '300',
//     subsets: ['latin'],
// })

// const Footer = () => { 

//     const currentDate = new Date().getFullYear();

//     return (
//         <footer style={{ marginTop:'150px', background:'#000' }}>
//             <Container className={roboto.className} maxW="100vw" p={{ base: '3', md: '5' }} m='0'>
//                 <Flex flexDir={{ base:'column', md:'row' }} w='100%' justifyContent={{  base:'start', md:'center' }} gap='10' flexWrap='wrap' >
//                     <Flex flexDir={{ base:'column', md:'row' }} gap='10' flexWrap='wrap'>
//                         {footerLinks.map((section, index) => (
//                             <Box gap={4} color='white' maxW={{ base: '100%', md: '400px' }} alignItems='center' key={index}>
//                                 <Heading className={roboto.className} pb={4} textAlign='start' fontSize={{ base:"22px", md:"24px" }}>{section.title}</Heading>
//                                 {section.links.map((link) => (
//                                     <Box className={josefin_Sans.className} fontSize={{ base:"15px", md:"18px" }} textAlign='start' key={link.name}>
//                                         <Link href={link.link}>{link.name}</Link>
//                                     </Box>
//                                 ))}
//                             </Box>
//                         ))}
//                     </Flex>
//                     <Flex> 
//                         {socialMedia.map((item, index) => (
//                             <Box className={roboto.className} color='white' key={index}>
//                                 <Heading pb={4} className={roboto.className} textAlign={{ base:'start' }} fontSize={{ base:"22px", md:"24px" }}>{item.title}</Heading>
//                                 {item.icons.map((icon) => (
//                                     <Flex key={index}>
//                                         <Link href={icon.link} >{icon.icon}</Link>
//                                     </Flex>
//                                 ))}
//                             </Box>
//                         ))}
//                     </Flex>  
//                 </Flex>
//                 <Flex> 
//                     <Text
//                         pt='20'
//                         as='h6'
//                         w='100%'
//                         color='white'
//                         textAlign='center'
//                         fontSize= {{ base:"13px", md:"15px" }}
//                         className={roboto.className}
//                     >
//                         Copyright ©{currentDate} CodeWithJameel. All rights reserved
//                     </Text> 
//                 </Flex>
//             </Container>
//         </footer>
//     );
// };

// export default Footer;