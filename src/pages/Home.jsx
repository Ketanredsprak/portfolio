import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import Typewriter from '../components/Home/Typewriter';

const Home = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const socialLinks = [
        { icon: <Github />, url: 'https://github.com' },
        { icon: <Twitter />, url: 'https://twitter.com' },
        { icon: <Linkedin />, url: 'https://linkedin.com' },
        { icon: <Instagram />, url: 'https://instagram.com' },
    ];

    return (
        <div className="main-content">
            {/* Hero Section */}
            <section className="hero-section">
                <motion.div
                    className="hero-content"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Hi There! 👋</h2>
                    <h1 style={{ marginBottom: '1.5rem' }}>
                        I'M <span className="highlight">Ketan Dabhi</span>
                    </h1>
                    <div style={{ fontSize: '2.5rem', fontWeight: '700' }}>
                        <Typewriter
                            words={['PHP Laravel Developer', 'System Architect', 'Full Stack Developer', 'Open Source Contributor']}
                        />
                    </div>
                </motion.div>
                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    {/* Using a placeholder SVG or illustration concept */}
                    <img
                        src="https://raw.githubusercontent.com/soumyajit4419/Portfolio/master/src/Assets/home-main.svg"
                        alt="Hero Illustration"
                    />
                </motion.div>
            </section>

            {/* Introduction Section */}
            <section className="intro-section">
                <div className="intro-grid">
                    <motion.div
                        className="intro-text"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2>LET ME <span className="highlight">INTRODUCE</span> MYSELF</h2>
                        <p>
                            I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
                        </p>
                        <p>
                            I am fluent in classics like <b className="highlight">PHP and JavaScript.</b>
                        </p>
                        <p>
                            My field of Interest's are building new &nbsp;
                            <b className="highlight">Web Technologies and Products</b> and
                            also in areas related to <b className="highlight">Scalable Backend Systems.</b>
                        </p>
                        <p>
                            Whenever possible, I also apply my passion for developing products
                            with <b className="highlight">PHP Laravel</b> and
                            <i>
                                <b className="highlight">
                                    {" "}
                                    Modern Javascript Library and Frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="highlight"> React.js and Next.js</b>
                            </i>
                        </p>
                    </motion.div>
                    <motion.div
                        className="intro-avatar"
                        initial={{ opacity: 0, rotate: -10 }}
                        whileInView={{ opacity: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src="https://raw.githubusercontent.com/soumyajit4419/Portfolio/master/src/Assets/avatar.svg"
                            alt="Avatar"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Social Section */}
            <section className="social-section">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2>FIND ME ON</h2>
                    <p>Feel free to <span className="highlight">connect</span> with me</p>
                    <div className="social-links">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noreferrer"
                                className="social-icon"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
