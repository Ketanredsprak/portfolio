import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="main-content">
      <section className="about-section">
        <div className="intro-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              Let's <span className="highlight">Connect</span>
            </h1>
            <p style={{ textAlign: 'left', marginBottom: '3rem' }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div className="social-icon" style={{ cursor: 'default' }}>
                  <Mail size={24} className="highlight" />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <h4 style={{ color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>Mail me at</h4>
                  <p style={{ margin: 0, fontSize: '1.1rem' }}>ketandabhi88@gmail.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div className="social-icon" style={{ cursor: 'default' }}>
                  <MapPin size={24} className="highlight" />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <h4 style={{ color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>Location</h4>
                  <p style={{ margin: 0, fontSize: '1.1rem' }}>Gujarat, India</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div className="social-icon" style={{ cursor: 'default' }}>
                  <Phone size={24} className="highlight" />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <h4 style={{ color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>Call me</h4>
                  <p style={{ margin: 0, fontSize: '1.1rem' }}>+91 XXX XXX XXXX</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="card"
            style={{ padding: '3rem', textAlign: 'left' }}
          >
            <h3 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MessageSquare size={20} className="highlight" /> Send a Message
            </h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Full Name</label>
                <input
                  type="text"
                  placeholder="Ketan Dabhi"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '8px',
                    background: 'rgba(0,0,0,0.2)',
                    border: '1px solid var(--glass-border)',
                    color: 'white',
                    outline: 'none'
                  }}
                />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email Address</label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '8px',
                    background: 'rgba(0,0,0,0.2)',
                    border: '1px solid var(--glass-border)',
                    color: 'white',
                    outline: 'none'
                  }}
                />
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Your Message</label>
                <textarea
                  rows="4"
                  placeholder="How can I help you?"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '8px',
                    background: 'rgba(0,0,0,0.2)',
                    border: '1px solid var(--glass-border)',
                    color: 'white',
                    outline: 'none',
                    resize: 'none'
                  }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="project-btn"
                style={{ width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '1.1rem' }}
              >
                <Send size={20} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
