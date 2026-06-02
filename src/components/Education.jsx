import React from 'react';

const Education = () => {
  const education = [
    {
      title: "B.Sc. in Industrial and Production Engineering",
      org: "Bangladesh University of Engineering and Technology (BUET)",
      period: "JAN 2022 – May 2026 (Expected)",
      details: ["CGPA: 3.77 / 4.00", "Dean's List Award 2024", "Thesis: Nanocomposites for Sustainable Packaging"],
      logo: "/buet_logo.svg"
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      org: "BAF Shaheen College, Dhaka",
      period: "2018 – 2020",
      details: ["GPA: 5.00 / 5.00", "Green Thumb Award", "Nature Festival Winner"],
      logo: "/baf_shaheen_logo.svg"
    }
  ];

  return (
    <section id="education" className="education-section section-padding reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Academic Background</span>
          <h2 className="section-title">Education</h2>
        </div>
        
        <div className="education-timeline">
          {education.map((item, idx) => (
            <div key={idx} className="education-item glass-card">
              <div className="edu-dot"></div>
              <div className="edu-header">
                {item.logo && (
                  <div className="edu-logo-wrapper">
                    <img src={item.logo} alt={`${item.org} Logo`} className="edu-logo" />
                  </div>
                )}
                <div className="edu-title-group">
                  <span className="edu-period">{item.period}</span>
                  <h3 className="edu-title">{item.title}</h3>
                  <span className="edu-org">{item.org}</span>
                </div>
              </div>
              <div className="edu-body">
                <ul className="edu-details">
                  {item.details.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .education-timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding-left: 2rem;
          border-left: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        
        .education-item {
          position: relative;
          padding: 2.5rem;
          border-radius: 20px;
          transition: all 0.3s ease;
        }
        
        .education-item:hover {
          transform: translateX(10px);
          border-color: var(--accent-primary);
        }
        
        .edu-dot {
          position: absolute;
          left: -2.35rem;
          top: 3.5rem;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--accent-primary);
          box-shadow: 0 0 15px var(--accent-primary);
          z-index: 1;
        }

        .edu-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .edu-logo-wrapper {
          width: 64px;
          height: 64px;
          min-width: 64px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.4rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .education-item:hover .edu-logo-wrapper {
          border-color: var(--accent-primary);
          background: rgba(255, 255, 255, 0.08);
          transform: scale(1.05);
        }

        .edu-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .edu-title-group {
          display: flex;
          flex-direction: column;
        }
        
        .edu-period {
          display: block;
          font-size: 0.8rem;
          color: var(--accent-primary);
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-bottom: 0.3rem;
        }
        
        .edu-title {
          font-size: 1.3rem;
          margin-bottom: 0.25rem;
          color: var(--text-primary);
          line-height: 1.3;
        }
        
        .edu-org {
          display: block;
          font-size: 0.95rem;
          color: var(--text-muted);
          font-style: italic;
        }
        
        .edu-details {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        
        .edu-details li {
          font-size: 0.9rem;
          color: var(--text-secondary);
          padding-left: 1.2rem;
          position: relative;
        }
        
        .edu-details li::before {
          content: "→";
          position: absolute;
          left: 0;
          color: var(--accent-primary);
          font-size: 0.8rem;
        }

        @media (max-width: 768px) {
          .education-timeline { padding-left: 1.5rem; }
          .edu-dot { left: -1.85rem; top: 3.2rem; }
          .education-item { padding: 1.5rem; }
          .edu-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          .edu-logo-wrapper {
            width: 50px;
            height: 50px;
            min-width: 50px;
          }
        }
      `}} />
    </section>
  );
};

export default Education;
