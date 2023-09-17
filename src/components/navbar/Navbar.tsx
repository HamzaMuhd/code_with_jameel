'use client'
// import { FC, ReactNode } from "react";
import { Box, HStack, Heading } from "@chakra-ui/react";
import { Montserrat } from "next/font/google";
import Link from "next/link";

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

const Navbar = () => {

    const heading = "<CWJ/>"
    return (
        <Box
        display='flex'
        justifyContent='space-around'
        alignItems='center'
        >
            <Heading fontFamily="monospace" fontSize={34} marginTop={3}  zIndex={1} >{heading}</Heading>
                <HStack gap={3}  zIndex={1} >
                    <Link  href="/">Home</Link>
                    <Link href="#about">About</Link>
                    <Link href="#service">Service</Link>
                    <Link href="#contact">Contact</Link>
                </HStack>
        </Box>
    );
}
 
export default Navbar;