const AboutSection = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know more about my background and what drives me</p>

        <div className="about-grid">
          <div className="grid">
            <div className="about-card">
              <p style={{ color: "black", lineHeight: "1.6" }}>
                I'm Ambika, a second-year Bachelor of Computer Applications (BCA) student at Jain University,
                with a background in biology and a growing passion for technology. My journey from life sciences
                to computer science has been driven by a strong interest in how machine learning and data can create
                impactful, real-world solutions.
              </p>
            </div>

            <div className="about-card">
              <p style={{ color: "black", lineHeight: "1.6" }}>
                I’ve completed certifications in C, Python, and Machine Learning, and I’m continuously working 
                to strengthen my skills in Artificial Intelligence and Data Analytics. I love exploring how intelligent 
                systems learn from data and improve over time—this blend of logic and learning fascinates me.
              </p>
            </div>

            <div className="about-card">
              <p style={{ color: "#7f8c8d", lineHeight: "1.6" }}>
                While I’m still learning and experimenting, I believe in consistent growth, staying curious, 
                and using technology to make a difference. When I’m not studying or coding, I enjoy reading non-fiction, 
                reflecting on self-improvement, and dreaming big about where my journey in tech will take me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
