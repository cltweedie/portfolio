import { spring } from 'react-motion';

const TRANSITION = {
  atEnter: {
      opacity: 0,
      offset: 40,
    },
    atLeave: {
      opacity: spring(0, { stiffness: 500, damping: 50 })
    },
    atActive: {
      opacity: spring(1, { stiffness: 100, damping: 50 }),
      offset: spring(0, { stiffness: 150, damping: 28 }),
    },
    mapStyles(styles) {
      return {
        opacity: styles.opacity,
        transform: `translateX(${styles.offset}%)`,
      };
    }
};

export default TRANSITION;