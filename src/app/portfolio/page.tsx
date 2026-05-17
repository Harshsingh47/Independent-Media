"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Web & Enterprise", "AI & ML", "Web3 & Blockchain", "Creative & Brand"];

  const projects = [
    {
      title: "The Swasth Bharat",
      category: "Web & Enterprise",
      description: "A comprehensive healthcare platform connecting communities with technology-driven medical solutions.",
      tech: ["Next.js", "Node.js", "PostgreSQL"],
      image: "/tsb.png",
    },
    {
      title: "Automated DeFi Arbitrage",
      category: "Web3 & Blockchain",
      description: "Advanced trading bot monitoring price differences across decentralized exchanges for automated execution.",
      tech: ["Solidity", "Rust", "Web3.js"],
      image: "/arbitrage.png",
    },
    {
      title: "Logistics Intelligence",
      category: "AI & ML",
      description: "AI-powered analytics platform transforming shipment data into real-time insights via natural language.",
      tech: ["Python", "OpenAI", "React"],
      image: "/ailogistic.png",
    },
    {
      title: "NeuralTrade AI",
      category: "AI & ML",
      description: "Advanced predictive analytics platform for global financial markets using deep learning.",
      tech: ["Python", "TensorFlow", "React", "AWS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "EtherSafe Wallet",
      category: "Web3 & Blockchain",
      description: "Non-custodial multi-chain wallet with hardware-level security and cross-chain swaps.",
      tech: ["Solidity", "Rust", "Next.js", "Ether.js"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    },

    {
      title: "Digital Nomad CRM",
      category: "Creative & Brand",
      description: "Immersive CRM platform designed for global digital agencies and creators.",
      tech: ["React", "Firebase", "Tailwind"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    }
  ];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <main>
      <section className="portfolio-hero">
        <motion.div className="hero-badge" {...fadeInUp}>Our Work</motion.div>
        <motion.h1 {...fadeInUp} transition={{ delay: 0.2 }}>
          Our Digital <span className="glow-text">Gallery</span>
        </motion.h1>
        <motion.p {...fadeInUp} transition={{ delay: 0.4 }}>
          A showcase of our most ambitious projects across the digital frontier.
        </motion.p>
      </section>

      <section className="portfolio-content">
        <div className="portfolio-filter">
          {categories.map((cat) => (
            <button 
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, i) => (
            <motion.div 
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-info">
                <span className="project-cat">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(t => <span key={t} className="tech-chip">{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
