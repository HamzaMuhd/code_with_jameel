import About from "@/components/about/About";
import Service from "@/components/service/Service";
import HeroSection from "@/components/herosection/HeroSection";
import StudentGallery from "@/components/studentgallery/StudentGallery";
import LatestProjects from "@/components/latestprojects/LatestProjects";
import NumberOfStudent from "@/components/numberofstudent/NumberOfStudent";


const Home = () => {
  return (
    <main>
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
    </main>
  );
}
 
export default Home;