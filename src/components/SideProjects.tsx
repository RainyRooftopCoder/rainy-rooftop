import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';
import type { SideProject } from '../types';

interface SideProjectsProps {
  data: SideProject[];
}

const SideProjects = ({ data }: SideProjectsProps) => {
  const [filter, setFilter] = useState<'all' | 'personal' | 'team'>('all');

  const filteredProjects = filter === 'all'
    ? data
    : data.filter(project => project.type === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="side-projects" className="section side-projects-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          사이드 프로젝트
        </motion.h2>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            전체
          </button>
          <button
            className={`filter-btn ${filter === 'personal' ? 'active' : ''}`}
            onClick={() => setFilter('personal')}
          >
            개인
          </button>
          <button
            className={`filter-btn ${filter === 'team' ? 'active' : ''}`}
            onClick={() => setFilter('team')}
          >
            팀
          </button>
        </motion.div>

        <motion.div
          className="coming-soon-message"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>🚧 준비중입니다 🚧</h3>
          <p>멋진 사이드 프로젝트를 준비하고 있습니다. 조금만 기다려주세요!</p>
        </motion.div>

        <motion.div
          className="side-projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: 'none' }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="side-project-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="project-type-badge">
                {project.type === 'personal' ? '개인' : '팀'}
              </div>

              {project.image && (
                <div
                  className="project-image"
                  style={{
                    backgroundImage: `url(${project.image})`,
                  }}
                />
              )}

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.links && (
                  <div className="project-links">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SideProjects;
