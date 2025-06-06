

import Navigation from "./components/Navigation"
import HeroSection from "./components/sections/HeroSection"
import AboutSection from "./components/sections/AboutSection"
import SkillsSection from "./components/sections/SkillsSection"
import EducationSection from "./components/sections/EducationSection"
import CertificatesSection from "./components/sections/CertificateSection"
import ContactSection from "./components/sections/ContactSection"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <CertificatesSection />
        <ContactSection />
      </main>
    </div>
  )
}



export default App
