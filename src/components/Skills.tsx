import { motion } from 'framer-motion';
import type { Skill } from '../types';

interface SkillsProps {
    data: Skill[];
}

const Skills = ({ data }: SkillsProps) => {
    const categories = [
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
        { id: 'database', label: 'Database' },
        { id: 'devops', label: 'DevOps' },
        { id: 'tools', label: 'Tools' },
    ];

    const getSkillsByCategory = (category: string) => {
        return data.filter((skill) => skill.category === category);
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    스킬
                </motion.h2>

                <div className="skills-grid-layout">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            className="skill-category-row"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="category-label">{category.label}</div>
                            <div className="category-skills">
                                {getSkillsByCategory(category.id).map((skill) => (
                                    <motion.span
                                        key={skill.name}
                                        className="skill-badge-simple"
                                        style={{ backgroundColor: skill.color }}
                                        variants={itemVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    >
                                        {skill.name}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
