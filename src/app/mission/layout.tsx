'use client'

import React, { ReactNode } from "react";
import { Box, Heading } from "@chakra-ui/react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <Heading>Our Mission</Heading>
      {children}
    </Box>
  );
};

export default Layout;
