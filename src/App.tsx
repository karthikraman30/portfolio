
import Navbar from './sections/navbar';
import HeroSection from './sections/hero';
import AboutSection from './sections/about';
import ProjectSection from './sections/project';
import SkillsSection from './sections/skills';
import ContactSection from './sections/contact';

function App() {
  return (
    <div>
      <Navbar />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;