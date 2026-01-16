import React from 'react';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="experience-container">
                <div className="section-header fade-in">
                    <h2 className="section-title">Experience</h2>
                    <p className="section-subtitle">
                        Professional journey and career milestones
                    </p>
                </div>

                <div className="experience-content fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="bento-card experience-card">
                        <div className="experience-header">
                            <span className="experience-icon">💼</span>
                            <div className="experience-info">
                                <h3 className="role-title">Flutter Developer Intern</h3>
                                <p className="company-name">
                                    IPS Technologies • Lahore, Pakistan
                                </p>
                                <p className="experience-date">Apr 2025 — Aug 2025</p>
                            </div>
                        </div>
                        <div className="experience-details">
                            <ul className="achievements-list">
                                <li>Engineered scalable mobile solutions using Flutter and Dart, contributing to major products like 'Roomatch Pk' (rental marketplace) and 'Real Couple' (matrimonial platform).</li>
                                <li>Architected robust backends using MongoDB and Firebase to manage dynamic data.</li>
                                <li>Integrated RESTful APIs and Cloudinary for optimized media handling and seamless user experience.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
