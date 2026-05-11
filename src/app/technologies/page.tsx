"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  Globe, 
  Database, 
  Layers, 
  Terminal, 
  Cloud, 
  ShieldCheck,
  Smartphone,
  Workflow,
  Palette,
  TrendingUp,
  Video,
  Monitor,
  Zap,
  Activity
} from "lucide-react";

export default function Technologies() {
  const techStacks = [
    {
      category: "Frontend Excellence",
      icon: <Globe className="text-cyan-400" size={40} />,
      techs: [
        { name: "Next.js 14", desc: "Server-side rendering & App Router for peak performance." },
        { name: "React", desc: "Component-based architecture for dynamic user interfaces." },
        { name: "TypeScript", desc: "Type-safe development for enterprise-grade stability." },
        { name: "Tailwind CSS", desc: "Utility-first styling for rapid, responsive design." }
      ]
    },
    {
      category: "Backend & Systems",
      icon: <Terminal className="text-purple-400" size={40} />,
      techs: [
        { name: "Node.js", desc: "High-concurrency runtime for scalable backend services." },
        { name: "Python", desc: "The powerhouse for data science and AI integration." },
        { name: "Go", desc: "Efficient, compiled language for microservices architecture." },
        { name: "PostgreSQL", desc: "Robust relational database for mission-critical data." }
      ]
    },
    {
      category: "AI & Neural Networks",
      icon: <Cpu className="text-pink-400" size={40} />,
      techs: [
        { name: "PyTorch", desc: "Leading research framework for deep learning models." },
        { name: "OpenAI API", desc: "Integrating advanced LLMs into business workflows." },
        { name: "TensorFlow", desc: "End-to-end platform for machine learning production." },
        { name: "LangChain", desc: "Framework for building LLM-powered applications." }
      ]
    },
    {
      category: "Web3 & Blockchain",
      icon: <ShieldCheck className="text-emerald-400" size={40} />,
      techs: [
        { name: "Solidity", desc: "Ethereum's language for secure smart contracts." },
        { name: "Rust", desc: "High-performance code for Solana and Substrate." },
        { name: "Ethers.js", desc: "Seamless interaction with the Ethereum blockchain." },
        { name: "The Graph", desc: "Indexing protocol for decentralized data querying." }
      ]
    },
    {
      category: "Creative & Design",
      icon: <Palette className="text-orange-400" size={40} />,
      techs: [
        { name: "Figma", desc: "Collaborative interface design and prototyping." },
        { name: "Adobe CC", desc: "Industry-standard for graphics and visual assets." },
        { name: "Blender", desc: "3D modeling and cinematic rendering powerhouse." },
        { name: "Canva Pro", desc: "Rapid high-quality social media asset creation." }
      ]
    },
    {
      category: "Digital Marketing",
      icon: <TrendingUp className="text-blue-400" size={40} />,
      techs: [
        { name: "Google Analytics 4", desc: "Advanced data tracking and user behavior analysis." },
        { name: "Meta Ads Manager", desc: "Targeted advertising across global social networks." },
        { name: "SEMrush / Ahrefs", desc: "Comprehensive SEO and competitor research tools." },
        { name: "Mailchimp", desc: "Automated email marketing and CRM integration." }
      ]
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <main className="tech-page">
      <section className="tech-hero">
        <motion.div className="hero-badge" {...fadeInUp}>Our Stack</motion.div>
        <motion.h1 {...fadeInUp} transition={{ delay: 0.2 }}>
          Forging the Future with <span className="glow-text">Advanced Tech</span>
        </motion.h1>
        <motion.p {...fadeInUp} transition={{ delay: 0.4 }}>
          We don't just use technology; we master it to solve the world's most complex digital challenges.
        </motion.p>
      </section>

      <section className="tech-grid-section">
        {techStacks.map((group, i) => (
          <motion.div 
            key={group.category}
            className="tech-category-block"
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
          >
            <div className="category-header">
              <div className="category-icon">{group.icon}</div>
              <h2>{group.category}</h2>
            </div>
            
            <div className="tech-items-grid">
              {group.techs.map((tech) => (
                <div key={tech.name} className="tech-item-card">
                  <h3>{tech.name}</h3>
                  <p>{tech.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      <section className="tech-ecosystem">
        <div className="ecosystem-content">
          <motion.h2 {...fadeInUp}>A Unified Ecosystem</motion.h2>
          <motion.p {...fadeInUp} transition={{ delay: 0.2 }}>
            Our technologies work in harmony, from the user's screen to the deepest layers of the decentralized web.
          </motion.p>
          <div className="ecosystem-visual">
            <div className="eco-orbit">
              <div className="eco-pulse"></div>
              <div className="eco-center"><Code2 size={40} /></div>
              <div className="eco-node node-1"><Cloud size={20} /></div>
              <div className="eco-node node-2"><Database size={20} /></div>
              <div className="eco-node node-3"><Smartphone size={20} /></div>
              <div className="eco-node node-4"><Workflow size={20} /></div>
              <div className="eco-node node-5"><Monitor size={20} /></div>
              <div className="eco-node node-6"><Zap size={20} /></div>
              <div className="eco-node node-7"><Activity size={20} /></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
