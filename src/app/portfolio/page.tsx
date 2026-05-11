"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "AI & ML", "Web3 & Blockchain", "Creative & Brand"];

  const projects = [
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
      title: "Neo Tokyo Identity",
      category: "Creative & Brand",
      description: "Complete visual identity and cinematic brand guidelines for a futuristic tech hub.",
      tech: ["After Effects", "Blender", "Figma"],
      image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "SaaS Matrix",
      category: "AI & ML",
      description: "Enterprise-grade automation platform for cloud infrastructure management.",
      tech: ["Node.js", "Kubernetes", "Next.js"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "ChainGuard Protocol",
      category: "Web3 & Blockchain",
      description: "Security auditing tool for smart contracts with real-time vulnerability detection.",
      tech: ["Go", "Solidity", "TypeScript"],
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800",
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
                <div className="project-overlay">
                  <div className="overlay-btns">
                    <button className="overlay-btn"><Eye size={20} /></button>
                    <button className="overlay-btn"><ExternalLink size={20} /></button>
                  </div>
                </div>
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
