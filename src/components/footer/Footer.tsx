'use client'

import { Box, Heading, Text, List, ListItem, HStack, VStack, Center, Spacer, SimpleGrid, Flex} from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {

    const currentDate = new Date().getFullYear()
    
    return (
        <Box
        mt='150px'
        bg='#000'
        color='#fff'
        display='flex'
        justifyContent='space-around'
        flexDir='column'  
        w="100vw"
        pt='30px'
        >  
        <Box 
        display='flex'
        justifyContent='space-around'
        pl='16px'
        pb='30px'>
            <SimpleGrid minChildWidth='180px' gap={20}>
                <Box>
                    <Heading 
                    fontSize='24px'
                    >CodeWithJameel</Heading>
                    <Text>freestar Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus luctus consectetur. 
                        Maecenas egestas accumsan justo, 
                    </Text>
                </Box>
                <Box>
                    <Heading
                    fontSize='24px'
                    >Company</Heading>
                    <List>
                        <ListItem>About</ListItem>
                        <ListItem>Service</ListItem>
                        <ListItem>Testimonies</ListItem>
                        <ListItem>Team Members</ListItem>
                    </List>
                </Box>
                <Box>
                    <Heading
                    fontSize='24px'
                    >Product</Heading>
                    <List>
                        <ListItem>Web Design</ListItem>
                        <ListItem>Web Development</ListItem>
                        <ListItem>App development</ListItem>
                    </List>
                </Box>
                <Box>
                    <Heading
                    fontSize='24px'
                    >Social Media</Heading>
                    <Box>
                        <Link href="www.facebook.com">F</Link>
                        <Link href="www.instagram.com">I</Link>
                        <Link href="www.twitter.com">T</Link>
                        <Link href="www.linkedin.com">L</Link>
                    </Box>
                </Box>
                </SimpleGrid>
            </Box>
           
            <Spacer />
            <Box>   
            <Box height='1px' bg='#fff' mb='15px'></Box>   
                <Box
                h='50px'
                display='flex'
                flexDir={['column', 'row']}
                justifyContent='space-around'
                alignItems='center' 
                >
                    <Text>©{currentDate} CodeWithJameel. All rights reserved.</Text>
                   
                    <Flex  gap={20}>
                      <Link href='/terms'><Text>Terms</Text> </Link> 
                      <Link href='/privacy'><Text>Privacy Policy</Text> </Link> 
                    </Flex>  
                </Box>
            </Box>
        </Box>
    );
}
 
export default Footer;