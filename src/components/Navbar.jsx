import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <div className="logo">
          <span className="logo-text">NZ</span>
          <span className="logo-dot">.</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact" className="btn btn-outline nav-btn">Contact</a></li>
        </ul>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: var(--transition-smooth);
        }
        
        .navbar.scrolled {
          background: var(--glass-bg);
          backdrop-filter: blur(12px);
          padding: 1rem 0;
          border-bottom: 1px solid var(--border-subtle);
        }
        
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-family: 'Outfit', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
        }
        
        .logo-dot {
          color: var(--accent-primary);
        }
        
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }
        
        .nav-links a {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
        }
        
        .nav-links a:hover {
          color: var(--text-primary);
        }
        
        .nav-btn {
          padding: 0.5rem 1.25rem !important;
          font-size: 0.85rem !important;
        }
      `}} />
    </nav>
  );
};

export default Navbar;
