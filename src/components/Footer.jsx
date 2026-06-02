import React from 'react';

const Footer = () => {
  return (
    <footer className="footer section-padding">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-text">NZ</span>
              <span className="logo-dot">.</span>
            </div>
            <p>Industrial & Production Engineer</p>
          </div>
          
          <div className="footer-copy">
            <p>&copy; {new Date().getFullYear()} Nawar E Zannat. All rights reserved.</p>
            <p className="credit">Designed for Precision.</p>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .footer {
          border-top: 1px solid var(--border-subtle);
          padding: 4rem 0 2rem;
        }
        
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .footer-brand p {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 0.5rem;
        }
        
        .footer-copy {
          text-align: right;
        }
        
        .footer-copy p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        
        .credit {
          color: var(--accent-primary) !important;
          font-weight: 600;
          margin-top: 0.2rem;
        }
        
        @media (max-width: 640px) {
          .footer-content {
            flex-direction: column;
            text-align: center;
            gap: 2rem;
          }
          .footer-copy { text-align: center; }
        }
      `}} />
    </footer>
  );
};

export default Footer;
