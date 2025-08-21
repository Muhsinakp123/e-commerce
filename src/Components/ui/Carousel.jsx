import { motion } from 'framer-motion';

const AutoCarousel = ({ children }) => {
    
  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <motion.div
        animate={{ x: '100%' }} // Moves from 0 (initial) to -100% (off-screen left)
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} // Loops indefinitely and smoothly
        style={{ display: 'flex', gap: '20px', whiteSpace: 'nowrap' }} // Adjust as needed
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AutoCarousel;

