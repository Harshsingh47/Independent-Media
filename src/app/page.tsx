"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Database, Shield, Globe, Layout as LayoutIcon, Palette, Video, Layers, ShoppingBag, Box, Rocket, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTechTab, setActiveTechTab] = useState("Web Development");

  const techStacks = {
    "Web Development": {
      title: "Web Development That Boosts Conversions Fast",
      desc: "At Independent Medias, we craft custom, high-performance websites and apps powered by future-ready technologies. Our scalable, responsive solutions enhance engagement, elevate conversions, and fuel measurable business growth.",
      bullets: ["Free consultation offer", "Industry-specific resources", "Technology assessment tools"],
      icons: [
        { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Vue.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
        { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
        { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", invertInDark: true },
        { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: ".Net", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" },
        { name: "PHP", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" }
      ]
    },
    "Mobile App Development": {
      title: "High-Performance Mobile Applications",
      desc: "We build intuitive, fast, and scalable mobile apps for iOS and Android. Our mobile solutions are designed to provide seamless user experiences and drive high retention rates.",
      bullets: ["Cross-platform development", "Native performance", "App store optimization"],
      icons: [
        { name: "Flutter", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
        { name: "React Native", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Swift", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" },
        { name: "Kotlin", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" }
      ]
    },
    "AI / ML": {
      title: "Intelligent AI & Machine Learning Solutions",
      desc: "Integrate powerful AI models into your workflows. From predictive analytics to natural language processing, we leverage cutting-edge ML to automate and scale your business.",
      bullets: ["Custom AI models", "Data engineering", "Workflow automation"],
      icons: [
        { name: "TensorFlow", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
        { name: "PyTorch", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
        { name: "OpenAI", url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg", invertInDark: true },
        { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" }
      ]
    },
    "DevOps": {
      title: "Automated & Scalable Infrastructure",
      desc: "We streamline your development lifecycle with robust DevOps practices, ensuring rapid deployment, continuous integration, and rock-solid system reliability.",
      bullets: ["CI/CD pipelines", "Cloud infrastructure", "24/7 Monitoring"],
      icons: [
        { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "Kubernetes", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
        { name: "AWS", url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", invertInDark: true },
        { name: "GitLab", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" }
      ]
    },
    "UI / UX": {
      title: "Cinematic & User-Centric Design",
      desc: "Our design philosophy merges aesthetics with functionality. We create immersive, premium user interfaces that leave lasting impressions and drive user engagement.",
      bullets: ["Interactive prototypes", "User journey mapping", "Cinematic animations"],
      icons: [
        { name: "Figma", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
        { name: "Blender", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" },
        { name: "Adobe XD", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg" },
        { name: "Tailwind CSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
      ]
    },
    "Databases": {
      title: "Robust & Scalable Data Architecture",
      desc: "We design data models that scale effortlessly. Whether SQL or NoSQL, we ensure your data is secure, highly available, and instantly retrievable.",
      bullets: ["High availability", "Data encryption", "Automated backups"],
      icons: [
        { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { name: "Redis", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
        { name: "Firebase", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" }
      ]
    }
  };

  type TechCategory = keyof typeof techStacks;

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

      {/* TechStack Tabs Section */}
      <section id="tech-stack" style={{ padding: '100px 10%', background: 'var(--bg-dark)' }}>
        <div className="section-header" style={{ marginBottom: '60px' }}>
          <motion.p className="section-subtitle" {...fadeInUp} style={{ color: 'var(--text-gray)', fontSize: '1.1rem', marginBottom: '10px' }}>
            We partner with you to build a smarter, scalable, and successful future for your business.
          </motion.p>
          <motion.h2 className="section-title" {...fadeInUp} transition={{ delay: 0.1 }}>
            Core TechStack Used
          </motion.h2>
        </div>

        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
          {/* Left Column: Tabs */}
          <div style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {Object.keys(techStacks).map((tab, i) => (
              <motion.button
                key={tab}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setActiveTechTab(tab)}
                style={{
                  padding: '20px 30px',
                  background: activeTechTab === tab ? 'linear-gradient(90deg, #00C6FF, #0072FF)' : 'rgba(255,255,255,0.03)',
                  border: 'none',
                  borderRadius: '12px',
                  color: activeTechTab === tab ? 'white' : 'var(--text-gray)',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: activeTechTab === tab ? '0 10px 20px rgba(0, 114, 255, 0.3)' : 'none',
                }}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          {/* Right Column: Content */}
          <div style={{ 
            flex: '2', 
            minWidth: '350px', 
            background: 'var(--glass-bg)', 
            border: '1px solid var(--glass-border)',
            borderRadius: '16px',
            padding: '40px',
            backdropFilter: 'blur(20px)'
          }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTechTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', fontFamily: "'Space Grotesk', sans-serif" }}>
                  {techStacks[activeTechTab as TechCategory].title}
                </h3>
                <p style={{ color: 'var(--text-gray)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '30px' }}>
                  {techStacks[activeTechTab as TechCategory].desc}
                </p>
                
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '40px' }}>
                  {techStacks[activeTechTab as TechCategory].bullets.map(bullet => (
                    <div key={bullet} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', fontWeight: 500 }}>
                      <CheckCircle2 color="#00C6FF" size={20} />
                      {bullet}
                    </div>
                  ))}
                </div>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', 
                  gap: '20px',
                  borderTop: '1px solid rgba(255,255,255,0.05)',
                  paddingTop: '30px'
                }}>
                  {techStacks[activeTechTab as TechCategory].icons.map(icon => (
                    <div key={icon.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                      <div style={{ 
                        width: '60px', height: '60px', 
                        background: 'white', 
                        borderRadius: '12px', 
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        padding: '12px'
                      }}>
                        <img 
                          src={icon.url} 
                          alt={icon.name} 
                          style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'contain',
                            filter: icon.invertInDark ? 'brightness(0)' : 'none'
                          }} 
                        />
                      </div>
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-gray)' }}>{icon.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section" style={{ background: '#010816', padding: '120px 10%', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle connecting line in background */}
        <div style={{ position: 'absolute', top: '50%', left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(0, 242, 255, 0.2), transparent)', zIndex: 0, pointerEvents: 'none' }}></div>
        
        <div className="section-header" style={{ position: 'relative', zIndex: 1, marginBottom: '80px' }}>
          <motion.h2 className="section-title" {...fadeInUp}>Our Process</motion.h2>
          <motion.p className="section-subtitle" {...fadeInUp} transition={{ delay: 0.2 }}>
            A streamlined approach to digital excellence.
          </motion.p>
        </div>
        <div className="process-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
          gap: '40px',
          position: 'relative',
          zIndex: 1
        }}>
          {[
            { num: "01", title: "Discovery", desc: "We dive deep into your vision, requirements, and target audience to formulate a winning strategy.", icon: <Globe size={28} /> },
            { num: "02", title: "Architecture", desc: "Our architects map out the technical stack while designers craft intuitive, stunning user experiences.", icon: <LayoutIcon size={28} /> },
            { num: "03", title: "Development", desc: "We build your product using modern frameworks, ensuring scalability, security, and high performance.", icon: <Database size={28} /> },
            { num: "04", title: "Launch", desc: "Seamless deployment with continuous monitoring and optimization to guarantee long-term success.", icon: <Rocket size={28} /> }
          ].map((step, i) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -15, boxShadow: '0 20px 40px rgba(0, 242, 255, 0.15)', borderColor: 'rgba(0, 242, 255, 0.4)' }}
              style={{
                background: 'linear-gradient(145deg, rgba(2, 11, 31, 0.6), rgba(6, 43, 122, 0.1))',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '24px',
                padding: '50px 30px',
                position: 'relative',
                overflow: 'hidden',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.4s ease'
              }}
            >
              {/* Giant Background Number */}
              <div style={{
                position: 'absolute',
                top: '-15px',
                right: '-10px',
                fontSize: '9rem',
                fontWeight: 900,
                color: 'rgba(255, 255, 255, 0.03)',
                lineHeight: 1,
                fontFamily: "'Space Grotesk', sans-serif",
                pointerEvents: 'none',
                zIndex: 0
              }}>
                {step.num}
              </div>
              
              {/* Content */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  borderRadius: '18px', 
                  background: 'rgba(0, 242, 255, 0.08)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#00F2FF',
                  marginBottom: '30px',
                  border: '1px solid rgba(0, 242, 255, 0.2)',
                  boxShadow: 'inset 0 0 20px rgba(0, 242, 255, 0.05)'
                }}>
                  {step.icon}
                </div>
                
                <h3 style={{ fontSize: '1.6rem', marginBottom: '15px', color: 'white', fontFamily: "'Space Grotesk', sans-serif" }}>
                  <span style={{ color: '#00F2FF', marginRight: '10px' }}>{step.num}.</span>
                  {step.title}
                </h3>
                
                <p style={{ color: 'var(--text-gray)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>



      {/* Final CTA Section */}
      <section className="talent-pool-cta" style={{ padding: '80px 10% 120px' }}>
        <div className="cta-box">
          <motion.h2 {...fadeInUp}>READY TO TRANSFORM YOUR BUSINESS?</motion.h2>
          <motion.p {...fadeInUp} transition={{ delay: 0.2 }}>
            Join the ranks of our successful partners. Let's build a digital product that sets you apart from the competition.
          </motion.p>
          <motion.div 
            className="hero-btns"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            style={{ marginTop: '40px' }}
          >
            <Link href="/contact" className="btn btn-primary">Start a Project</Link>
            <Link href="/portfolio" className="btn btn-outline">View Our Work</Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
