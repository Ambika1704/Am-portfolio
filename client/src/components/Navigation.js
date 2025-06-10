import { useState, useEffect, useMemo } from "react"



const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const navItems = useMemo(() => [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Education", href: "education" },
    { name: "Certificates", href: "certificates" },
    { name: "Contact", href: "contact" },
  ], [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href)
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="nav">
      <div className="container nav-container">
        <div className="nav-logo">Ambika</div>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`nav-item ${activeSection === item.href ? "active" : ""}`}
              onClick={() => scrollToSection(item.href)}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}


export default Navigation
