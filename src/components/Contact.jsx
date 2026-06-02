import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="contact-card glass-card">
          <div className="contact-info">
            <h2 className="section-title">Let's Build the Future.</h2>
            <p>
              I'm always open to discussing industrial optimization projects, 
              product design collaborations, or engineering opportunities.
            </p>
            <div className="contact-methods">
              <a href="mailto:nawarejannat77@gmail.com" className="contact-item">
                <span className="icon">📧</span>
                <div className="details">
                  <span className="label">Email</span>
                  <span className="value">nawarejannat77@gmail.com</span>
                </div>
              </a>
              <div className="contact-item">
                <span className="icon">📍</span>
                <div className="details">
                  <span className="label">Location</span>
                  <span className="value">Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-action">
            <div className="resume-box">
              <h3>Professional Resume</h3>
              <p>Download my full technical CV for detailed expertise.</p>
              <a href="https://drive.google.com/drive/folders/1oAZKO4p2cPxeaIOI63nPjfr71utV8_TT" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .contact-card {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          padding: 4rem;
          background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%);
        }
        
        .contact-info p {
          color: var(--text-secondary);
          font-size: 1.1rem;
          margin: 1.5rem 0 3rem;
        }
        
        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .contact-item {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }
        
        .contact-item .icon {
          font-size: 1.5rem;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-primary);
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
        }
        
        .contact-item .label {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.2rem;
        }
        
        .contact-item .value {
          font-weight: 600;
          color: var(--text-primary);
        }
        
        .resume-box {
          padding: 2.5rem;
          background: var(--bg-primary);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          text-align: center;
        }
        
        .resume-box h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .resume-box p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 2rem;
        }
        
        .w-full {
          width: 100%;
          justify-content: center;
        }
        
        @media (max-width: 968px) {
          .contact-card { grid-template-columns: 1fr; padding: 2rem; }
        }
      `}} />
    </section>
  );
};

export default Contact;
