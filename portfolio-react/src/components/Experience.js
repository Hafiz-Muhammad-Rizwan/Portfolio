import React from 'react';
import { useScrollAnimation } from './useScrollAnimation';
import './Experience.css';

const Experience = () => {
    const [headerRef, headerVisible] = useScrollAnimation();
    const [exp1Ref, exp1Visible] = useScrollAnimation();
    const [exp2Ref, exp2Visible] = useScrollAnimation();

    return (
        <section id="experience" className="experience-section">
            <div className="experience-container">
                <div 
                    ref={headerRef}
                    className={`section-header fade-in ${headerVisible ? 'visible' : ''}`}
                >
                    <h2 className="section-title">Experience</h2>
                    <p className="section-subtitle">
                        Professional journey and career milestones
                    </p>
                </div>

                <div className="experience-content">
                    <div 
                        ref={exp1Ref}
                        className={`bento-card experience-card scroll-fade-in ${exp1Visible ? 'visible' : ''}`}
                    >
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

                    <div 
                        ref={exp2Ref}
                        className={`bento-card experience-card scroll-fade-in ${exp2Visible ? 'visible' : ''}`}
                    >
                        <div className="experience-header">
                            <span className="experience-icon">👨‍🏫</span>
                            <div className="experience-info">
                                <h3 className="role-title">Teaching Assistant</h3>
                                <p className="company-name">
                                    Information and Communication Technology • FAST NUCES
                                </p>
                                <p className="experience-date">Aug 2025 — Present</p>
                            </div>
                        </div>
                        <div className="experience-details">
                            <ul className="achievements-list">
                                <li>Assisted students in mastering fundamental web development technologies including HTML, CSS, and JavaScript.</li>
                                <li>Conducted lab sessions and provided hands-on guidance to enhance students' practical programming skills.</li>
                                <li>Mentored students in building responsive web applications and debugging code efficiently.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
