"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    details: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const handleManualSubmit = async () => {
    // Basic validation
    if (!formData.name || !formData.email) {
      alert("Please fill in your name and email.");
      return;
    }

    setIsSubmitting(true);
    console.log("Starting submission process...");

    try {
      // 1. Send email via selected provider
      // Using Formspree as confirmed working
      const FORMSPREE_ID = "xaqvrkgg"; 
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.details
        }),
      });

      if (response.ok) {
        alert("Thank you! Your message has been sent successfully. We will get back to you soon.");
        setFormData({ name: "", email: "", service: "", details: "" });
      } else {
        throw new Error("Failed to send message");
      }
      
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-section">
        <div className="contact-info">
          <motion.div className="hero-badge" {...fadeInUp}>Connect</motion.div>
          <motion.h1 {...fadeInUp} transition={{ delay: 0.2 }}>
            Let's Build the <span className="glow-text">Future</span>
          </motion.h1>
          <motion.p {...fadeInUp} transition={{ delay: 0.4 }}>
            Ready to transform your digital presence? Reach out to our team of experts and let's start your journey.
          </motion.p>
          
          <div className="contact-cards">
            <motion.div 
              className="contact-card"
              {...fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <div className="icon"><Mail size={24} /></div>
              <div>
                <h4>Email Us</h4>
                <p>info@independentmedias.in</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="contact-card"
              {...fadeInUp}
              transition={{ delay: 0.7 }}
            >
              <div className="icon"><Phone size={24} /></div>
              <div>
                <h4>Call Us</h4>
                <p>+91 80915 56755</p>
                <p>+91 70182 27148</p>
              </div>
            </motion.div>

            <motion.div 
              className="contact-card"
              {...fadeInUp}
              transition={{ delay: 0.8 }}
            >
              <div className="icon"><MapPin size={24} /></div>
              <div>
                <h4>Office Location</h4>
                <p>Solan near Regional hospital, HP</p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="contact-form-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="form-wrapper">
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Work Email</label>
              <input 
                type="email" 
                placeholder="john@company.com" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Service Interest</label>
              <input 
                type="text" 
                placeholder="AI Development, Web3, etc." 
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Project Details</label>
              <textarea 
                rows={5} 
                placeholder="Tell us about your vision..."
                value={formData.details}
                onChange={(e) => setFormData({...formData, details: e.target.value})}
              ></textarea>
            </div>
            <button 
              type="button" 
              className="submit-btn" 
              onClick={handleManualSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Send Message"} 
              {!isSubmitting && <Send size={18} style={{ display: 'inline', marginLeft: '10px', verticalAlign: 'middle' }} />}
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
