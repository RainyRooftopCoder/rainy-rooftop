import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';
import type { Certification } from '../types';

interface CertificationsProps {
  data: Certification[];
}

const Certifications = ({ data }: CertificationsProps) => {
  // 날짜 기준 내림차순 정렬
  const sortedData = [...data].sort((a, b) => {
    const dateA = new Date(a.date.replace('.', '-'));
    const dateB = new Date(b.date.replace('.', '-'));
    return dateB.getTime() - dateA.getTime();
  });

  const itemVariants = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -300 },
  };

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          자격증
        </motion.h2>

        <div className="certifications-list">
          {sortedData.map((cert, index) => (
            <motion.div
              key={cert.name}
              className="certification-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, delay: index * 0.05, ease: "linear" }}
            >
              <div className="cert-icon-small">
                <FaCertificate />
              </div>
              <div className="cert-info">
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>
              <div className="cert-date">{cert.date}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
