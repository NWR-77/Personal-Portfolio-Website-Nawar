import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section section-padding reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">The Engineer</span>
          <h2 className="section-title">Design, Optimize, Execute.</h2>
        </div>
        
        <div className="about-content glass-card">
          <div className="about-text">
            <p>
              I am an Industrial Engineering enthusiast with a focus on Operations Management, 
              Operations Research, and Computer-Integrated Manufacturing. I enjoy leading product 
              design projects and finding ways to simplify systems for improved efficiency.
            </p>
            <p>
              As an observer, I carefully analyze processes to identify areas for improvement, 
              aiming to enhance both engineering and business systems. My goal is to leverage 
              mathematical models and design precision to drive industrial innovation.
            </p>
            
            <div className="achievements-mini">
              <div className="achievement-item">
                <span className="ach-icon">🏆</span>
                <div className="ach-details">
                  <h4>Dean's List 2024</h4>
                  <p>Recognized for academic excellence at BUET.</p>
                </div>
              </div>
              <div className="achievement-item">
                <span className="ach-icon">🎓</span>
                <div className="ach-details">
                  <h4>Scholarship Recipient</h4>
                  <p>60% ISCEA Global Supply Chain Competition.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-box">
              <span className="stat-num">3.77</span>
              <span className="stat-desc">Current CGPA</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">5+</span>
              <span className="stat-desc">Design Projects</span>
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .section-header {
          margin-bottom: var(--spacing-lg);
        }
        
        .section-subtitle {
          color: var(--accent-primary);
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
          display: block;
        }
        
        .section-title {
          font-size: 2.5rem;
        }
        
        .about-content {
          padding: 3rem;
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        
        .about-text p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-size: 1.05rem;
        }
        
        .achievements-mini {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: 2rem;
        }
        
        .achievement-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        
        .ach-icon {
          font-size: 1.5rem;
          padding: 0.5rem;
          background: var(--bg-tertiary);
          border-radius: 8px;
        }
        
        .ach-details h4 {
          font-size: 1rem;
          margin-bottom: 0.2rem;
        }
        
        .ach-details p {
          font-size: 0.85rem;
          margin-bottom: 0;
        }
        
        .about-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        
        .stat-box {
          padding: 2rem;
          background: var(--bg-tertiary);
          border-radius: 12px;
          text-align: center;
          border: 1px solid var(--border-subtle);
        }
        
        .stat-num {
          display: block;
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--accent-primary);
          font-family: 'Outfit', sans-serif;
          margin-bottom: 0.5rem;
        }
        
        .stat-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          font-weight: 600;
        }
        
        @media (max-width: 968px) {
          .about-content { grid-template-columns: 1fr; }
          .about-stats { order: -1; }
        }
      `}} />
    </section>
  );
};

export default About;
