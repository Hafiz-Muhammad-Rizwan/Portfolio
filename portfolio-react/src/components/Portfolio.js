import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Library Management System',
      icon: '📚',
      description: 'This Library Management System is a desktop application built using Flutter. It provides a seamless way to manage library operations. The app allows users to view, borrow, and return books.',
      technologies: ['Flutter', 'Dart', 'Database'],
      image: 'https://raw.githubusercontent.com/Hafiz-Muhammad-Rizwan/Portfolio/main/Images/photo-1507842217343-583bb7270b66.jpg',
      link: 'https://github.com/Hafiz-Muhammad-Rizwan/Library-Management-System',
      gradient: 'linear-gradient(135deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8))'
    },
    {
      title: 'Currency Converter',
      icon: '💱',
      description: 'A Flutter-based Currency Converter that fetches real-time exchange rates using an API. Built with state management for efficient UI updates, ensuring a smooth and responsive user experience.',
      technologies: ['Flutter', 'Dart', 'RESTful API'],
      image: 'https://raw.githubusercontent.com/Hafiz-Muhammad-Rizwan/Portfolio/main/Images/Currency%20Convertor.jpg',
      link: 'https://github.com/Hafiz-Muhammad-Rizwan/Currency-Convertor',
      gradient: 'linear-gradient(135deg, rgba(240, 147, 251, 0.8), rgba(245, 87, 108, 0.8))'
    },
    {
      title: 'Calculator App',
      icon: '🧮',
      description: 'This Calculator Mobile Application allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The app is designed with an intuitive user interface, making it easy and convenient for users to perform calculations on the go.',
      technologies: ['Flutter', 'Dart'],
      image: 'https://raw.githubusercontent.com/Hafiz-Muhammad-Rizwan/Portfolio/main/Images/closeup-shot-entrepreneur-working-from-home-doing-calculations.jpg',
      link: 'https://github.com/Hafiz-Muhammad-Rizwan/Calculator-Mobile-Application---Built-with-Flutter',
      gradient: 'linear-gradient(135deg, rgba(79, 172, 254, 0.8), rgba(0, 242, 254, 0.8))'
    },
    {
      title: 'Mini Instagram',
      icon: '📱',
      description: 'A text-based social media application where users can create profiles, send friend requests, real time messaging, upload posts, and interact with others in a command-line interface. Built using Graph data structures.',
      technologies: ['C++', 'OOP', 'Graphs'],
      image: 'https://raw.githubusercontent.com/Hafiz-Muhammad-Rizwan/Portfolio/main/Images/download.jpg',
      link: 'https://github.com/Hafiz-Muhammad-Rizwan/Mini-Instagram',
      gradient: 'linear-gradient(135deg, rgba(67, 233, 123, 0.8), rgba(56, 249, 215, 0.8))'
    },
    {
      title: 'Contact Book',
      icon: '📇',
      description: 'This Contact Book is a simple yet powerful console application built using pure Object-Oriented Programming (OOP) principles. The project allows users to store and manage contact details such as names, phone numbers, and email addresses in a structured manner.',
      technologies: ['C++', 'OOP'],
      image: 'https://raw.githubusercontent.com/Hafiz-Muhammad-Rizwan/Portfolio/main/Images/Terminal3.jpg',
      link: 'https://github.com/Hafiz-Muhammad-Rizwan/Contact-Book',
      gradient: 'linear-gradient(135deg, rgba(250, 112, 154, 0.8), rgba(254, 225, 64, 0.8))'
    },
    {
      title: 'CGPA Calculator',
      icon: '📊',
      description: 'This CGPA Calculator is a web-based tool built using HTML, CSS, and JavaScript to help students calculate their Cumulative Grade Point Average (CGPA) efficiently. Features a clean and intuitive interface for easy grade tracking.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://raw.githubusercontent.com/Hafiz-Muhammad-Rizwan/Portfolio/main/Images/Cgpa3%20(1).jpg',
      link: 'https://github.com/Hafiz-Muhammad-Rizwan/CGPA-Calculator',
      gradient: 'linear-gradient(135deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8))'
    },
    {
      title: 'Game Store',
      icon: '🎮',
      description: 'This is a full-stack Game Store web application built as a database project. The app allows users to browse, search, and purchase games, while the admin can manage inventory and view purchase history. Built with modern web technologies.',
      technologies: ['Node.js', 'Express.js', 'MySQL'],
      image: 'https://raw.githubusercontent.com/Hafiz-Muhammad-Rizwan/Portfolio/main/Images/Game Store.jpg',
      link: 'https://github.com/Hafiz-Muhammad-Rizwan/Game-Store',
      gradient: 'linear-gradient(135deg, rgba(43, 192, 228, 0.8), rgba(234, 236, 198, 0.8))'
    },
    {
      title: 'Climate Change Analysis',
      icon: '🌍',
      description: 'I analyzed the Berkeley Earth Surface Temperature Dataset to uncover global temperature trends and predict future climate patterns using probability and statistical methods. This project showcases expertise in data analysis and visualization.',
      technologies: ['Python', 'Data Analysis', 'Visualization'],
      image: 'https://raw.githubusercontent.com/Hafiz-Muhammad-Rizwan/Portfolio/main/Images/Climate Change.jpg',
      link: 'https://github.com/Hafiz-Muhammad-Rizwan/Climate-Data-Visualization',
      gradient: 'linear-gradient(135deg, rgba(127, 255, 212, 0.8), rgba(245, 245, 245, 0.8))'
    },
    {
      title: '🇵🇰 Roomatch Pk (Airbnb for Pakistan)',
      icon: '🏠',
      description: 'This is a cross-platform mobile accommodation marketplace built for the Pakistani market. The application connects hosts with guests (primarily students and visitors) allowing users to search, filter, and securely book verified rooms and apartments. It features a dual-sided interface with a complex Host Dashboard for managing listings and bookings. Built with modern mobile and backend technologies.',
      technologies: ['Flutter', 'Dart', 'Next.js API', 'MongoDB', 'Provider'],
      image: 'https://raw.githubusercontent.com/Hafiz-Muhammad-Rizwan/Portfolio/main/Images/RoomatchPk.png',
      link: 'https://github.com/Hafiz-Muhammad-Rizwan/Roommatch-Pk/tree/main/hostelmanagement',
      gradient: 'linear-gradient(135deg, rgba(127, 255, 212, 0.8), rgba(245, 245, 245, 0.8))'
    },
    {
      title: 'Poetry Management System',
      icon: '📝',
      description: 'Migrated a legacy desktop NLP tool to a modern Spring Boot & React architecture, exposing linguistic analysis via REST APIs while maintaining strict logic decoupling.',
      technologies: ['Spring Boot', 'Facade', 'Layered Architecture', 'React'],
      image: 'https://github.com/Hafiz-Muhammad-Rizwan/Portfolio/blob/main/Images/poetry-management-react-12-16-2025_08_02_AM.png?raw=true',
      link: 'https://github.com/Hafiz-Muhammad-Rizwan/Poetry_Management_Spring_Boot',
      gradient: 'linear-gradient(135deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8))'
    },
    {
      title: 'Banking App',
      icon: '💰',
      description: 'A full-stack financial solution featuring a reactive Flutter UI and a robust Spring Boot backend. Enforces data integrity during real-time transactions using strict row-level locking and transaction rollback mechanisms.',
      technologies: ['Spring Boot', 'Flutter', 'Java', 'Layered Architecture', 'Facade'],
      image: 'https://github.com/Hafiz-Muhammad-Rizwan/Portfolio/blob/main/Images/Banking%20App.jpg?raw=true',
      link: 'https://github.com/Hafiz-Muhammad-Rizwan/Banking-App',
      gradient: 'linear-gradient(135deg, rgba(240, 147, 251, 0.8), rgba(245, 87, 108, 0.8))'
    },
    {
    title: 'Sentimental Analysis',
    icon: '🧠',
    description: 'An advanced Natural Language Processing (NLP) model that accurately classifies textual data into positive, negative, or neutral sentiments. Features data visualization dashboards to interpret customer feedback trends and social media patterns in real-time.',
    technologies: ['Python', 'NLTK', 'Scikit-learn', 'Pandas', 'Data Visualization'],
    image: 'https://github.com/Hafiz-Muhammad-Rizwan/Portfolio/blob/main/Images/Sentimental%20Analysis.png?raw=true',
    link: 'https://github.com/Hafiz-Muhammad-Rizwan/Sentimental-Analysis',
    gradient: 'linear-gradient(135deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8))'
   }
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Building impactful solutions with modern technologies
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bento-card project-card"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="glass-overlay">
                  <div className="overlay-content">
                    <span className="project-icon-large">{project.icon}</span>
                    <div className="view-project-badge">
                      View Project →
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag">+{project.technologies.length - 3}</span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
