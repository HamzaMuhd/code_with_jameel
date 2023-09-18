import React from "react";
import { Link as ScrollLink } from "react-scroll";

interface CustomScrollLinkProps {
  to: string;
  children: React.ReactNode;
}

const CustomScrollLink: React.FC<CustomScrollLinkProps> = ({ to, children }) => {

    const linkStyles = {
        cursor: "pointer", // Add the pointer cursor style
      };

  return (
    <ScrollLink
      to={to}
      smooth={true}
      duration={1000}
      offset={-70}
      style={linkStyles}
    >
      {children}
    </ScrollLink>
  );
};

export default CustomScrollLink;
