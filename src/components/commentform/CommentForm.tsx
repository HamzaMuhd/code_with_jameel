import { Box, Text, Input, Button, Textarea, Flex } from "@chakra-ui/react";

const CommentForm = () => {

    // const handleSubmit(e) => (){
    //     e.preventDefault()

    //     const name = e.target.value[0]
    //     const email = e.target.value[1]
    //     const phone = e.target.value[2]
    //     const message = e.target.value[3]
    // }

    // const handleClick() =>(){
    //     console.log("clicked")
    // }

    return (
        <Box
        maxW="740px"  
        borderTop='1px solid red'
        p='10px'
        
        >
            <Text
            my='15px'
            fontWeight='bold'
            >Leave a comment</Text>
            <form action=""  >
                <Flex gap={5}>
                    <Input 
                    type='name' 
                    placeholder="Name"
                    w='50%'
                    //onChange={}
                    />
                    <Input 
                    type='email' 
                    placeholder="Email"
                    w='50%'
                     //onChange={}
                    />
                </Flex>
                <Flex gap={5} my='15px'>
                    <Input 
                    type='name' 
                    placeholder="Website"
                    w='50%'
                     //onChange={}
                    />
                    <Input 
                    type='tel' 
                    placeholder="Phone number"
                    w='50%'
                     //onChange={}
                    />
                </Flex>
                <Textarea 
                placeholder="Message here...."
                mb='15px'
                 //onChange={}
                />
                <Button
                type="submit"
                w='100%'
                colorScheme='purple'
                // onClick={handleClick}
                >Send Message</Button>
            </form>
        </Box>
    );
}
 
export default CommentForm;