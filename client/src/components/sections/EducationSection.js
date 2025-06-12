import React from 'react';

const EducationSection = () => {
  const education = [
    {
      degree: "BCA (Bachelor of Computer Applications)",
      school: "Jain University",
      period: "2023 - 2026",
      gpa: "8.12 SGPA",
      skills: ["Python", "Java", "C", "Data Structures", "Algorithms"],
    },
    {
      degree: "PU",
      school: "St. Claret PU College",
      period: "2021 - 2023",
      gpa: "85.16%",
      skills: ["PCMB", "Communication", "Time Management"],
    },
  ];

  return (
    <section id="education" className="section about">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          My academic background and continuous learning journey
        </p>

        <div className="grid">
          {education.map((edu, index) => (
            <div key={index} className="card">
              <div className="timeline-item">
                <div className="timeline-icon">
                  {edu.school === "Jain University" ? (
                      <img
                        src={process.env.PUBLIC_URL + '/images/jain_logo.jpeg'}
                        alt="Jain University logo"
                        style={{
                          width: "60px",
                          height: "60px",
                          background: "#fff",
                          objectFit: "cover",
                          padding: "6px",
                          boxSizing: "border-box"
                        }}
                      />
                  ) : edu.school === "St. Claret PU College" ? (
                      <img
                        src={process.env.PUBLIC_URL + '/images/pu_logo.jpg'}
                        alt="St. Claret PU College logo"
                        style={{
                          width: "60px",
                          height: "60px",
                          background: "#fff",
                          objectFit: "cover",
                          padding: "6px",
                          boxSizing: "border-box"
                        }}
                      />
                  ) : (
                    "🎓"
                  )}
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{edu.degree}</h3>
                  <div className="timeline-meta">
                    <strong>{edu.school}</strong> • {edu.period} • {edu.gpa}
                  </div>
                  <div>
                    <h4
                      style={{ marginBottom: "0.5rem", color: "#2c3e50" }}
                    >
                      Skills
                    </h4>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                      }}
                    >
                      {edu.skills.map((skill, i) => (
                        <span key={i} className="badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
