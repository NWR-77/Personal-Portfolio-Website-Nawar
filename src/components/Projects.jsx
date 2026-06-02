import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Semi-automated Bottle Cleaning & Filling",
      category: "Mechanical Design",
      image: "/projects/bottle.png",
      description: "An ergonomic station streamlining cleaning and filling cycles for users with limited mobility or high-efficiency environments."
    },
    {
      title: "Ergonomic Workstation",
      category: "Human Factors Engineering",
      image: "/projects/workstation.png",
      description: "An L-shaped cockpit design optimizing reach zones and postural support to minimize musculoskeletal strain."
    },
    {
      title: "Ergonomic Anticutter",
      category: "Product Design",
      image: "/projects/anticutter.png",
      description: "Redesigned utility tool featuring hand-mapping contoured grip for maximum precision and stability."
    }
  ];

  return (
    <section id="projects" className="projects-section section-padding reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Portfolio</span>
          <h2 className="section-title">Selected Projects</h2>
        </div>
        
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div key={idx} className="project-card glass-card">
              <div className="project-image">
                <img src={proj.image} alt={proj.title} />
                <div className="project-overlay">
                  <span className="proj-cat">{proj.category}</span>
                </div>
              </div>
              <div className="project-info">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <div className="project-link">
                  <span>View Details</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2.5rem;
        }
        
        .project-card {
          overflow: hidden;
          padding: 0;
        }
        
        .project-image {
          position: relative;
          height: 240px;
          overflow: hidden;
        }
        
        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-smooth);
        }
        
        .project-card:hover .project-image img {
          transform: scale(1.1);
        }
        
        .project-overlay {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
        }
        
        .proj-cat {
          padding: 0.4rem 0.8rem;
          background: rgba(10, 10, 12, 0.6);
          backdrop-filter: blur(4px);
          border: 1px solid var(--border-subtle);
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .project-info {
          padding: 2rem;
        }
        
        .project-info h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
        }
        
        .project-info p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }
        
        .project-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--accent-primary);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
        }
        
        .project-link svg {
          transition: transform 0.3s ease;
        }
        
        .project-link:hover svg {
          transform: translateX(5px);
        }
      `}} />
    </section>
  );
};

export default Projects;
