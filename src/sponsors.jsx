import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Sponsors.css';

// Import sponsor images statically
import jojo from '/assets/sponsors/jojo.webp';
import aditya from '/assets/sponsors/aditya.webp';
import sponsor1 from '/assets/sponsors/sponsor 1.webp';
import sponsor2 from '/assets/sponsors/sponsor 2.webp';

import sponsor4 from '/assets/sponsors/sponsor 4.webp';
import sponsor5 from '/assets/sponsors/sponsor 5.webp';
import sponsor6 from '/assets/sponsors/sponsor 6.webp';
import sponsor7 from '/assets/sponsors/sponsor 7.webp';
import sponsor8 from '/assets/sponsors/sponsor 8.webp';
import sponsor9 from '/assets/sponsors/sponsor 9.webp';
import sponsor10 from '/assets/sponsors/sponsor 10.webp';
import sponsor11 from '/assets/sponsors/sponsor 11.webp';
import sponsor12 from '/assets/sponsors/sponsor 12.webp';
import sponsor13 from '/assets/sponsors/sponsor 13.webp';
import sponsor14 from '/assets/sponsors/sponsor 14.webp';
import sponsor15 from '/assets/sponsors/sponsor 15.webp';
import sponsor16 from '/assets/sponsors/sponsor 16.webp';
import sponsor17 from '/assets/sponsors/sponsor 17.webp';

// Define sponsors array
const sponsors = [
  { id: 1, image: sponsor1, alt: 'Sponsor 1 logo' },
  
  {id: 18, image: aditya, alt: 'Sponsor 18 logo'},
  { id: 2, image: sponsor2, alt: 'Sponsor 2 logo' },
  { id: 3, image: jojo, alt: 'Sponsor 3 logo' },
  { id: 4, image: sponsor4, alt: 'Sponsor 4 logo' },
  { id: 5, image: sponsor5, alt: 'Sponsor 5 logo' },
  { id: 6, image: sponsor6, alt: 'Sponsor 6 logo' },
  { id: 7, image: sponsor7, alt: 'Sponsor 7 logo' },
  { id: 8, image: sponsor8, alt: 'Sponsor 8 logo' },
  { id: 9, image: sponsor9, alt: 'Sponsor 9 logo' },
  { id: 10, image: sponsor10, alt: 'Sponsor 10 logo' },
  { id: 11, image: sponsor11, alt: 'Sponsor 11 logo' },
  { id: 12, image: sponsor12, alt: 'Sponsor 12 logo' },
  { id: 13, image: sponsor13, alt: 'Sponsor 13 logo' },
  { id: 14, image: sponsor14, alt: 'Sponsor 14 logo' },
  { id: 15, image: sponsor15, alt: 'Sponsor 15 logo' },
  { id: 16, image: sponsor16, alt: 'Sponsor 16 logo' },
  { id: 17, image: sponsor17, alt: 'Sponsor 17 logo' },
];

const Sponsors = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const location = useLocation();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cardRefs.current) return;

      cardRefs.current.forEach((card) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // More subtle rotation values for better mobile experience
        const rotateY = (-(rect.width / 2 - x) / 30); 
        const rotateX = ((rect.height / 2 - y) / 30);
        
        // Smoother transform with transition
        card.style.transform = `
          perspective(1000px) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg) 
          scale(1.05)
        `;
        
        // Dynamic shadow based on position
        card.style.boxShadow = `
          ${-rotateY * 2}px 
          ${rotateX * 2}px 
          25px 
          rgba(0, 0, 0, 0.2)
        `;
      });
    };

    const resetTransform = () => {
      cardRefs.current.forEach((card) => {
        if (!card) return;
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        card.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', resetTransform);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', resetTransform);
      }
    };
  }, []);

  return (
    <div className="sponsors-container" ref={containerRef}>
      <h1 className="page-title">Our Valued Sponsors</h1>
      <div className="sponsor-grid">
        {sponsors.map((sponsor, index) => (
          <div
            className="sponsor-card-wrapper"
            key={sponsor.id}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <a
              href={sponsor.url}
              className="sponsor-card"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${sponsor.alt}`}
            >
              <div className="card-content">
                <img
                  src={sponsor.image}
                  alt={sponsor.alt}
                  className="sponsor-logo"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = '/path/to/fallback-image.png';
                  }}
                />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;