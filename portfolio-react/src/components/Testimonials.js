import React, { useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  useEffect(() => {
    // Load Elfsight platform script
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="section-header">
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle">What colleagues and clients say about me</p>
        </div>
        
        <div className="testimonials-widget">
          <div 
            className="elfsight-app-717d40ec-6429-467c-942f-0667f4e0f62b" 
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
