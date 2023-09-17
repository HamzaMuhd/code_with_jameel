import { Box, Button, Heading, Input, Textarea  } from "@chakra-ui/react";

const NewsLetter = () => {
    return (
        <Box
        my={5}
        maxW='300px'
        h='260px'
        bg='black'
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDir='column'
        p='30px'
        gap={8}
        borderRadius={5}
        >
            <Heading
            textTransform='uppercase'
            color='#fff'
            fontSize={18}
            textAlign='center'
            >Sign up for our weekly news letter</Heading>
            <form action="">
                <Input 
                type="email" 
                placeholder="Email"
                color='#000'
                bg='#fff'
                />
                <Button
                colorScheme="purple"
                textTransform='uppercase'
                mt='10px'
                w='100%'
                >sign up</Button>
            </form>

        </Box>
    );
}
 
export default NewsLetter;