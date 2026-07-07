import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero-section section-padding">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text animate-reveal-up">
            <div className="badge">Available for Projects</div>
            <h1 className="hero-title text-gradient">
              Engineering <br />
              <span>Precision</span> & <br />
              Operational <span>Efficiency</span>
            </h1>
            <p className="hero-description">
              I am <strong>Nawar E Zannat</strong>, an Industrial and Production Engineer 
              from BUET. I specialize in optimizing systems, CAD/CAM design, 
              and finding elegant solutions to complex manufacturing challenges.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-outline">Let's Talk</a>
            </div>
          </div>
          
          <div className="hero-visual animate-reveal-in" style={{ animationDelay: '0.2s' }}>
            <div className="visual-card glass-card">
              <div className="card-header">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
              <div className="card-body">
                <div className="stat-row">
                  <span className="stat-label">CGPA</span>
                  <span className="stat-value">3.80 / 4.00</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">University</span>
                  <span className="stat-value">BUET</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Focus</span>
                  <span className="stat-value">IPE | Operations</span>
                </div>
              </div>
            </div>
            <div className="floating-elements">
              <div className="float-item">CAD</div>
              <div className="float-item">CAM</div>
              <div className="float-item">OR</div>
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-section {
          min-height: 90vh;
          display: flex;
          align-items: center;
          padding-top: 5rem;
          background: linear-gradient(rgba(10, 10, 12, 0.95), rgba(10, 10, 12, 0.95)), url('/bg_industrial.png');
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .hero-section::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 200px;
          background: linear-gradient(to top, var(--bg-primary), transparent);
          pointer-events: none;
        }
        
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: var(--spacing-lg);
          align-items: center;
        }
        
        .badge {
          display: inline-block;
          padding: 0.4rem 1rem;
          background: rgba(45, 212, 191, 0.1);
          border: 1px solid rgba(45, 212, 191, 0.2);
          color: var(--accent-primary);
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .hero-title {
          font-size: 4.5rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }
        
        .hero-title span {
          color: var(--accent-primary);
          -webkit-text-fill-color: initial;
        }
        
        .hero-description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 540px;
          margin-bottom: 2.5rem;
        }
        
        .hero-actions {
          display: flex;
          gap: 1rem;
        }
        
        .hero-visual {
          position: relative;
        }
        
        .visual-card {
          width: 100%;
          padding: 2rem;
          position: relative;
          z-index: 2;
        }
        
        .card-header {
          display: flex;
          gap: 6px;
          margin-bottom: 2rem;
        }
        
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--border-subtle);
        }
        
        .stat-row {
          display: flex;
          justify-content: space-between;
          padding: 1rem 0;
          border-bottom: 1px solid var(--border-subtle);
        }
        
        .stat-row:last-child {
          border-bottom: none;
        }
        
        .stat-label {
          color: var(--text-muted);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .stat-value {
          font-weight: 600;
          font-family: 'Outfit', sans-serif;
        }
        
        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .float-item {
          position: absolute;
          padding: 0.5rem 1rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          animation: float 6s ease-in-out infinite;
        }
        
        .float-item:nth-child(1) { top: -10%; right: 10%; animation-delay: 0s; }
        .float-item:nth-child(2) { bottom: 10%; left: -5%; animation-delay: 2s; }
        .float-item:nth-child(3) { bottom: -10%; right: 20%; animation-delay: 4s; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @media (max-width: 968px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-title { font-size: 3rem; }
          .hero-description { margin: 0 auto 2.5rem; }
          .hero-actions { justify-content: center; }
          .hero-visual { display: none; }
        }
      `}} />
    </section>
  );
};

export default Hero;
