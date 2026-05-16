import Link from "next/link";
import { Linkedin, Twitter, Instagram, Github, Send, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      <div className="footer-grid">
        <div className="footer-info">
          <div className="footer-logo">
            <Link href="/" className="logo-wrapper">
              <img src="/logo1.png" alt="IM Logo" className="logo-img" />
              <span className="logo-text">INDEPENDENT <span className="accent">MEDIAS</span></span>
            </Link>
          </div>
          <p className="footer-desc">
            We are architects of the digital future, blending cutting-edge technology with cinematic design to build products that scale and inspire.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon"><Linkedin size={18} /></a>
            <a href="#" className="social-icon"><Twitter size={18} /></a>
            <a href="#" className="social-icon"><Instagram size={18} /></a>
            <a href="#" className="social-icon"><Github size={18} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Expertise</h4>
          <ul>
            <li><Link href="/services">MERN & MEAN Stack</Link></li>
            <li><Link href="/services">AI & Neural Networks</Link></li>
            <li><Link href="/services">Web3 & Blockchain</Link></li>
            <li><Link href="/services">Digital Marketing</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">Our Legacy</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contact">Get in Touch</Link></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Join the Future</h4>
          <p>Subscribe to our newsletter for the latest tech insights.</p>
          <form className="newsletter-form">
            <div className="input-wrapper">
              <Mail size={16} className="input-icon" />
              <input type="email" placeholder="Email Address" required />
            </div>
            <button type="submit" className="newsletter-btn">
              <Send size={18} />
            </button>
          </form>
          <div className="footer-contact-mini">
            <span><MapPin size={14} /> Solan near Regional hospital, HP</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} Independent Medias. All rights reserved.</p>
          <div className="footer-legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
