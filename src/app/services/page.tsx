"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Shield, Globe, Layout as LayoutIcon, Palette, Video, Layers, ShoppingBag } from "lucide-react";
import { useState } from "react";

export default function Services() {
  const [activeTab, setActiveTab] = useState("Technology");

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const serviceCategories = {
    "Technology": [
      {
        title: "AI & Machine Learning",
        description: "We build intelligent systems that learn, adapt, and evolve. From predictive analytics to generative AI, we empower your business with data-driven intelligence.",
        features: ["Custom Neural Networks", "Natural Language Processing", "Computer Vision Solutions", "AI Strategy & Integration"],
        icon: <Cpu size={100} strokeWidth={0.5} />,
        reverse: false
      },
      {
        title: "Blockchain & Web3",
        description: "Decentralize your operations with secure, transparent, and scalable blockchain solutions. We specialize in building the backbone of the next internet.",
        features: ["Smart Contract Development", "DeFi Platforms", "NFT Marketplaces", "Private Blockchain Infrastructure"],
        icon: <Shield size={100} strokeWidth={0.5} />,
        reverse: true
      },
      {
        title: "Full-Stack Development",
        description: "High-performance applications built with industry-leading stacks. We specialize in MERN and MEAN architectures for scalable, real-time digital products.",
        features: ["MERN (MongoDB, Express, React, Node)", "MEAN (MongoDB, Express, Angular, Node)", "Real-time API Integration", "Cloud-Native Deployment"],
        icon: <Layers size={100} strokeWidth={0.5} />,
        reverse: false
      },
      {
        title: "E-commerce & CMS Solutions",
        description: "Transform your business into an online powerhouse. We build custom themes and robust backend systems for Shopify and WordPress.",
        features: ["Custom Shopify Development", "Advanced WordPress Solutions", "WooCommerce Integration", "Headless CMS Architectures"],
        icon: <ShoppingBag size={100} strokeWidth={0.5} />,
        reverse: true
      }
    ],
    "Creative & Marketing": [
      {
        title: "Digital Marketing & SEO",
        description: "Dominate the digital landscape with data-driven marketing strategies and search engine optimization that puts you at the top of results.",
        features: ["Global SEO Strategy", "PPC Campaign Management", "Performance Analytics", "Growth Hacking"],
        icon: <Globe size={100} strokeWidth={0.5} />,
        reverse: false
      },
      {
        title: "Branding & Identity",
        description: "Crafting legendary identities for futuristic brands. We define your voice, visual language, and market position for maximum impact.",
        features: ["Visual Identity Design", "Brand Strategy", "Voice & Tone Definition", "Brand Guidelines"],
        icon: <LayoutIcon size={100} strokeWidth={0.5} />,
        reverse: true
      },
      {
        title: "Video Production & Editing",
        description: "Cinematic storytelling for the digital era. High-end video production and editing that captures attention and drives conversion.",
        features: ["Motion Graphics", "Color Grading", "Sound Design", "Social Media Content"],
        icon: <Video size={100} strokeWidth={0.5} />,
        reverse: false
      },
      {
        title: "Graphic & UI Design",
        description: "Stunning visual assets that bridge the gap between aesthetics and function. From high-end graphics to immersive UI components.",
        features: ["Social Media Assets", "Print & Digital Media", "Interactive Prototyping", "Design Systems"],
        icon: <Palette size={100} strokeWidth={0.5} />,
        reverse: true
      }
    ]
  };

  return (
    <main>
      <section className="services-hero">
        <motion.div className="hero-badge" {...fadeInUp}>Expertise</motion.div>
        <motion.h1 {...fadeInUp} transition={{ delay: 0.2 }}>
          Our Specialized <span className="glow-text">Solutions</span>
        </motion.h1>
      </section>

      <div className="category-tabs">
        {Object.keys(serviceCategories).map((tab) => (
          <button 
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <section className="services-detailed">
        {serviceCategories[activeTab as keyof typeof serviceCategories].map((service, i) => (
          <motion.div 
            key={service.title} 
            className={`service-block ${service.reverse ? "reverse" : ""}`}
            initial={{ opacity: 0, x: service.reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="service-info">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <button className="btn btn-outline">Explore {service.title.split(' ')[0]}</button>
            </div>
            <motion.div 
              className="service-image"
              whileHover={{ scale: 1.05, rotate: service.reverse ? -2 : 2 }}
            >
              {service.icon}
            </motion.div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
