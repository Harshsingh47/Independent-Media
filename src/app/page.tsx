"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Database, Shield, Globe, Layout as LayoutIcon, Palette, Video, Layers, ShoppingBag, Box } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      badge: "Next-Gen Digital Solutions",
      titlePart1: "Transforming Ideas Into",
      titlePart2: "Digital Reality",
      description: "We build AI-powered software, blockchain platforms, modern web applications, and digital brands that scale globally.",
      ctaText: "Explore Services",
      ctaLink: "/services",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070"
    },
    {
      badge: "AI & Innovation",
      titlePart1: "Empowering Business With",
      titlePart2: "Intelligent AI",
      description: "Leverage neural networks and machine learning to automate complex workflows and gain predictive insights.",
      ctaText: "AI Solutions",
      ctaLink: "/technologies",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070"
    },
    {
      badge: "Blockchain Powerhouse",
      titlePart1: "Building Secure &",
      titlePart2: "Decentralized Future",
      description: "From smart contracts to custom dApps, we architect transparent and immutable systems for the Web3 era.",
      ctaText: "Blockchain Tech",
      ctaLink: "/technologies",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070"
    },
    {
      badge: "Creative Excellence",
      titlePart1: "Crafting Cinematic",
      titlePart2: "Brand Identities",
      description: "Blending high-end design with strategic marketing to make your brand unforgettable in the digital landscape.",
      ctaText: "View Portfolio",
      ctaLink: "/portfolio",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const services = [
    {
      title: "Full-Stack Solutions",
      description: "Expert development in MERN and MEAN stacks for scalable, high-performance applications.",
      icon: <Layers size={32} />,
      link: "/services"
    },
    {
      title: "CMS & E-commerce",
      description: "Custom WordPress and Shopify solutions tailored for global scale and massive growth.",
      icon: <ShoppingBag size={32} />,
      link: "/services"
    },
    {
      title: "AI Development",
      description: "Next-gen machine learning and neural network solutions for business automation.",
      icon: <Cpu size={32} />,
      link: "/services"
    },
    {
      title: "Blockchain & Web3",
      description: "Secure smart contracts, dApps, and scalable blockchain infrastructure.",
      icon: <Box size={32} />,
      link: "/services"
    }
  ];

  return (
    <main>
      {/* Cursor Glow */}
      <div 
        className="cursor-glow" 
        style={{ 
          left: `${mousePos.x}px`, 
          top: `${mousePos.y}px` 
        }} 
      />

      {/* Hero Carousel Section */}
      <section id="home" className="hero-carousel-container">
        <AnimatePresence mode="wait">
          <motion.div 
            key={`bg-${currentSlide}`}
            className="hero-background-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
          >
            <div className="hero-overlay"></div>
          </motion.div>
        </AnimatePresence>

        <div className="hero-background">
          <div className="hero-gradient"></div>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            className="hero-content"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.div 
              className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {heroSlides[currentSlide].badge}
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {heroSlides[currentSlide].titlePart1} <span className="glow-text">{heroSlides[currentSlide].titlePart2}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {heroSlides[currentSlide].description}
            </motion.p>
            <motion.div 
              className="hero-btns"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href={heroSlides[currentSlide].ctaLink} className="btn btn-primary">
                {heroSlides[currentSlide].ctaText}
              </Link>
              <Link href="/contact" className="btn btn-outline">Start Your Project</Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {heroSlides.map((_, index) => (
            <button 
              key={index} 
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="section-header">
          <motion.h2 className="section-title" {...fadeInUp}>Our Premium Services</motion.h2>
          <motion.p className="section-subtitle" {...fadeInUp} transition={{ delay: 0.2 }}>
            Cutting-edge solutions tailored for the digital era.
          </motion.p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard 
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section id="tech" className="tech">
        <div className="tech-container">
          <div className="tech-content">
            <motion.h2 className="section-title" {...fadeInUp}>Futuristic Tech Stack</motion.h2>
            <motion.p {...fadeInUp} transition={{ delay: 0.2 }}>
              We leverage the most advanced technologies to build the future of digital solutions.
            </motion.p>
            <div className="tech-list">
              {["React / Next.js", "Node.js / Express", "Solidity / Rust", "TensorFlow / OpenAI", "AWS / Docker", "MongoDB / Postgres"].map((tag, i) => (
                <motion.span 
                  key={tag} 
                  className="tech-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="tech-visual">
            <div className="orbit-container">
              <div className="orbit-center">
                <Cpu size={40} color="white" />
              </div>
              <div className="orbit-path path-1">
                <div className="orbit-item item-1">React</div>
                <div className="orbit-item item-2">AI</div>
              </div>
              <div className="orbit-path path-2">
                <div className="orbit-item item-3">Node</div>
                <div className="orbit-item item-4">Web3</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
