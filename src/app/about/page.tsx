"use client";

import { motion } from "framer-motion";
import { Rocket, Target, Zap, ShieldCheck, Heart, Sparkles } from "lucide-react";

export default function About() {
  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "100+", label: "Digital Architects" },
    { number: "4", label: "Continents Served" },
    { number: "99%", label: "Client Satisfaction" },
  ];

  const timeline = [
    { 
      year: "2020", 
      title: "Foundation", 
      description: "Inception of a new digital paradigm. We established our core foundation, assembling a premier team of developers and designers united by a single vision: engineering flawless, high-performance digital experiences.",
      icon: <Sparkles size={24} />
    },
    { 
      year: "2021", 
      title: "AI Pivot", 
      description: "The dawn of intelligence. We launched our dedicated AI division, pioneering machine learning workflows and automated systems that empowered our earliest enterprise partners to scale exponentially.",
      icon: <Zap size={24} />
    },
    { 
      year: "2022", 
      title: "Web3 Era", 
      description: "Entering the decentralized frontier. Our blockchain engineering unit was formed, successfully auditing and deploying resilient smart contracts and Web3 infrastructure for next-generation financial protocols.",
      icon: <ShieldCheck size={24} />
    },
    { 
      year: "2023", 
      title: "Creative Transformation", 
      description: "The creative evolution. Recognizing the need for holistic brand dominance, we integrated cinematic video production and data-driven growth marketing to deliver end-to-end 360° digital transformation.",
      icon: <Target size={24} />
    },
    { 
      year: "2024", 
      title: "Global Scale", 
      description: "A global powerhouse. We've scaled our operations across four continents, deploying a formidable collective of over 100 digital architects, engineers, and strategists serving industry-leading brands worldwide.",
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
      <section className="journey-section" style={{ padding: '120px 10%', position: 'relative', overflow: 'hidden', background: '#010816' }}>
        <div className="section-header" style={{ marginBottom: '100px', position: 'relative', zIndex: 1 }}>
          <motion.h2 className="section-title" {...fadeInUp}>Our Journey</motion.h2>
          <motion.p {...fadeInUp} transition={{ delay: 0.2 }}>A chronological path of innovation and growth.</motion.p>
        </div>
        
        <div className="timeline-container" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto' }}>
          {/* Main glowing line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '0',
            bottom: '0',
            width: '2px',
            background: 'linear-gradient(to bottom, transparent, rgba(0, 242, 255, 0.5), rgba(0, 242, 255, 0.8), rgba(0, 242, 255, 0.5), transparent)',
            transform: 'translateX(-50%)',
            zIndex: 0
          }}></div>
          
          {timeline.map((item, i) => (
            <div key={item.year} style={{ display: 'flex', justifyContent: 'center', position: 'relative', marginBottom: '100px', width: '100%' }}>
              
              {/* Left Side (Empty or Card) */}
              <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', paddingRight: '60px' }}>
                {i % 2 === 0 && (
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
                    whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 242, 255, 0.1)', borderColor: 'rgba(0, 242, 255, 0.4)' }}
                    style={{
                      width: '100%',
                      maxWidth: '480px',
                      background: 'linear-gradient(135deg, rgba(6, 43, 122, 0.2), rgba(2, 11, 31, 0.8))',
                      border: '1px solid rgba(0, 242, 255, 0.1)',
                      borderRadius: '24px',
                      padding: '40px',
                      position: 'relative',
                      backdropFilter: 'blur(10px)',
                      textAlign: 'right',
                      overflow: 'hidden'
                    }}
                  >
                    <div style={{
                      display: 'inline-block',
                      padding: '8px 16px',
                      background: 'rgba(0, 242, 255, 0.1)',
                      color: '#00F2FF',
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      fontWeight: 'bold',
                      marginBottom: '20px',
                      border: '1px solid rgba(0, 242, 255, 0.2)',
                      boxShadow: '0 0 10px rgba(0, 242, 255, 0.2)'
                    }}>
                      {item.year}
                    </div>
                    
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', color: 'white', fontFamily: "'Space Grotesk', sans-serif" }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-gray)', lineHeight: '1.7', fontSize: '1.05rem', position: 'relative', zIndex: 1 }}>{item.description}</p>
                    
                    {/* Giant faded year background */}
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '10px',
                      transform: 'translateY(-50%)',
                      fontSize: '8rem',
                      fontWeight: 900,
                      color: 'rgba(255, 255, 255, 0.02)',
                      pointerEvents: 'none',
                      zIndex: 0,
                      fontFamily: "'Space Grotesk', sans-serif"
                    }}>
                      {item.year}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Center Dot */}
              <div style={{
                width: '60px',
                height: '60px',
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 2,
              }}>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: 'spring', bounce: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: '#010816',
                    border: '3px solid #00F2FF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00F2FF',
                    boxShadow: '0 0 20px rgba(0, 242, 255, 0.5), inset 0 0 15px rgba(0, 242, 255, 0.3)',
                  }}
                >
                  {item.icon}
                </motion.div>
              </div>
              
              {/* Right Side (Empty or Card) */}
              <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', paddingLeft: '60px' }}>
                {i % 2 !== 0 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
                    whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 242, 255, 0.1)', borderColor: 'rgba(0, 242, 255, 0.4)' }}
                    style={{
                      width: '100%',
                      maxWidth: '480px',
                      background: 'linear-gradient(135deg, rgba(6, 43, 122, 0.2), rgba(2, 11, 31, 0.8))',
                      border: '1px solid rgba(0, 242, 255, 0.1)',
                      borderRadius: '24px',
                      padding: '40px',
                      position: 'relative',
                      backdropFilter: 'blur(10px)',
                      textAlign: 'left',
                      overflow: 'hidden'
                    }}
                  >
                    <div style={{
                      display: 'inline-block',
                      padding: '8px 16px',
                      background: 'rgba(0, 242, 255, 0.1)',
                      color: '#00F2FF',
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      fontWeight: 'bold',
                      marginBottom: '20px',
                      border: '1px solid rgba(0, 242, 255, 0.2)',
                      boxShadow: '0 0 10px rgba(0, 242, 255, 0.2)'
                    }}>
                      {item.year}
                    </div>
                    
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', color: 'white', fontFamily: "'Space Grotesk', sans-serif" }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-gray)', lineHeight: '1.7', fontSize: '1.05rem', position: 'relative', zIndex: 1 }}>{item.description}</p>
                    
                    {/* Giant faded year background */}
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      right: '10px',
                      transform: 'translateY(-50%)',
                      fontSize: '8rem',
                      fontWeight: 900,
                      color: 'rgba(255, 255, 255, 0.02)',
                      pointerEvents: 'none',
                      zIndex: 0,
                      fontFamily: "'Space Grotesk', sans-serif"
                    }}>
                      {item.year}
                    </div>
                  </motion.div>
                )}
              </div>
              
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
