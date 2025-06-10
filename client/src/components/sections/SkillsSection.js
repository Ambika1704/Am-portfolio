const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        {
          name: "Python",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
              <path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path>
            </svg>
          ),
        },
        {
          name: "C",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
              <path fill="#283593" fill-rule="evenodd" d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z" clip-rule="evenodd"></path><path fill="#5c6bc0" fill-rule="evenodd" d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z" clip-rule="evenodd"></path><path fill="#3949ab" fill-rule="evenodd" d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z" clip-rule="evenodd"></path>
            </svg>
          ),
        },
        {
          name: "Java",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
              <path fill="#F44336" d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"></path><path fill="#F44336" d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"></path><g><path fill="#1565C0" d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"></path><path fill="#1565C0" d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"></path><path fill="#1565C0" d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"></path><path fill="#1565C0" d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"></path><path fill="#1565C0" d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"></path></g>
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
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
              <rect width="1.5" height="9" x="22.75" y="1" fill="#78909c"></rect><rect width="9" height="1.5" x="19" y="4.75" fill="#78909c"></rect><rect width="1.5" height="9" x="40.75" y="19" fill="#5c6bc0"></rect><rect width="9" height="1.5" x="37" y="22.75" fill="#5c6bc0"></rect><rect width="1.5" height="9" x="4.75" y="19" fill="#78909c"></rect><rect width="9" height="1.5" x="1" y="22.75" fill="#78909c"></rect><rect width="1.5" height="9" x="22.75" y="37" fill="#5c6bc0"></rect><rect width="9" height="1.5" x="19" y="40.75" fill="#5c6bc0"></rect><rect width="17" height="3" x="15" y="22" fill="#e8762d"></rect><rect width="3" height="17" x="22" y="15" fill="#e8762d"></rect><rect width="2" height="14" x="11" y="6" fill="#ffa000"></rect><rect width="14" height="2" x="5" y="12" fill="#ffa000"></rect><rect width="2" height="14" x="34" y="6" fill="#607d8b"></rect><rect width="14" height="2" x="28" y="12" fill="#607d8b"></rect><rect width="2" height="14" x="11" y="27" fill="#c62828"></rect><rect width="14" height="2" x="5" y="33" fill="#c62828"></rect><rect width="2" height="14" x="34" y="27" fill="#0d47a1"></rect><rect width="14" height="2" x="28" y="33" fill="#0d47a1"></rect>
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
           <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
              <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
            </svg>
          ),
        },
        {
          name: "CSS",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
              <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
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