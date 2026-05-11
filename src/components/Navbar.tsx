"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const scrollBar = document.getElementById("scroll-bar");
      if (scrollBar) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollBar.style.width = scrolled + "%";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Technologies", href: "/technologies" },
    { name: "Portfolio", href: "/portfolio" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" id="scroll-bar"></div>
      </div>
      <div className="nav-container">
        <div className="logo">
          <Link href="/" className="logo-wrapper">
            <img src="/logo1.png" alt="IM Logo" className="logo-img" />
            <span className="logo-text">INDEPENDENT <span className="accent">MEDIAS</span></span>
          </Link>
        </div>
        
        <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href} 
                className={pathname === link.href ? "active" : ""}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
                <span className="link-indicator"></span>
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="nav-cta" onClick={() => setMobileMenuOpen(false)}>
              Start Project
            </Link>
          </li>
        </ul>

        <div 
          className={`mobile-menu-btn ${mobileMenuOpen ? "active" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="menu-bar"></div>
          <div className="menu-bar"></div>
          <div className="menu-bar"></div>
        </div>
      </div>
      
      {/* Mobile Overlay */}
      <div 
        className={`nav-overlay ${mobileMenuOpen ? "active" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>
    </nav>
  );
};

export default Navbar;
