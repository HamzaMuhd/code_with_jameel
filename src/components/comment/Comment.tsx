import { Box, Flex, Text, Heading, Avatar } from "@chakra-ui/react";

const Comment = () => {
    return (
        <Box
        maxW="740px"  
        borderY='1px solid red'
        p={['10px', '30px']}
        mt='30px'
        mb='30px'
       >
        <Text
         py='25px'
         fontWeight='bold'
         >3 Comments</Text>
        <Flex>
              <Avatar 
                size={["md", "lg"]} 
                name='John Smilga' 
                src='/team.png' 
                />
            <Box
              ml='18px'
            >
                <Flex alignItems='center'  justifyContent={"space-between"}>
                    <Heading
                    fontSize={['16px', "24px"]}
                    >John Smilga</Heading>
                    <Box>10:12pm 15-Aug-2023</Box>
                </Flex>
                <Text fontSize={['12px', "14px"]} >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor magna ali Ut enim ad minim veniam, quis nostrud exercitation .</Text>
            </Box>
        </Flex>
        <Flex
        mt={15}
        >
              <Avatar 
                size={["md", "lg"]} 
                name='John Smilga' 
                src='/team.png' 
                />
            <Box
            ml='18px'
            >
                <Flex alignItems='center' justifyContent={"space-between"} >
                    <Heading
                    fontSize={['16px', "24px"]}
                    >John Smilga</Heading>
                    <Box>10:12pm 15-Aug-2023</Box>
                </Flex>
                <Text fontSize={['12px', "14px"]} >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor magna ali Ut enim ad minim veniam, quis nostrud exercitation .</Text>
            </Box>
        </Flex>
        <Flex
         mt={15}
        >
              <Avatar 
                size={["md", "lg"]} 
                name='John Smilga' 
                src='/team.png' 
                />
            <Box
            ml='18px'
            >
                <Flex alignItems='center'  justifyContent={"space-between"} >
                    <Heading
                    fontSize={['16px', "24px"]}
                    >John Smilga</Heading>
                    <Box>10:12pm 15-Aug-2023</Box>
                </Flex>
                <Text fontSize={['12px', "14px"]} >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor magna ali Ut enim ad minim veniam, quis nostrud exercitation .</Text>
            </Box>
        </Flex>
        </Box>
    );
}
 
export default Comment;