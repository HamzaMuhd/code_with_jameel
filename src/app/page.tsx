import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import HeroSection from "@/components/herosection/HeroSection";
import LatestProjects from "@/components/latestprojects/LatestProjects";
import NumberOfStudent from "@/components/numberofstudent/NumberOfStudent";
import Partners from "@/components/partners/Partner";
import Service from "@/components/service/Service";
import StudentGallery from "@/components/studentgallery/StudentGallery";


const Home = () => {
  return (
    <main className="relative">
      <section>
        <HeroSection />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Service />
      </section>
      <section>
        <NumberOfStudent />
      </section>
      <section>
        <StudentGallery />
      </section>
      <section>
        <LatestProjects />
      </section>
      <section>
        <Partners />
      </section>
      <section>
        <Contact />
      </section>
    </main>
  );
}
 
export default Home;