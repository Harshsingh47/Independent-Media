"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Shield, Globe, Layout as LayoutIcon, Palette, Video, Layers, ShoppingBag, Box } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
        </div>
        <div className="hero-content">
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Next-Gen Digital Solutions
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transforming Ideas Into <span className="glow-text">Digital Reality</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We build AI-powered software, blockchain platforms, modern web applications, and digital brands that scale globally.
          </motion.p>
          <motion.div 
            className="hero-btns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/services" className="btn btn-primary">Explore Services</Link>
            <Link href="/contact" className="btn btn-outline">Start Your Project</Link>
          </motion.div>
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
