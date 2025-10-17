import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaBirthdayCake } from 'react-icons/fa';
import type { PersonalInfo } from '../types';

interface HeroProps {
    data: PersonalInfo;
}

const Hero = ({ data }: HeroProps) => {
    // const scrollToNext = () => {
    //     const skillsSection = document.getElementById('skills');
    //     skillsSection?.scrollIntoView({ behavior: 'smooth' });
    // };

    return (
        <section
            id="hero"
            className="hero-section"
            style={{
                backgroundImage: data.backgroundImage
                    ? `url(${data.backgroundImage})`
                    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            }}
        >
            <div className="hero-overlay">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.p
                        className="hero-intro"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                    >
                        버그를 고치며 성장하는 인간 디버거 윤승환입니다.
                    </motion.p>

                    <motion.div
                        className="hero-name-section"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <div className="hero-name-left">
                            <h1 className="hero-name">{data.name}</h1>
                            {/* <motion.p
                                className="hero-position"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                {data.position}
                            </motion.p> */}
                        </div>

                        <motion.div
                            className="hero-info-section"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            <div className="hero-info-inline">
                                {data.birthDate && (
                                    <span className="info-item">
                                        <FaBirthdayCake />
                                        {data.birthDate}
                                    </span>
                                )}
                                {data.address && (
                                    <span className="info-item">
                                        <FaMapMarkerAlt />
                                        {data.address}
                                    </span>
                                )}
                            </div>
                            <div className="hero-info-inline">
                                {data.phone && (
                                    <span className="info-item">
                                        <FaPhone />
                                        {data.phone}
                                    </span>
                                )}
                                {data.email && (
                                    <span className="info-item">
                                        <FaEnvelope />
                                        {data.email}
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* <motion.p
                        className="hero-position"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        {data.position}
                    </motion.p>

                    <motion.div
                        className="hero-contact"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <div className="contact-item">
                            <FaEnvelope />
                            <span>{data.email}</span>
                        </div>
                        <div className="contact-item">
                            <FaPhone />
                            <span>{data.phone}</span>
                        </div>
                    </motion.div> */}

                    {/* <motion.button
                        className="scroll-indicator"
                        onClick={scrollToNext}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [0, 10, 0] }}
                        transition={{
                            opacity: { delay: 1, duration: 0.8 },
                            y: { repeat: Infinity, duration: 1.5 },
                        }}
                    >
                        <span>더 알아보기</span>
                        <FaChevronDown />
                    </motion.button> */}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
