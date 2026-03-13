import React, { useState } from "react";
import "../App.css";
import { FaPaperPlane, FaThumbtack } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function ContactSection() {
  const [formData, setFormData] = useState({
    from_name: "",
    email_id: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_1f45nu5", "template_l20jbv8", formData, "d7Nf3ovfJ6-vyeCXG")
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ from_name: "", email_id: "", message: "" });
        },
        () => {
          alert("❌ Error sending message. Please try again later.");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contact-heading">Contact Me</h2>

      <div className="contact-content">
        {/* 🔹 Hanging Info Card */}
        <motion.div
          className="contact-info hanging-card"
          animate={{
            rotate: [-1.5, 1.5, -1.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaThumbtack className="pin-icon" />
          <p>
            Hello! I’m a passionate frontend developer who loves creating
            engaging and efficient interfaces. Whether you’re interested in
            collaborating on a project, or just want to say hi — feel free to
            reach out using the form. I’d love to connect!
          </p>
        </motion.div>

        {/* 🔹 Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email_id"
            placeholder="Your Email"
            value={formData.email_id}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="send-btn">
            <FaPaperPlane /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
