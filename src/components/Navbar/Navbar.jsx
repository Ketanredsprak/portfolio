import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, Briefcase, Code, FileText, Send, Info } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [expand, setExpand] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/', icon: <Home size={18} /> },
        { name: 'About', path: '/about', icon: <User size={18} /> },
        { name: 'Projects', path: '/projects', icon: <Briefcase size={18} /> },
        { name: 'Resume', path: '/resume', icon: <FileText size={18} /> },
        { name: 'Contact', path: '/contact', icon: <Send size={18} /> },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <NavLink to="/" className="nav-logo" onClick={() => setExpand(false)}>
                k.dev
            </NavLink>

            <button
                className="nav-toggle"
                onClick={() => setExpand(!expand)}
                aria-label="Toggle navigation"
            >
                <div className={`hamburger ${expand ? 'open' : ''}`}></div>
            </button>

            <ul className={`nav-links ${expand ? 'active' : ''}`}>
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <NavLink
                            to={link.path}
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            onClick={() => setExpand(false)}
                        >
                            {link.icon}
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
