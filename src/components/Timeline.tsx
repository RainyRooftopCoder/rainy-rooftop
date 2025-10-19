import { motion } from 'framer-motion';
import { useState } from 'react';
import './Timeline.css';

interface TimelineEvent {
    id: string;
    year: string;
    title: string;
    subtitle: string;
    details: string;
    dateRange?: string;
}

const timelineData: TimelineEvent[] = [
    {
        id: 'college',
        year: '2007',
        title: '동아보건대',
        subtitle: '마술전공',
        details: '2007.03 - 2009.02',
    },
    {
        id: 'education',
        year: '2021',
        title: '이젠아카데미',
        subtitle: 'JAVA 개발자 과정',
        details: '2021.10 - 2022.04',
    },
    {
        id: 'infra',
        year: '2022',
        title: '㈜인프라원',
        subtitle: 'SI사업부 대리 (2년 11개월)',
        details: '2022.05 - 2025.03',
    },
    {
        id: 'ubigen',
        year: '2025',
        title: '유비젠에스엔티',
        subtitle: 'SM사업부 과장 (5개월)',
        details: '2025.05 - 2025.09',
    },
];

const Timeline = () => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <section id="timeline" className="section timeline-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    타임라인
                </motion.h2>

                <div className="timeline-container">
                    <div>
                        <div className="timeline-line"></div>

                        {timelineData.map((event, index) => (
                        <motion.div
                            key={event.id}
                            className="timeline-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredId(event.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-year">{event.year}</div>
                                <div className="timeline-title">{event.title}</div>
                                <div className="timeline-subtitle">{event.subtitle}</div>

                                {hoveredId === event.id && (
                                    <motion.div
                                        className="timeline-tooltip"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {event.details.split('\n').map((line, i) => (
                                            <div key={i}>{line}</div>
                                        ))}
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
