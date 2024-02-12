import { useEffect} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedContent = ({ children }) => {
    const controls = useAnimation(); // Initialize controls using useAnimation
    const [ref, inView] = useInView({
      triggerOnce: true,
      rootMargin: '-100px 10px',
    });
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);
  

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8 }}
      variants={{
        visible: { opacity: 1, y: 0 },
      }} >
      {children}
    </motion.div>
  );
};

export default AnimatedContent;