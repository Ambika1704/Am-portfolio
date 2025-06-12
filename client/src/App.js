import React, { useState, useEffect } from "react"
import Navigation from "./components/Navigation"
import HeroSection from "./components/sections/HeroSection"
import AboutSection from "./components/sections/AboutSection"
import SkillsSection from "./components/sections/SkillsSection"
import EducationSection from "./components/sections/EducationSection"
import CertificatesSection from "./components/sections/CertificateSection"
import ContactSection from "./components/sections/ContactSection"
import Loading from "./components/Loading"
import "./App.css"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can adjust this or remove it)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navigation />
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <EducationSection />
            <CertificatesSection />
            <ContactSection />
          </main>
        </>
      )}
    </div>
  )
}

export default App
