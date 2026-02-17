import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ imgPath, title, description, link, ghLink }) => {
    return (
        <motion.div
            className="project-card-view"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <img src={imgPath} alt="project-img" className="project-card-img" />
            <div className="project-card-body">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="project-btn-container">
                    <a href={link} target="_blank" rel="noreferrer" className="project-btn">
                        <ExternalLink size={18} /> Demo
                    </a>
                    {ghLink && (
                        <a href={ghLink} target="_blank" rel="noreferrer" className="project-btn">
                            <Github size={18} /> GitHub
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
