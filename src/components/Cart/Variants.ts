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

export const cartContainerVariants = {
  hidden: {
    y: "100vw",
  },
  visible: {
    y: "0",
    transition: {
      type: "spring",
      duration: 0.3,
      stiffness: 100,
      damping: 18,
    },
  },
};
