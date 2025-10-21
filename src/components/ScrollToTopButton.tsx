import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // 자격증 섹션 요소 찾기
      const certificationsSection = document.getElementById('certifications');

      console.log('Certifications section:', certificationsSection); // 디버깅용

      if (certificationsSection) {
        // 자격증 섹션의 위치 가져오기
        const rect = certificationsSection.getBoundingClientRect();
        console.log('Rect top:', rect.top, 'Window height:', window.innerHeight); // 디버깅용
        // 자격증 섹션이 뷰포트에 들어오면 버튼 표시
        setIsVisible(rect.top <= window.innerHeight);
      }
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', toggleVisibility);

    // 초기 상태 확인 (약간의 지연을 두어 DOM이 완전히 로드되도록)
    setTimeout(toggleVisibility, 100);

    // 클린업
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="scroll-to-top-button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="맨 위로 이동"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
