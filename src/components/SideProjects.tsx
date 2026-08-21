import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import type { SideProject } from '../types';

interface SideProjectsProps {
  data: SideProject[];
}

const SideProjects = ({ data }: SideProjectsProps) => {
  const [filter, setFilter] = useState<'all' | 'personal' | 'team'>('all');
  const [cardIndex, setCardIndex] = useState(0);
  const [activeProject, setActiveProject] = useState<SideProject | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const filteredProjects = filter === 'all'
    ? data
    : data.filter(project => project.type === filter);

  const currentProject = filteredProjects[cardIndex] ?? null;
  const slides = activeProject?.slides && activeProject.slides.length > 0
    ? activeProject.slides
    : activeProject
      ? [{ image: activeProject.image, title: activeProject.title, description: activeProject.description }]
      : [];

  const handleFilterChange = (next: 'all' | 'personal' | 'team') => {
    setFilter(next);
    setCardIndex(0);
  };

  const goToCard = (delta: number) => {
    setCardIndex((prev) => {
      const total = filteredProjects.length;
      return (prev + delta + total) % total;
    });
  };

  const openProject = (project: SideProject) => {
    setActiveProject(project);
    setSlideIndex(0);
  };

  const closeProject = () => setActiveProject(null);

  const goToSlide = (delta: number) => {
    setSlideIndex((prev) => {
      const total = slides.length;
      return (prev + delta + total) % total;
    });
  };

  useEffect(() => {
    if (!activeProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeProject();
      if (e.key === 'ArrowLeft') goToSlide(-1);
      if (e.key === 'ArrowRight') goToSlide(1);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeProject, slides.length]);

  const currentSlide = slides[slideIndex];

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
            onClick={() => handleFilterChange('all')}
          >
            전체
          </button>
          <button
            className={`filter-btn ${filter === 'personal' ? 'active' : ''}`}
            onClick={() => handleFilterChange('personal')}
          >
            개인
          </button>
          <button
            className={`filter-btn ${filter === 'team' ? 'active' : ''}`}
            onClick={() => handleFilterChange('team')}
          >
            팀
          </button>
        </motion.div>

        {filteredProjects.length === 0 ? (
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
        ) : (
          <motion.div
            className="side-project-carousel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              type="button"
              className="carousel-nav-btn prev"
              onClick={() => goToCard(-1)}
              disabled={filteredProjects.length < 2}
              aria-label="이전 프로젝트"
            >
              <FaChevronLeft />
            </button>

            <div className="carousel-stage">
              <AnimatePresence mode="wait">
                {currentProject && (
                  <motion.div
                    key={currentProject.id}
                    className="side-project-card"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -6 }}
                    onClick={() => openProject(currentProject)}
                  >
                    <div className="project-type-badge">
                      {currentProject.type === 'personal' ? '개인' : '팀'}
                    </div>

                    {currentProject.image && (
                      <div
                        className="project-image"
                        style={{ backgroundImage: `url(${currentProject.image})` }}
                      />
                    )}

                    <div className="project-content">
                      <h3 className="project-title">{currentProject.title}</h3>
                      <p className="project-description">{currentProject.description}</p>

                      <div className="project-tech">
                        {currentProject.techStack.map((tech) => (
                          <span key={tech} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="card-expand-hint">클릭해서 자세히 보기</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              type="button"
              className="carousel-nav-btn next"
              onClick={() => goToCard(1)}
              disabled={filteredProjects.length < 2}
              aria-label="다음 프로젝트"
            >
              <FaChevronRight />
            </button>
          </motion.div>
        )}

        {filteredProjects.length > 1 && (
          <div className="carousel-dots">
            {filteredProjects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                className={`carousel-dot ${index === cardIndex ? 'active' : ''}`}
                onClick={() => setCardIndex(index)}
                aria-label={project.title}
              />
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {activeProject && currentSlide && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeProject}
          >
            <motion.div
              className="project-modal"
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button type="button" className="modal-close-btn" onClick={closeProject} aria-label="닫기">
                <FaTimes />
              </button>

              <div className="modal-header">
                <h3>{activeProject.title}</h3>
                <div className="project-tech">
                  {activeProject.techStack.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                {activeProject.links && (
                  <div className="project-links">
                    {activeProject.links.github && (
                      <a
                        href={activeProject.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub />
                      </a>
                    )}
                    {activeProject.links.demo && (
                      <a
                        href={activeProject.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className="modal-slide-stage">
                <button
                  type="button"
                  className="modal-nav-btn prev"
                  onClick={() => goToSlide(-1)}
                  disabled={slides.length < 2}
                  aria-label="이전 슬라이드"
                >
                  <FaChevronLeft />
                </button>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={slideIndex}
                    className="modal-slide"
                    drag={slides.length > 1 ? 'x' : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -80) goToSlide(1);
                      else if (info.offset.x > 80) goToSlide(-1);
                    }}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -60 }}
                    transition={{ duration: 0.3 }}
                  >
                    {currentSlide.image && (
                      <img src={currentSlide.image} alt={currentSlide.title} className="modal-slide-image" />
                    )}
                    <div className="modal-slide-text">
                      <h4>{currentSlide.title}</h4>
                      <p>{currentSlide.description}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <button
                  type="button"
                  className="modal-nav-btn next"
                  onClick={() => goToSlide(1)}
                  disabled={slides.length < 2}
                  aria-label="다음 슬라이드"
                >
                  <FaChevronRight />
                </button>
              </div>

              {slides.length > 1 && (
                <div className="modal-dots">
                  {slides.map((slide, index) => (
                    <button
                      key={`${slide.title}-${index}`}
                      type="button"
                      className={`modal-dot ${index === slideIndex ? 'active' : ''}`}
                      onClick={() => setSlideIndex(index)}
                      aria-label={slide.title}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SideProjects;
