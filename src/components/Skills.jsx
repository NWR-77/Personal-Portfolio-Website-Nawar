import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "CAD & Engineering Design",
      skills: ["SolidWorks", "Ansys", "AutoCAD", "Catia"]
    },
    {
      title: "Technical Stack",
      skills: ["C Programming", "Operations Research", "Numerical Methods", "Project Management"]
    },
    {
      title: "Software & Analysis",
      skills: ["MS Excel", "MS Word", "PowerPoint", "Manufacturing Process"]
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Critical Thinking", "Adaptability", "Communication"]
    }
  ];

  return (
    <section id="skills" className="skills-section section-padding reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Expertise</span>
          <h2 className="section-title">Technical Proficiency</h2>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-card glass-card">
              <h3>{cat.title}</h3>
              <div className="skill-tags">
                {cat.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .skill-card {
          padding: 2.5rem;
        }
        
        .skill-card h3 {
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }
        
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        
        .skill-tag {
          padding: 0.5rem 1rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-subtle);
          border-radius: 6px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }
        
        .skill-tag:hover {
          background: var(--accent-glow);
          border-color: var(--accent-primary);
          color: var(--accent-primary);
        }
      `}} />
    </section>
  );
};

export default Skills;
