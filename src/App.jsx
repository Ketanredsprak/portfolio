import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import './index.css';

// Component to handle dynamic page titles
function PageTitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    const titleMap = {
      '/': 'Home',
      '/about': 'About',
      '/projects': 'Projects',
      '/resume': 'Resume',
      '/contact': 'Contact'
    };

    const pageName = titleMap[location.pathname] || 'Portfolio';
    document.title = `Ketan Dabhi - ${pageName}`;
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <PageTitleUpdater />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Simple Footer */}
        <footer style={{
          padding: '2rem',
          textAlign: 'center',
          background: 'rgba(0,0,0,0.3)',
          borderTop: '1px solid var(--glass-border)',
          color: 'var(--text-secondary)'
        }}>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>
            Designed & Developed by <span className="highlight">Ketan Dabhi</span>
          </p>
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.8rem' }}>
            Copyright © {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
