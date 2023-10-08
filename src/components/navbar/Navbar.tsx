'use client'
import { FC, ReactNode } from "react";
import { Box, HStack, Heading, Hide, IconButton, Menu, MenuButton, MenuItem, MenuList, Show } from "@chakra-ui/react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
// import Headroom from 'react-headroom'
import CustomScrollLink from "../scrollLink";
import { FaHamburger } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Roboto, Josefin_Sans } from "next/font/google";

const roboto = Roboto({
    weight: '300',
    subsets: ['latin'],
  })

const josefin_Sans = Josefin_Sans({
    weight: '300',
    subsets: ['latin'],
})

// const links = [
//     {
//         "id": "1",
//         "link": "Home",
//         "url": "/",        
//     },
//     {
//         "id": "2",
//         "link": "About",
//         "url": "#about",        
//     },
//     {
//         "id": "3",
//         "link": "Service",
//         "url": "#service",        
//     },
//     {
//         "id": "4",
//         "link": "Contact",
//         "url": "#contact",        
//     },
// ]


// interface Links{
//     links: string;
//     link: string;
//     url: string;
// }

const Navbar: React.FC = () => {

    const heading = "<CWJ/>"
    return (
        <>
            {/* <Headroom> */}
                <Box
                    py={4}
                    display='flex'
                    alignItems='center'
                    justifyContent='space-around'
                >
                    <Heading fontFamily="monospace" fontSize={34} marginTop={3} fontWeight={200} zIndex={1} >{heading}</Heading>
                        <HStack gap={5}  zIndex={1} className={roboto.className} >
                            <Show above="lg">
                            <CustomScrollLink to="/">Home</CustomScrollLink>
                            <CustomScrollLink to="about">About</CustomScrollLink>
                            <CustomScrollLink to="service" >Service</CustomScrollLink>
                            <CustomScrollLink to="contact">Contact</CustomScrollLink>
                            </Show>                
                        </HStack>
                        <Hide above="lg">
                        <Menu>
                        <MenuButton
                        as={IconButton}
                                aria-label='Options'
                                icon={<HamburgerIcon 
                                    color='white'  
                                    _hover={{
                                        bg: "white",
                                        color: "black",
                                    }}/>}
                                variant='outline'
                        />
                        <MenuList color='black' className={roboto.className} >
                            <MenuItem  as='a' href='#'>
                            Home
                            </MenuItem >
                            <MenuItem  as='a' href='#about'>
                            About
                            </MenuItem>
                            <MenuItem  as='a' href='#service'>
                            Service
                            </MenuItem>
                            <MenuItem  as='a' href='#contact'>
                            Contact
                            </MenuItem>
                        </MenuList>
                        </Menu>
                        </Hide>
                        
                </Box>
            {/* </Headroom> */}
        </>
    );
}
 
export default Navbar;