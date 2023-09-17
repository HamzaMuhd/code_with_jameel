'use client'

import Comment from "@/components/comment/Comment";
import CommentForm from "@/components/commentform/CommentForm";
import DonateCard from "@/components/donateCard/DonateCard";
import NewsLetter from "@/components/newsletter/NewsLetter";
import { Box, Flex, Heading, Text, HStack, VStack, Grid, GridItem } from "@chakra-ui/react"
import Image from "next/image";


const singleBlogPost = async () => {
    return (
        <Box
        mt='100px'
        display={['grid','flex']}
        justifyContent='center'
        gap='20px'
        mx='auto'
        >
             
            <Box 
            maxW="740px"  
            border={['none', '1px solid #fff']}
            p={['16px','30px']}
            >
                <Box>
                    <Image 
                    src='/team.png' 
                    alt='singleblogpost' 
                    width={680} 
                    height={350} 
                    />
                    <Box
                    h='100px'
                    w='100%'
                    >
                        <Heading
                        fontSize={["18px", "24px"]}
                        >Lorem ipsum dolor sit amet,</Heading>
                        <Text 
                          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis justo sedLorem ipsum dolor sit amet</Text>
                    </Box>
                    <Box
                    w="100%"
                    display='flex'
                    alignItems='center'
                    justifyContent='space-around'
                    >
                        <Box>23 jul 2023</Box>
                        <Box>20 Comment</Box>
                        <Box>14</Box>
                    </Box>
                </Box>
                <Box
                mt='30px'
                >
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus efficitur hendrerit luctus. Aenean fermentum, sem ut tincidunt tempor, mi eros luctus nisi, at sagittis nisl nibh eu eros. In lectus tortor, dictum eu imperdiet in, tincidunt sit amet sapien. Duis eu eleifend ex. Aliquam ut sem ultricies sapien imperdiet placerat. Etiam blandit accumsan neque, sed blandit lacus auctor at. Nam tempus felis quis lorem sagittis, a lobortis nibh porttitor. Mauris dapibus vehicula mauris sit amet pretium. Proin laoreet viverra dignissim. Ut mi velit, faucibus id molestie nec, iaculis eu velit. Nulla vulputate eros ac urna varius ultrices. Sed ullamcorper dolor quis urna tempus consequat. Maecenas pretium quam quis nulla laoreet, quis porta ante molestie. Sed sed arcu dui. Phasellus sem libero, viverra ac consequat sit amet, consectetur vel nis</Text>
                    <Heading>election day is coming</Heading>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus efficitur hendrerit luctus. Aenean fermentum, sem ut tincidunt tempor, mi eros luctus nisi, at sagittis nisl nibh eu eros. In lectus tortor, dictum eu imperdiet in, tincidunt sit amet sapien. Duis eu eleifend ex. Aliquam ut sem ultricies sapien imperdiet placerat. Etiam blandit accumsan neque, sed blandit lacus auctor at. Nam tempus felis quis lorem sagittis, a lobortis nibh porttitor. Mauris dapibus vehicula mauris sit amet pretium. Proin laoreet viverra dignissim. Ut mi velit, faucibus id molestie nec, iaculis eu velit. Nulla vulputate eros ac urna varius ultrices. Sed ullamcorper dolor quis urna tempus consequat. Maecenas pretium quam quis nulla laoreet, quis porta ante molestie. Sed sed arcu dui. Phasellus sem libero, viverra ac consequat sit amet, consectetur vel nis</Text>
                </Box>

                <Comment />
                <CommentForm />
            </Box>
                
                <Box 
                maxW='360px'
                border={['none', '1px solid #fff']}
                p='30px'
                >                   
                    <DonateCard />
                    <NewsLetter />
                    <DonateCard />
                </Box>
        </Box>  
       
    );
}
 
export default singleBlogPost;