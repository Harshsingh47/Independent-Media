"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  Cpu, 
  Zap, 
  Rocket, 
  Clock,
  Sparkles,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
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

  return (
    <main className="bg-[#020B1F] min-h-screen">
      {/* Cursor Glow */}
      <div 
        className="cursor-glow" 
        style={{ 
          left: `${mousePos.x}px`, 
          top: `${mousePos.y}px` 
        }} 
      />

      {/* Hero Section */}
      <section className="careers-hero" style={{ position: 'relative', overflow: 'hidden', padding: '180px 10% 120px' }}>
        {/* Animated Background Elements */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
          <div className="hero-gradient" style={{ position: 'absolute', width: '100%', height: '100%' }}></div>
          
          {/* Floating glowing orbs */}
          <motion.div 
            animate={{ 
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: 'absolute',
              top: '20%',
              left: '15%',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(0, 242, 255, 0.15) 0%, transparent 70%)',
              filter: 'blur(50px)',
            }}
          />
          <motion.div 
            animate={{ 
              y: [0, 40, 0],
              x: [0, -30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{
              position: 'absolute',
              bottom: '10%',
              right: '15%',
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle, rgba(6, 43, 122, 0.4) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
        </div>

        <div className="hero-content" style={{ position: 'relative', zIndex: 1, margin: '0 auto', maxWidth: '1000px', textAlign: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 24px',
              background: 'rgba(0, 242, 255, 0.05)',
              border: '1px solid rgba(0, 242, 255, 0.2)',
              borderRadius: '50px',
              color: '#00F2FF',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '35px',
              boxShadow: '0 0 20px rgba(0, 242, 255, 0.1)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <Sparkles size={16} />
            Future Builders Wanted
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            style={{ 
              fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', 
              lineHeight: 1.1, 
              marginBottom: '30px', 
              fontWeight: 800, 
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: '-1px'
            }}
          >
            JOIN THE <br/>
            <span style={{ 
              color: 'transparent', 
              WebkitTextStroke: '2px #00F2FF',
              textShadow: '0 0 40px rgba(0, 242, 255, 0.6)',
              display: 'inline-block',
              marginTop: '10px'
            }}>
              AVANT-GARDE
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ 
              fontSize: '1.25rem', 
              color: 'var(--text-gray)', 
              maxWidth: '700px', 
              margin: '0 auto 50px',
              lineHeight: 1.8
            }}
          >
            We are building the next generation of digital reality. If you're obsessed with tech, design, and pushing boundaries, you belong here.
          </motion.p>

          <motion.div 
            className="hero-btns"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <a href="#open-positions" className="btn btn-primary" style={{ 
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', 
              padding: '16px 40px', fontSize: '1.05rem', borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(0, 242, 255, 0.2)'
            }}>
              Explore Roles
              <ArrowRight size={18} />
            </a>
            <Link href="/about" className="btn btn-outline" style={{ 
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', 
              padding: '16px 40px', fontSize: '1.05rem', borderRadius: '16px',
              background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(10px)'
            }}>
              Our Culture
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '0 10%' }}>
        <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', maxWidth: '1000px', margin: '80px auto' }}>
          {[
            { label: "Performance", value: "99.9%", icon: <Zap size={24} />, desc: "Uptime and speed" },
            { label: "Innovation", value: "AI+Web3", icon: <Cpu size={24} />, desc: "Cutting-edge tech" },
            { label: "Hybrid", value: "Remote", icon: <Rocket size={24} />, desc: "First mindset" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              className="stat-item"
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
            >
              <div className="value-icon" style={{ marginBottom: '15px' }}>{stat.icon}</div>
              <span className="stat-number">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Job Listings */}
      <section id="open-positions" style={{ padding: '100px 10%' }}>
        <div className="section-header" style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <motion.h2 className="section-title" {...fadeInUp}>Open Positions</motion.h2>
          <motion.p className="section-subtitle" {...fadeInUp} transition={{ delay: 0.1 }}>
            Find your place in our growing digital studio.
          </motion.p>
        </div>

        <motion.div 
          className="jobs-list"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="job-card coming-soon-card" style={{ 
            justifyContent: 'center', 
            padding: '100px 40px', 
            textAlign: 'center',
            background: 'linear-gradient(145deg, rgba(6, 43, 122, 0.15), rgba(2, 11, 31, 0.8))',
            border: '1px solid rgba(0, 242, 255, 0.15)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), inset 0 0 20px rgba(0, 242, 255, 0.05)',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '30px'
          }}>
            {/* Background Glow */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(0, 242, 255, 0.08) 0%, transparent 70%)',
              filter: 'blur(30px)',
              pointerEvents: 'none'
            }} />
            
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <motion.div 
                animate={{ 
                  boxShadow: ['0 0 20px rgba(0,242,255,0.2)', '0 0 40px rgba(0,242,255,0.4)', '0 0 20px rgba(0,242,255,0.2)']
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ 
                  background: 'rgba(0, 242, 255, 0.05)', 
                  padding: '24px', 
                  borderRadius: '50%',
                  border: '1px solid rgba(0, 242, 255, 0.3)',
                  marginBottom: '30px'
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  <Clock size={48} style={{ color: '#00F2FF' }} />
                </motion.div>
              </motion.div>
              
              <h3 style={{ fontSize: '2.8rem', marginBottom: '20px', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>
                ROLES <span className="glow-text">COMING SOON</span>
              </h3>
              
              <p style={{ color: 'var(--text-gray)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.7' }}>
                We are currently crafting new opportunities for visionary digital architects. 
                Our next wave of recruitment is imminent.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Talent Pool Section */}
      <section className="talent-pool-cta">
        <div className="cta-box">
          <motion.h2 {...fadeInUp}>DON'T SEE A FIT?</motion.h2>
          <motion.p {...fadeInUp} transition={{ delay: 0.2 }}>
            If you are exceptional at what you do, we'll find a place for you. Send us your portfolio and let's talk about the future.
          </motion.p>
          <motion.div 
            className="hero-btns"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <Link href="/contact" className="btn btn-primary">Join Talent Pool</Link>
            <a href="mailto:careers@independentmedias.com" className="btn btn-outline">Email Recruitment</a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
