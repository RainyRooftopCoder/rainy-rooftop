import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendar, FaUsers, FaGithub, FaExternalLinkAlt, FaVideo, FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import type { Project } from '../types';

interface CareerProps {
    data: Project[];
}

const Career = ({ data }: CareerProps) => {
    const [expandedProjects, setExpandedProjects] = useState<string[]>([]);

    const toggleProject = (projectId: string) => {
        setExpandedProjects((prev) =>
            prev.includes(projectId) ? prev.filter((id) => id !== projectId) : [...prev, projectId]
        );
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="" className="section career-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    프로젝트
                </motion.h2>

                <motion.div
                    className="career-timeline"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {data.map((project) => {
                        const isExpanded = expandedProjects.includes(project.id);

                        return (
                            <motion.div
                                key={project.id}
                                className="project-card"
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <div className="project-header">
                                    <div onClick={() => toggleProject(project.id)} style={{ cursor: 'pointer' }}>
                                        <h3 className="project-title">{project.title}</h3>
                                        <div className="project-meta">
                                            <span className="project-period">
                                                <FaCalendar className="inline-icon" />
                                                {project.period}
                                            </span>
                                            {project.teamSize && (
                                                <span className="project-team">
                                                    <FaUsers className="inline-icon" />
                                                    {project.teamSize}명
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="project-controls">
                                        <motion.div
                                            animate={{ rotate: isExpanded ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="expand-icon"
                                            onClick={() => toggleProject(project.id)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <FaChevronDown />
                                        </motion.div>

                                        {project.links && (
                                            <div className="project-links-header">
                                                {project.links.github && (
                                                    <a
                                                        href={project.links.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="project-link"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <FaGithub /> {project.links.github}
                                                    </a>
                                                )}
                                                {project.links.demo && (
                                                    <a
                                                        href={project.links.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="project-link"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <FaExternalLinkAlt /> {project.links.demo}
                                                    </a>
                                                )}
                                                {project.links.demo2 && (
                                                    <a
                                                        href={project.links.demo2}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="project-link"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <FaExternalLinkAlt /> {project.links.demo2}
                                                    </a>
                                                )}
                                                {project.links.demo3 && (
                                                    <a
                                                        href={project.links.demo3}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="project-link"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <FaExternalLinkAlt /> {project.links.demo3}
                                                    </a>
                                                )}
                                                {project.links.video && (
                                                    <a
                                                        href={project.links.video}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="project-link"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <FaVideo /> {project.links.video}
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <p className="project-description">{project.description}</p>

                                            <div className="project-role">
                                                <strong>역할:</strong> {project.role}
                                            </div>

                                            <div className="project-tech">
                                                {project.techStack.map((tech) => (
                                                    <span key={tech} className="tech-tag">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Career;
