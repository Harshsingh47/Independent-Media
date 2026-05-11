"use client";

import { motion } from "framer-motion";
import { Rocket, Target, Zap, ShieldCheck, Heart, Sparkles } from "lucide-react";

export default function About() {
  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "50+", label: "AI Solutions" },
    { number: "12", label: "Global Awards" },
    { number: "99%", label: "Client Satisfaction" },
  ];

  const timeline = [
    { 
      year: "2020", 
      title: "Foundation", 
      description: "Independent Medias was born with a vision to bridge the gap between creative design and complex engineering.",
      icon: <Sparkles size={24} />
    },
    { 
      year: "2021", 
      title: "AI Pivot", 
      description: "Expanded into AI and Machine Learning, helping enterprises automate complex workflows.",
      icon: <Zap size={24} />
    },
    { 
      year: "2022", 
      title: "Web3 Era", 
      description: "Launched our dedicated Blockchain division, building secure dApps and smart contracts.",
      icon: <ShieldCheck size={24} />
    },
    { 
      year: "2023", 
      title: "Creative Transformation", 
      description: "Integrated full-scale Digital Marketing and Cinematic Video departments to provide 360° digital growth.",
      icon: <Target size={24} />
    },
    { 
      year: "2024", 
      title: "Global Scale", 
      description: "Now serving clients across 4 continents with a team of 100+ digital architects.",
      icon: <Rocket size={24} />
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <main>
      {/* Existing sections... */}
      <section className="about-hero">
        <motion.div className="hero-badge" {...fadeInUp}>Our Legacy</motion.div>
        <motion.h1 {...fadeInUp} transition={{ delay: 0.2 }}>
          Architects of the <span className="glow-text">Digital Future</span>
        </motion.h1>
        <motion.p {...fadeInUp} transition={{ delay: 0.4 }}>
          Independent Medias is a global technology powerhouse dedicated to pushing the boundaries of what's possible in the digital realm.
        </motion.p>
        
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label} 
              className="stat-item"
              {...fadeInUp}
              transition={{ delay: 0.1 * i + 0.5 }}
            >
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission">
        <div className="vision-grid">
          <motion.div 
            className="vision-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="card-icon"><Rocket size={40} /></div>
            <h2>Our Vision</h2>
            <p>To be the world's most innovative digital architect, creating technology that empowers humanity and redefines reality.</p>
            <div className="card-glow"></div>
          </motion.div>
          <motion.div 
            className="vision-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="card-icon"><Target size={40} /></div>
            <h2>Our Mission</h2>
            <p>We combine cutting-edge engineering with boundless creativity to build digital products that scale, inspire, and endure.</p>
            <div className="card-glow"></div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section">
        <div className="section-header">
          <motion.h2 className="section-title" {...fadeInUp}>Our Core Values</motion.h2>
          <motion.p {...fadeInUp} transition={{ delay: 0.2 }}>The principles that drive every project we undertake.</motion.p>
        </div>
        <div className="values-grid">
          {[
            { icon: <Zap />, title: "Innovation", text: "Pushing boundaries with next-gen tech." },
            { icon: <ShieldCheck />, title: "Excellence", text: "Zero compromise on quality and performance." },
            { icon: <Heart />, title: "Human-Centric", text: "Building tech that solves real human problems." },
            { icon: <Sparkles />, title: "Creativity", text: "Blending art with data-driven engineering." },
          ].map((value, i) => (
            <motion.div 
              key={value.title} 
              className="value-card"
              {...fadeInUp}
              transition={{ delay: 0.1 * i }}
              whileHover={{ y: -10 }}
            >
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Creative Philosophy Section */}
      <section className="philosophy-section">
        <div className="philosophy-content">
          <motion.div 
            className="phi-glow"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          ></motion.div>
          <motion.div className="phi-text" {...fadeInUp}>
            <span className="accent-text">Our Philosophy</span>
            <h2>Blending <span className="glow-text">Intelligence</span> with Imagination</h2>
            <p>At Independent Medias, we don't just write code; we craft experiences. We believe that the most powerful digital solutions are born at the intersection of rigorous logic and unbridled creativity.</p>
          </motion.div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="journey-section">
        <div className="section-header">
          <motion.h2 className="section-title" {...fadeInUp}>Our Journey</motion.h2>
          <motion.p {...fadeInUp} transition={{ delay: 0.2 }}>A chronological path of innovation and growth.</motion.p>
        </div>
        
        <div className="timeline-container">
          <div className="timeline-main-line"></div>
          
          {timeline.map((item, i) => (
            <motion.div 
              key={item.year}
              className={`timeline-block ${i % 2 === 0 ? "left" : "right"}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="timeline-dot">
                <div className="dot-inner">{item.icon}</div>
              </div>
              
              <div className="timeline-card">
                <div className="year-tag">{item.year}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="card-accent-line"></div>
              </div>
              
              <div className="timeline-year-bg">{item.year}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
