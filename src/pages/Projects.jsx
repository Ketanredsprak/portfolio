import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/Projects/ProjectCard';

const Projects = () => {
  const projectList = [
    {
      title: "Taqwea.com",
      description: "A comprehensive platform connecting students and tutors. Features include tutor-led class creation, student enrollment with integrated payments, webinars, and a blog system. Built robustly with Laravel for high-scale educational interactions.",
      imgPath: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800", // Educational/Platform theme
      link: "https://taqwea.com",
    },
    {
      title: "Ehjez.solution",
      description: "A location-based service discovery platform specifically for barber shops. It helps users find the best professional barbers near their current location with easy booking management. Developed with Laravel and geolocation integration.",
      imgPath: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800",
      link: "https://ehjez.solution",
    },
    {
      title: "Labbah Project",
      description: "An 'everything-app' for services including cab booking, professional home services (AC maintenance, electrical work), and courier/delivery logistics. A complex multi-vendor system powered by Laravel.",
      imgPath: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800",
      link: "#",
    },
    {
      title: "Mehani Project",
      description: "A dedicated marketplace for on-demand home services. Customers can easily book skilled electricians, AC technicians, and other certified professionals. Built with Laravel to handle smooth service matching.",
      imgPath: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
      link: "#",
    },
    {
      title: "Zensoma",
      description: "A premium yoga and workout subscription platform. Vendors can upload categorized content (Yoga, HIIT, Cardio), allowing users to access high-quality fitness routines based on their subscription tier. Laravel-based content delivery.",
      imgPath: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
      link: "#",
    },
    {
      title: "Gaeem",
      description: "A specialized directory for parents to find and evaluate schools near their location. Features comprehensive school checking and comparison tools to ensure the best education for children. Powered by Laravel.",
      imgPath: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800", // High reliability educational image
      link: "#",
    }
  ];

  return (
    <div className="main-content">
      <section className="project-section">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{ marginBottom: "1rem" }}>
            My Recent <span className="highlight">Works</span>
          </h1>
          <p style={{ margin: "0 auto 3rem", color: "var(--text-secondary)" }}>
            Here are a few projects I've worked on recently. All of these are built using the <span className="highlight">Laravel Framework</span>.
          </p>
        </motion.div>

        <div className="project-grid-container">
          {projectList.map((project, index) => (
            <ProjectCard
              key={index}
              imgPath={project.imgPath}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
