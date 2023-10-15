import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

// footer links
export const footerLinks = [
    {
        title: "CodeWithJameel",
        links: [
            {   
                name: "Empowering Nigerian developers with knowledge, resources, and support. We foster tech innovation, inclusivity, and leadership, spanning various programming languages and frameworks to inspire the next generation.", 
                link:''
            },
        ],
    },
    {
        title: "Quick links",
        links: [
            { name: "Home", link: "/" },
            { name: "About", link: "/" },
            { name: "Contact", link: "/" },
        ],
    },
    {
        title: "Contact us",
        links: [
            { name: "codewithjameel@gmail.com", link: "codewithjameel@gmail.com" },
            { name: "+23480-6317-2758", link: "tel:+23480-6317-2758" },
            { name: "Address", link: "" },
        ],
    },
];

// social media icons
export const socialMedia = [
    {
        title:'Social Media',
        icons: [
            { icon: <FaFacebook />, link: "/facebook.com" },
            { icon: <FaTwitter />, link: "/twitter.com" },
            { icon: <FaInstagram />, link: "/instagram.com" },
        ]
    }
];