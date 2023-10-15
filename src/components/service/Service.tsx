'use client'

// import { FaReact } from 'react-icons/fa';
import { Roboto, Josefin_Sans } from "next/font/google";
import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { RiGraduationCapFill,  RiBriefcaseFill, RiTimeFill} from 'react-icons/ri'


const roboto = Roboto({
    weight: '100',
    subsets: ['latin'],
  })

const josefin_Sans = Josefin_Sans({
    weight: '300',
    subsets: ['latin'],
})
  
const services = [
    {
      icon: <RiGraduationCapFill size={48} />,
      title: 'Education',
      subtitle: 'Skill Development',
      description: "Whether you're a seasoned developer or just starting your tech journey, we offer a platform for skill development. Choose your area of interest, and let us guide you towards mastery.",
    },
    {
      icon: <RiTimeFill size={48} />,
      title: 'Experience',
      subtitle: 'Project Collaboration',
      description: 'We believe that the best way to learn and grow is by working on real-world projects. CodeWithJameel provides opportunities for hands-on experience through collaborative projects.',
    },
    {
      icon: <RiBriefcaseFill size={48} />,
      title: 'Employment',
      subtitle: 'Business Focus',
      description: "It's not just about learning; we are passionate about innovation. Join us, and you'll have the chance to work on projects that have real-world applications and the potential to turn into viable businesses.",
    },
  ];
  
  const Service = () => {
    return (
      <Box id="service" mt='150px' pt='30px' px='16px'>
        <VStack>
          <Heading className={roboto.className}>Our Mission</Heading>
          <Text
            mt={5}
            mb={10}
            fontSize={18}
            className={josefin_Sans.className}
            textAlign={{ base: 'center', md: 'start' }}
          >
            Elevating Nigerian Tech Talent and Fostering Innovation through our 3 E&apos;s
          </Text>
          <HStack
            flexDirection={{ base: 'column', md: 'row' }}
            gap={50}
            w='100%'
            h='fit-content'
            justifyContent={'center'}
          >
            {services.map((service, index) => (
              <Box
                key={index}
                w={{ base: '100%', md: '370px' }}
                maxW={{ base: '350px', md: '500px' }}
                h={{ base: '100%', md: '400px' }}
                bg='#D9D9D9'
                borderRadius='15px'
                display='flex'
                justifyContent='center'
                alignItems='center'
                flexDir='column'
                p='30px'
                gap={3}
                mx='14px'
              >
                <div>{service.icon}</div>
                <Heading textAlign='justify' className={roboto.className}>
                  {service.title}
                </Heading>
                <Text textAlign={{ base: 'center', md: 'start' }} className={josefin_Sans.className} fontSize={20}>
                  {service.subtitle}
                </Text>
                <Text fontSize="18px" textAlign={{ base: 'center', md: 'start' }} className={josefin_Sans.className}>
                  {service.description}
                </Text>
              </Box>
            ))}
          </HStack>
        </VStack>
      </Box>
    );
  };
  
  export default Service;