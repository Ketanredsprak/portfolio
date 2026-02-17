import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

const Resume = () => {
  return (
    <div className="main-content">
      <section className="about-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          <h1 className="gradient-text">My Resume</h1>
          <p style={{ margin: '1rem auto 3rem', color: 'var(--text-secondary)' }}>
            Showcasing my journey from backend architecture to professional Laravel development.
          </p>

          <motion.div
            style={{
              background: 'var(--glass-bg)',
              padding: '4rem',
              borderRadius: '20px',
              border: '1px solid var(--glass-border)',
              display: 'inline-block'
            }}
            whileHover={{ scale: 1.02, borderColor: 'var(--accent)' }}
          >
            <FileText size={80} className="highlight" style={{ marginBottom: '2rem' }} />
            <h3>Resume.pdf</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '2rem' }}>PHP Laravel Developer | Payment Gateway Specialist</p>

            {/* Using a relative button for download */}
            <a
              href="#"
              className="project-btn"
              style={{ padding: '1rem 2rem', justifyContent: 'center' }}
              onClick={(e) => e.preventDefault()}
            >
              <Download size={20} /> Download CV
            </a>
          </motion.div>

          <div style={{ marginTop: '5rem', textAlign: 'left', maxWidth: '800px', margin: '5rem auto 0' }}>
            <h2 className="highlight" style={{ marginBottom: '2rem' }}>Experience Highlights</h2>
            <div className="quote-box">
              <strong>Senior Laravel Developer</strong>
              <p style={{ margin: '0.5rem 0', color: 'var(--text-primary)', fontSize: '1rem' }}>
                Extensive experience in integrating complex payment gateways like Hyperpay, Razorpay, and PayPal into multi-vendor systems.
              </p>
            </div>
            <div className="quote-box" style={{ borderLeftColor: '#f472b6' }}>
              <strong>Full Stack Expertise</strong>
              <p style={{ margin: '0.5rem 0', color: 'var(--text-primary)', fontSize: '1rem' }}>
                Skilled in building real-time applications using Socket.io and crafting custom themes for WordPress platforms.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Resume;
