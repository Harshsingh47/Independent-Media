"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <main>
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
                <p>hello@independentmedias.com</p>
              </div>
            </motion.div>
            <motion.div 
              className="contact-card"
              {...fadeInUp}
              transition={{ delay: 0.7 }}
            >
              <div className="icon"><MapPin size={24} /></div>
              <div>
                <h4>Global Headquarters</h4>
                <p>Digital Hub, Neo Tokyo / Silicon Valley</p>
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
          <form id="contact-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label>Work Email</label>
              <input type="email" placeholder="john@company.com" required />
            </div>
            <div className="form-group">
              <label>Service Interest</label>
              <input type="text" placeholder="AI Development, Web3, etc." />
            </div>
            <div className="form-group">
              <label>Project Details</label>
              <textarea rows={5} placeholder="Tell us about your vision..."></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message <Send size={18} style={{ display: 'inline', marginLeft: '10px', verticalAlign: 'middle' }} />
            </button>
          </form>
        </motion.div>
      </section>
    </main>
  );
}
