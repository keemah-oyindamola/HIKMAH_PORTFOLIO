import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <p>
            📧 <strong>Email:</strong>{" "}
            <a href="mailto:hikmotbolanle15@gmail.com">
              hikmotbolanle15@gmail.com
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <form
          className="contact-form"
          action="https://formspree.io/f/myznyeke" 
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
