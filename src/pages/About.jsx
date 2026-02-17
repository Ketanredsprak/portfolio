import React from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  Cpu,
  Database,
  Globe,
  CreditCard,
  Workflow,
  Share2,
  Code2
} from 'lucide-react';

const Techstack = () => {
  // Simple SVG components for logos that Lucide doesn't have
  const PHPLogo = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.66 12.06c-1.39 3.06-4.22 3.96-6.4 3.96-1.92 0-3.5-.54-3.5-2.02 0-1.55 1.43-2.6 3.03-2.6.24 0 .49.03.73.07-.15-.47-.44-1.28-.44-1.28l-.34-.94c-.16-.44-.32-.88-.49-1.3l-.06-.18c-.02-.05-.05-.11-.07-.16-.54-1.18-1.57-1.34-1.57-1.34s1.28.1 1.94 1.54c0 0 .5 1.14.73 1.84.14.41.27.81.4 1.22.42-.1.87-.16 1.34-.16 2.07 0 3.65.65 4.3 1.55 1.05 1.45.1 4.3-3.21 4.3-1.6 0-2.88-.63-2.88-1.64 0-.8.74-1.34 1.62-1.34.19 0 .38.03.56.08.38-.83.83-2 .83-2s-.52-.1-1.06-.1c-2.4 0-4.04 1.4-4.04 3.33 0 1.95 1.83 2.97 4.14 2.97 3.51 0 6.64-1.55 8.08-4.73 0 0-1.24 1.59-2.9 1.59zm-4.3-2.26c-.16-.03-.33-.04-.51-.04-.84 0-1.6.48-1.6 1.22 0 .61.5.95 1.14.95.83 0 1.62-.64 1.62-1.42 0-.25-.09-.5-.2-.71-.14-.24-.3-.4-.45-.48z" />
    </svg>
  );

  const LaravelLogo = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.5 12V3.5h-5.4V2h-8.2v1.5H2.5V22h19v-1.5h1.5V12h-1.5zm-1.5 8.5H4V5h10.6v1.5H16V5h4v15.5zm1.5-10V12H20v-1.5h1.5zM12 9.5l-2.5 1.5v3l2.5 1.5 2.5-1.5v-3L12 9.5zm1.1 3.5l-1.1.7-1.1-.7v-1.5l1.1-.7 1.1.7V13z" />
    </svg>
  );

  const stats = [
    { icon: <PHPLogo />, name: 'PHP' },
    { icon: <LaravelLogo />, name: 'Laravel' },
    { icon: <Globe />, name: 'WordPress' },
    { icon: <Share2 />, name: 'Socket.io' },
    { icon: <Code2 />, name: 'JavaScript' },
    { icon: <Database />, name: 'MySQL' },
    { icon: <Workflow />, name: 'System Design' },
    { icon: <Terminal />, name: 'API' }
  ];

  return (
    <div className="tech-icons-container">
      {stats.map((tech, index) => (
        <motion.div
          key={index}
          className="tech-icons"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {tech.icon}
          <span style={{ fontSize: '0.8rem', marginTop: '10px', position: 'absolute', bottom: '15px' }}>{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );
};

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const paymentGateways = [
    'Hyperpay', 'Razorpay', 'Quickpay', 'Copy and Pay', 'PayPal', 'Stripe', 'PayTabs'
  ];

  return (
    <div className="main-content">
      <section className="about-section">
        <div className="intro-grid">
          <motion.div
            className="intro-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.8,
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              style={{ textAlign: 'left', marginBottom: '2rem' }}
            >
              Know Who <span className="highlight">I Am</span>
            </motion.h1>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <p>
                Hi Everyone, I am <span className="highlight">Ketan Dabhi</span> from Gujarat, India.
                I am a professional <span className="highlight">PHP Laravel Developer</span> specialized in building secure and robust backend systems.
              </p>
              <p>
                My expertise includes modern web technologies like
                <span className="highlight"> WordPress</span>, <span className="highlight">Socket.io</span>, and complex <span className="highlight">Payment Gateway</span> integrations.
              </p>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
              className="quote-box"
            >
              "Building scalable systems isn't just about code, it's about solving real-world problems through logic and architectural excellence."
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <h3 style={{ marginTop: '2rem' }}>Apart from coding, some other activities that I love to do!</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                <motion.li
                  whileHover={{ x: 10, color: 'var(--accent)' }}
                  style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px', transition: 'all 0.3s ease' }}
                >
                  <Workflow size={18} className="highlight" /> System Architecture Design
                </motion.li>
                <motion.li
                  whileHover={{ x: 10, color: 'var(--accent)' }}
                  style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px', transition: 'all 0.3s ease' }}
                >
                  <Cpu size={18} className="highlight" /> Backend Performance Tuning
                </motion.li>
                <motion.li
                  whileHover={{ x: 10, color: 'var(--accent)' }}
                  style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px', transition: 'all 0.3s ease' }}
                >
                  <Share2 size={18} className="highlight" /> Real-time App Development
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="intro-avatar"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ width: '100%', maxWidth: '450px' }}
            >
              <img
                src="https://raw.githubusercontent.com/soumyajit4419/Portfolio/master/src/Assets/about.png"
                alt="About Illustration"
                style={{
                  width: '100%',
                  filter: 'drop-shadow(0 0 40px var(--accent-glow))',
                  objectFit: 'contain'
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        <h2 className="tech-stack-title">
          Professional <span className="highlight">Skillset</span>
        </h2>
        <Techstack />

        <h2 className="tech-stack-title">
          Payment <span className="highlight">Gateway</span> Expertise
        </h2>
        <motion.div
          className="payment-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          {paymentGateways.map((gate, index) => (
            <motion.div
              key={index}
              className="payment-badge"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <CreditCard size={18} className="highlight" />
              {gate}
            </motion.div>
          ))}
        </motion.div>

        <h2 className="tech-stack-title">
          <span className="highlight">Tools</span> I use
        </h2>
        <div className="tech-icons-container">
          <motion.div className="tech-icons" whileHover={{ scale: 1.1 }}><Terminal /></motion.div>
          <motion.div className="tech-icons" whileHover={{ scale: 1.1 }}><Code2 /></motion.div>
          <motion.div className="tech-icons" whileHover={{ scale: 1.1 }}><Workflow /></motion.div>
          <motion.div className="tech-icons" whileHover={{ scale: 1.1 }}><Database /></motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
