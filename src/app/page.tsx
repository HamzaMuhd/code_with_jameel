"use client"

import About from "@/components/about/About";
import Service from "@/components/service/Service";
import NumberOfStudent from "@/components/numberofstudent/NumberOfStudent";
import StudentGallery from "@/components/studentgallery/StudentGallery";
import LatestProjects from "@/components/latestprojects/LatestProjects";
import Partners from "@/components/partners/Partner";
import Contact from "@/components/contact/Contact";
import HeroSection from "@/components/herosection/HeroSection";
import { Box } from "@chakra-ui/react";




const Home = () => {
  return (
    <Box>
      <HeroSection />
      <About />
      <Service />
      <NumberOfStudent />
      <StudentGallery />
      <LatestProjects />
      <Partners />
      <Contact />
    </Box>
  );
}
 
export default Home;