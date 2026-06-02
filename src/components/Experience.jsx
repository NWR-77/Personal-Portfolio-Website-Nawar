import React, { useState } from 'react';

const Experience = () => {
  const [lightboxImg, setLightboxImg] = useState(null);
  const [carouselIndices, setCarouselIndices] = useState({});

  const handlePrev = (itemIdx, total) => {
    setCarouselIndices(prev => ({
      ...prev,
      [itemIdx]: ((prev[itemIdx] || 0) - 1 + total) % total
    }));
  };

  const handleNext = (itemIdx, total) => {
    setCarouselIndices(prev => ({
      ...prev,
      [itemIdx]: ((prev[itemIdx] || 0) + 1) % total
    }));
  };

  const experience = [
    {
      title: "Industrial Attachment",
      org: "Pran-RFL Group",
      period: "Internship",
      details: ["Optimized production strategies", "Assisted in operational efficiency", "Manufacturing systems analysis"],
      images: ["/experience/industrial_1.jpg", "/experience/industrial_2.jpg", "/experience/industrial_3.jpg"]
    },
    {
      title: "Factory Visit",
      org: "A1 Polymer",
      period: "Technical Insight",
      details: ["PTFE piping manufacturing", "Hot-dip galvanizing analysis", "Cast iron finishing processes"],
      images: ["/experience/factory_visit.jpg"]
    }
  ];

  return (
    <section id="experience" className="experience-section section-padding reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Roadmap</span>
          <h2 className="section-title">Experience</h2>
        </div>
        
          <div className="experience-cards">
            {experience.map((item, idx) => (
              <div key={idx} className="experience-card glass-card">
                <div className="card-info">
                  <span className="card-subtitle">{item.period} • {item.title.toUpperCase()}</span>
                  <h3 className="card-title">{item.org}</h3>
                  <ul className="card-details">
                    {item.details.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                </div>
                
                {item.images && (
                  <div className="card-visuals">
                    <div className="carousel-wrapper">
                      <div className="carousel-track" style={{ transform: `translateX(-${(carouselIndices[idx] || 0) * 100}%)` }}>
                        {item.images.map((img, i) => (
                          <div 
                            key={i} 
                            className="carousel-slide"
                            onClick={() => setLightboxImg(img)}
                          >
                            <img src={img} alt={`${item.title} ${i + 1}`} />
                            <div className="img-overlay">
                              <span className="zoom-icon">⛶</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {item.images.length > 1 && (
                        <div className="carousel-controls">
                          <button onClick={() => handlePrev(idx, item.images.length)} aria-label="Previous">←</button>
                          <button onClick={() => handleNext(idx, item.images.length)} aria-label="Next">→</button>
                        </div>
                      )}
                    </div>
                    <div className="visual-caption">
                      VISUAL DOCUMENTATION — {item.title.toUpperCase()}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

        {lightboxImg && (
          <div className="lightbox" onClick={() => setLightboxImg(null)}>
            <div className="lightbox-content">
              <img src={lightboxImg} alt="Experience Fullscreen" />
              <button className="lightbox-close" onClick={() => setLightboxImg(null)}>×</button>
            </div>
          </div>
        )}
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .experience-cards {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          margin-bottom: 5rem;
        }

        .experience-card {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
          padding: 3rem;
          align-items: center;
          border-radius: 24px;
        }

        @media (max-width: 968px) {
          .experience-card {
            grid-template-columns: 1fr;
            padding: 2rem;
          }
        }

        .card-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .card-subtitle {
          color: var(--accent-primary);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.1em;
        }

        .card-title {
          font-size: 2rem;
          margin: 0;
          line-height: 1.2;
        }

        .card-details {
          list-style: none !important;
          padding: 0 !important;
          margin-top: 1.5rem !important;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .card-details li {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.6;
          padding-left: 1.5rem;
          position: relative;
        }

        .card-details li::before {
          content: "•";
          position: absolute;
          left: 0;
          color: var(--accent-primary);
        }

        .card-visuals {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .carousel-wrapper {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 4/3;
          background: rgba(0,0,0,0.2);
          border: 1px solid var(--border-subtle);
        }

        .carousel-track {
          display: flex;
          height: 100%;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .carousel-slide {
          flex: 0 0 100%;
          height: 100%;
          position: relative;
          cursor: pointer;
        }

        .carousel-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .carousel-slide:hover img {
          transform: scale(1.05);
        }

        .carousel-controls {
          position: absolute;
          bottom: 1.5rem;
          right: 1.5rem;
          display: flex;
          gap: 0.75rem;
          z-index: 10;
        }

        .carousel-controls button {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        .carousel-controls button:hover {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          transform: translateY(-2px);
        }

        .visual-caption {
          font-size: 0.7rem;
          color: var(--text-muted);
          letter-spacing: 0.15em;
          text-align: right;
          font-weight: 600;
        }

        .academic-section {
          margin-top: 4rem;
        }
        
        .column-title {
          font-size: 1.5rem;
          margin-bottom: 3rem;
          color: var(--text-primary);
          padding-left: 1.5rem;
          border-left: 4px solid var(--accent-primary);
        }

        /* Lightbox Styles */
        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(10px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          cursor: zoom-out;
          animation: fadeIn 0.3s ease;
        }

        .lightbox-content {
          position: relative;
          max-width: 90%;
          max-height: 90vh;
          animation: zoomIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .lightbox-content img {
          max-width: 100%;
          max-height: 85vh;
          border-radius: 8px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          object-fit: contain;
        }

        .lightbox-close {
          position: absolute;
          top: -3rem;
          right: -1rem;
          background: transparent;
          border: none;
          color: white;
          font-size: 2.5rem;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .lightbox-close:hover {
          transform: rotate(90deg) scale(1.1);
          color: var(--accent-primary);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes zoomIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}} />
    </section>
  );
};

export default Experience;
