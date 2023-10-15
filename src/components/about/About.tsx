'use client'
import { Box, Heading, Text, HStack, Spacer } from "@chakra-ui/react";
import Image  from "next/image"
import { Roboto, Josefin_Sans } from "next/font/google";

const roboto = Roboto({
    weight: '100',
    subsets: ['latin'],
  })

const josefin_Sans = Josefin_Sans({
    weight: '300',
    subsets: ['latin'],
})

const About = () => {
    return (
        <Box
            id="about"
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
            mt='150px'
            px="16px"
            pt='30px'
        >
            <Heading
            mb='30px'
            className={roboto.className}
            >About Us</Heading>
            <HStack
                flexDirection={{base:"column-reverse", md:"row"}}
                gap={4}
                alignItems='stretch'
            >
                <Box w={{base:'200', md:'500px'}}>
                    <Text textAlign="justify" className={josefin_Sans.className} fontSize={17}>Welcome to CodeWithJameel, your gateway to a thriving community of tech enthusiasts and innovative thinkers. We are a dynamic group of IT specialists, passionate about mastering the latest tech trends and building connections with like-minded individuals. Our mission extends beyond the realm of learning; we&apos;re here to provide a unique opportunity for individuals to come together, choose a skill that piques their interest, and embark on a journey of continuous improvement.
                    {/* CodeWithJameel is a vibrant and inclusive community dedicated to harnessing the transformative power of technology and unlocking the potential of Nigerian developers. Our vision is to empower aspiring developers with access to knowledge, resources, and support, nurturing the next generation of tech leaders and innovators in Nigeria. We are more than just a website; we are a dynamic collective of passionate developers, tech enthusiasts, and industry experts committed to fostering growth within Nigeria&apos;s tech ecosystem. We offer a rich educational environment with tutorials, guides, and content spanning various programming languages and frameworks. Our collaborative forums and chat rooms connect like-minded developers, fostering innovation and providing a platform for sharing projects and seeking expert guidance. Through event listings, hackathons, and networking opportunities, we keep you at the forefront of tech innovation, all while prioritizing a community-first approach that values inclusivity and quality content. Join us on this exciting tech journey, whether you&apos;re a beginner or a seasoned pro, and let&apos;s collectively shape a brighter future for technology in Nigeria. */}
                        
                    </Text>
                </Box>
                <Spacer />
                <Box w={{base:'100%', md:'500px'}}> 
                    <Image src="/group-img1.jpg" alt="About us"  width={500} height={490} /> 
                </Box>
            </HStack>
        </Box>
    );
}
 
export default About;