import React, { useState } from "react";

const certificateCategories = [
  {
    category: "Machine Learning & AI",
    certificates: [
      {
        title: "Machine Learning with Python: Foundations",
        url: "https://www.linkedin.com/learning/certificates/f2e67f8ce3ce8e1d79f3140cce0f6e7d6cd6b87a4080ede4857a390f706bd079?trk=share_certificate",
        skills: ["Supervised Learning", "Unsupervised Learning", "Python"],
      },
      {
        title: "Getting and Cleaning Data",
        url: "https://www.coursera.org/account/accomplishments/verify/FPLWABTSIQ43?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
        skills: ["Data Management", "Data Cleaning", "Data Manipulation", "Data Import and Export"],
      },
      // Add more ML certificates here
    ],
  },
  {
    category: "Data Analytics & Visualization",
    certificates: [
      {
        title: "Tableau",
        issuer: " Professional Certifications and Continuing Education Units (CEUs)",
        url: "https://www.linkedin.com/learning/certificates/567dc6301483f3c4bb980c4b483e63f3321939179cd92e9039739a32d3d05d45?trk=share_certificate",
        skills: ["Tableau", "Data Visualization", "Dashboards"],
      },
      {
        title: "Introduction to Data Analytics",
        issuer: "IBM",
        url: "https://coursera.org/share/d0215fdb99f971c91b6ef21dcd7dc037",
        skills: ["Data Analysis", "Data Warehousing", "Data Collection", "Microsoft Excel", "Data Cleansing", "Data Lakes", "Data Science"],
      },
      {
        title: "The Structured Query Language (SQL)",
        issuer: "Coursera",
        url: "https://coursera.org/share/e1b0c230fd208d20c60c381abd845988",
        skills: ["Data Analysis", "Data Manipulation", "Query Languages", "Data Integrity", "Relational Databases", "database administration", "Database Theory", "SQL", "Database Application"],
      },
      {
        title: "Statistics Foundations",
        issuer: "Meta",
        url: "https://coursera.org/share/aff326672d0799b8f501ce44f15f008e",
        skills: ["Spreadsheet Software", "Data Analysis", "Time Series Analysis and Forecasting", "Descriptive Statistics", "Probability & Statistics", "Tableau Softwares"],
      }

      // Add more Data Viz certificates here
    ],
  },
  {
    category: "Web Development",
    certificates: [
      {
        title: "Introduction to HTML, CSS, & JavaScript",
        issuer: "IBM",
        url: "https://coursera.org/share/43b6f1ffa97204fc4852c6884c9931e2",
        skills: ["Html", "CSS", "JavaScript", "Bootstrap (Front-End Framework)"],
      },
      {
        title: "Software Engineering: Implementation and Testing",
        issuer: "Udemy",
        url: "https://coursera.org/share/22b157a74b488b6a2e318ad37693286d",
        skills: ["Project Management", "Software Testing", "Unit Testing", "Unified Modeling Language", "Requirements Analysis", "Configuration Management", "Software Development Life Cycle"],
      },
      {
        title: "Crash Course on Python",
        issuer: "Google",
        url: "https://coursera.org/share/ffa655216c123e328eab21c2733a3e5d",
        skills: ["Development Environment", "Computational Thinking", "Scripting", "Algorithms", "Computer Programming", "Programming Principles", "Debugging", "Integrated Development Environments"],
      },
      // Add more Web Dev certificates here
    ],
  },
  {
    category: "Networking & Security",
    certificates: [
      {
        title: "Basics of Cisco Networking",
        url: "https://coursera.org/share/d8cdc63ed283f39a790cf2e6497165d9",
        skills: ["Command-Line Interface", "OSI Models", "Network Infrastructure", "Network Routing", "Network Security", "General Networking", "Local Area Networks", "Network Administration"],
      },
      {
        title: "Introduction to TCP/IP",
        url: "https://coursera.org/share/4ce81a9c775e2b395de7b881f9e8d9d6",
        skills: ["File Transfer Protocol (FTP)", "Intrusion Detection and Prevention", "Network Security", "Network Routing", "System Configuration", "General Networking", "Dynamic Host Configuration Protocol (DHCP)"],
      },
      // Add more Cloud/DB certificates here
    ],
  },
];

const CertificatesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const openModal = (category) => setSelectedCategory(category);
  const closeModal = () => setSelectedCategory(null);

  return (
    <section id="certificates" className="section">
      <div className="container">
        <h2 className="section-title">Certificates & Credentials</h2>
        <p className="section-subtitle">Click a category to view all certificates</p>

        <div className="grid-2">
          {certificateCategories.map((cat, idx) => (
            <div
              key={idx}
              className="card"
              style={{ cursor: "pointer" }}
              onClick={() => openModal(cat)}
            >
              <div className="timeline-item">
                <div className="timeline-icon"></div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{cat.category}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCategory && (
          <div
            className="modal"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
            }}
            onClick={closeModal}
          >
            <div
              className="modal-content"
              style={{
                background: "#fff",
                borderRadius: "8px",
                padding: "2rem",
                minWidth: "320px",
                maxWidth: "90vw",
                maxHeight: "80vh",
                overflowY: "auto",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  background: "none",
                  border: "none",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
                aria-label="Close"
              >
                &times;
              </button>
              <h3 style={{ marginBottom: "1rem" }}>{selectedCategory.category} Certificates</h3>
              {selectedCategory.certificates.map((cert, i) => (
                <div key={i} style={{ marginBottom: "1.5rem", borderBottom: "1px solid #eee", paddingBottom: "1rem" }}>
                  <h4 style={{ margin: 0 }}>{cert.title}</h4>
                  <div style={{ margin: "0.5rem 0" }}>
                    <span style={{ fontWeight: "bold", fontSize: "0.95rem" }}>Skills Gained: </span>
                    {cert.skills.map((skill, j) => (
                      <span key={j} className="badge" style={{ marginRight: "0.3rem", fontSize: "0.8rem" }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ fontSize: "0.85rem", marginTop: "0.5rem", display: "inline-block" }}
                  >
                    Credential
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificatesSection;