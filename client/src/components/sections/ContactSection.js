import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section contact" style={{ color: "#111" }}>
      <div className="container" style={{ maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "2.5rem", margin: "2rem 0 1rem 0" }}>
          Contact Me
        </h2>
        <p style={{ textAlign: "center", marginBottom: "2.5rem", fontSize: "1.2rem" }}>
          I'd be happy to connect with you. Send a message or find me online
        </p>
        <form
          onSubmit={handleSubmit}
          style={{
            background: "#fff",
            borderRadius: "2rem",
            padding: "2.5rem 2rem",
            // boxShadow 
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <div>
              <label style={{ fontWeight: "bold", marginBottom: 8, display: "block", color: "#111" }}>
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  borderRadius: "0.7rem",
                  border: "1px solid #444",
                  background: "#f7f7f7",
                  color: "#111",
                  fontSize: "1rem",
                  marginBottom: "1rem",
                }}
              />
            </div>
            <div>
              <label style={{ fontWeight: "bold", marginBottom: 8, display: "block", color: "#111" }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  borderRadius: "0.7rem",
                  border: "1px solid #444",
                  background: "#f7f7f7",
                  color: "#111",
                  fontSize: "1rem",
                  marginBottom: "1rem",
                }}
              />
            </div>
          </div>
          {/* Subject field */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ fontWeight: "bold", marginBottom: 8, display: "block", color: "#111" }}>
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.8rem",
                borderRadius: "0.7rem",
                border: "1px solid #444",
                background: "#f7f7f7",
                color: "#111",
                fontSize: "1rem",
                marginBottom: "1rem",
              }}
            />
          </div>
          <div>
            <label style={{ fontWeight: "bold", marginBottom: 8, display: "block", color: "#111" }}>
              Message
            </label>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              style={{
                width: "100%",
                padding: "0.8rem",
                borderRadius: "0.7rem",
                border: "1px solid #444",
                background: "#f7f7f7",
                color: "#111",
                fontSize: "1rem",
                marginBottom: "1.5rem",
                resize: "vertical",
              }}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
               <div style={{ display: "flex", justifyContent: "center", gap: "2.5rem", marginTop: "2.5rem" }}>
          <a
            href="https://linkedin.com/in/ambika-b-sajjan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "#fff",
            }}
          >
            <svg width="40" height="40" viewBox="0 0 34 34" fill="black">
              <g>
                <rect x="0" y="0" width="34" height="34" rx="8" fill="none" />
                <path d="M27 27h-4.2v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V27H14V14h4v1.8h.1c.6-1.1 2-2.2 4-2.2 4.3 0 5.1 2.8 5.1 6.3V27zM9 12.5a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8zm2.1 14.5H6.9V14h4.2v13z" />
              </g>
            </svg>
          </a>
          <a
            href="https://github.com/Ambika1704"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "#fff",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#111">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
        </div>
      
      </div>
    </section>
  );
};

export default ContactSection;
