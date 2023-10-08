'use client'

import { Box, Image, Text, Heading, Input, Textarea, Button, HStack, VStack, Flex } from "@chakra-ui/react"
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
        <Flex
            w='100vw'
            id="contact"
            display='flex'
            flexDir='column'
            justifyContent='center'
            align='center'
            mt='150px'
            px='16px'
            pt='30px'
            minH='100vh'
        >
            <VStack>
                <Heading className={roboto.className}>Contact Us</Heading>
                <Text
                    mt={5}
                    mb={5}
                    fontSize={18}
                    textAlign={{ base:'center', md:'start' }}
                    className={josefin_Sans.className}
                > Reach out to connect, inquire, or share your thoughts. We&apos;re here to assist!.</Text>
            </VStack>
            <HStack
                h='auto' 
                flexDirection={{ base: "column", md: "row" }}
                alignItems="stretch"
                gap={5}
            >
                <Box
                    flex='1'
                    borderRadius='10px'
                    maxW={{ base:'100%', md:'700px' }}
                >
                    <Image
                        src="/group-pic1.jpg"
                        alt="contact image"
                        boxSize='100%'
                        objectFit='cover'
                        borderRadius='10px'
                    />
                </Box>
                {/* <Spacer /> */}
                <Box
                    flex='1'
                    px={{ base: '10px', md: '50px' }}
                    py={{ base: '10px', md: '20px' }}
                    borderRadius='10px'
                    bgColor='#000000B2'
                    maxW={{ base:'100%', md:'500px' }}
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
                                mt={{ base:'1em', md:'5em' }}
                                colorScheme="red"
                                color="#fff"
                            >Send</Button>
                        </VStack>
                    </form>
                </Box>
            </HStack>
        </Flex>
    );
}

export default Contact;