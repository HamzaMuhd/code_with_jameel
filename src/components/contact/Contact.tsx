'use client'

import { Box, Text, Heading, Input, Textarea, Button, HStack, Spacer, VStack } from "@chakra-ui/react"
import Image from "next/image";
import { Roboto, Josefin_Sans } from "next/font/google";

const roboto = Roboto({
    weight: '100',
    subsets: ['latin'],
  })

const josefin_Sans = Josefin_Sans({
    weight: '300',
    subsets: ['latin'],
})

const Contact = () => {
    return (
        <Box
        id="contact"
        display='flex'
        flexDir='column'
        justifyContent='center'
        alignItems='center'
        mt='150px'
        px='16px'
        pt='30px'
        >
            <VStack>
            <Heading className={roboto.className}>Contact Us</Heading>
            <Text
            mt={5}
            mb={5}   
            fontSize={18}
            className={josefin_Sans.className} 
            > Reach out to connect, inquire, or share your thoughts. We&apos;re here to assist!.</Text>
            </VStack>
            <HStack
            h='490px'
            flexDirection={{base:"column", md:"row"}}
            >
                <Box                
                w={{base:'200', md:'500px'}}
                borderRadius='10px'
                objectFit="contain"
                >
                    <Image 
                    src="/team.png" 
                    alt="contact image" 
                    width={500} 
                    height={490}                    
                   
                    />  
                </Box>
          <Spacer />

            <Box              
            w={{base:'200', md:'500px'}}
            px='60px'
            py='20px'
            borderRadius='10px'
            bgColor='#000000B2'
            >
                <Text
                py='5px'
                color="#fff"
                >Get in touch</Text>
                <form>
                    <VStack gap={5}>
                    <Input 
                    type="text" 
                    placeholder="Name"
                    bgColor="#fff"
                    />
                    <Input 
                    type="email" 
                    placeholder="Email"
                    bgColor="#fff"
                    />
                    <Textarea  
                    placeholder="Message....."
                    bgColor="#fff"
                    />
                    <Button
                    type="submit"
                    px='50px'
                    colorScheme="red"
                    color="#fff"
                    >Send</Button>
                    </VStack>
                </form>
            </Box>
            </HStack>
        </Box>
    );
}
 
export default Contact;