import {
  About,
  Service,
  NumberOfStudent,
  StudentGallery,
  LatestProjects,
  Partners,
  Contact,
  HeroSection,
} from "./sections/page";

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