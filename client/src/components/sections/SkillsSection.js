const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        {
          name: "Python",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <g>
                <path fill="#3776AB" d="M12.09 2c-1.1.01-2.16.1-3.09.27-2.73.49-3.24 1.52-3.24 3.42v2.51h6.48v.84H4.5c-1.94 0-3.5 1.17-3.5 3.13v2.94c0 1.97 1.62 3.13 3.5 3.13h1.02v-1.44c0-1.97 1.62-3.13 3.5-3.13h6.48c1.94 0 3.5-1.17 3.5-3.13V5.69c0-1.97-1.62-3.13-3.5-3.13h-1.02V4.5c0 1.97-1.62 3.13-3.5 3.13H7.5V5.69c0-1.97 1.62-3.13 3.5-3.13h1.09z"/>
                <circle fill="#FFD43B" cx="8.5" cy="7.5" r="1"/>
              </g>
            </svg>
          ),
        },
        {
          name: "C",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="#A8B9CC"/>
              <text x="12" y="16" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">C</text>
            </svg>
          ),
        },
        {
          name: "Java",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <g>
                <path fill="#5382A1" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                <path fill="#fff" d="M12 6c-2.21 0-4 1.79-4 4h2a2 2 0 1 1 4 0c0 1.1-.9 2-2 2h-1v2h1c2.21 0 4-1.79 4-4s-1.79-4-4-4z"/>
              </g>
            </svg>
          ),
        },
      ],
    },
    {
      title: "Machine Learning",
      skills: [
        {
          name: "Pandas",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <rect x="10" y="2" width="4" height="20" fill="#150458"/>
              <rect x="2" y="10" width="4" height="12" fill="#E70488"/>
              <rect x="18" y="6" width="4" height="16" fill="#150458"/>
            </svg>
          ),
        },
        {
          name: "NumPy",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="4" fill="#013243"/>
              <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">NumPy</text>
            </svg>
          ),
        },
        {
          name: "Matplotlib",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="#11557C"/>
              <circle cx="12" cy="12" r="5" fill="#FFD43B"/>
            </svg>
          ),
        },
      ],
    },
    {
      title: "Data Analytics & Visualization",
      skills: [
        {
          name: "Tableau",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <rect x="10" y="2" width="4" height="20" fill="#E97627"/>
              <rect x="2" y="10" width="20" height="4" fill="#E97627"/>
            </svg>
          ),
        },
        {
          name: "SQL",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <ellipse cx="12" cy="12" rx="10" ry="6" fill="#00758F"/>
              <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">SQL</text>
            </svg>
          ),
        },
        {
          name: "Excel",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="3" fill="#217346"/>
              <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">X</text>
            </svg>
          ),
        },
      ],
    },
    {
      title: "Web Development",
      skills: [
        {
          name: "HTML",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="4" fill="#E44D26"/>
              <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">HTML</text>
            </svg>
          ),
        },
        {
          name: "CSS",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="4" fill="#1572B6"/>
              <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">CSS</text>
            </svg>
          ),
        },
        {
          name: "JavaScript",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="4" fill="#F7DF1E"/>
              <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#000" fontWeight="bold">JS</text>
            </svg>
          ),
        },
      ],
    },
    {
      title: "Networking & Security",
      skills: [
        {
          name: "TCP/IP",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="#6A1B9A"/>
              <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">TCP/IP</text>
            </svg>
          ),
        },
        {
          name: "Network Protocols",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <rect x="4" y="4" width="16" height="16" rx="4" fill="#00838F"/>
              <text x="12" y="16" textAnchor="middle" fontSize="7" fill="#fff" fontWeight="bold">NET</text>
            </svg>
          ),
        },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        {
          name: "Git",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="4" fill="#F05032"/>
              <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">Git</text>
            </svg>
          ),
        },
        {
          name: "Docker",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="4" fill="#2496ED"/>
              <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">Docker</text>
            </svg>
          ),
        },
        {
          name: "VS Code",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="4" fill="#007ACC"/>
              <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">VS</text>
            </svg>
          ),
        },
        {
          name: "Jupyter Notebook",
          icon: (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <ellipse cx="12" cy="12" rx="10" ry="6" fill="#F37726"/>
              <text x="12" y="16" textAnchor="middle" fontSize="6" fill="#fff" fontWeight="bold">Jupyter</text>
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">The tools and technologies I use to bring ideas to life</p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="card skill-category">
              <h3 style={{ marginBottom: "1rem", color: "#2c3e50" }}>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="badge" style={{ display: "flex", alignItems: "center", gap: "0.5rem", margin: "0.25rem 0" }}>
                    {skill.icon}
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;