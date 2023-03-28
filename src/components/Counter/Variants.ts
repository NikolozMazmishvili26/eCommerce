export const backdropVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
    },
  },
};

export const containerVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      stiffness: 100,
      damping: 20,
    },
  },
  exit: {
    x: "100vw",
    opacity: 0,
    rotateY: -90,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};
