import { useState, useRef } from "react";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email_id: "",
    subject: "",
    message: "",
  });

  const formRef = useRef();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bmlfu44", 
        "template_ltos228",  
        formRef.current,
        "hrLM5-R8VkrzXHR-V"   
      )
      .then(
        () => {
          alert("Message sent!");
          setFormData({ from_name: "", email_id: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Email error:", error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="section contact" style={{ color: "#111" }}>
      <div className="container" style={{ maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "2.5rem", margin: "2rem 0 1rem 0" }}>
          Contact Me
        </h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          style={{
            background: "#fff",
            borderRadius: "2rem",
            padding: "2.5rem 2rem",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                value={formData.from_name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email_id"
                placeholder="Your Email"
                value={formData.email_id}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
