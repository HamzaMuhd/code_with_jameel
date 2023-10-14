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
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@codewithjameel.com", link: "customer@codewithjameel.com.ng" },
            { name: "+23480-6317-2758", link: "tel:+23480-6317-2758" },
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