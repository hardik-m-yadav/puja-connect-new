export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const cardHover = {
  hover: {
    scale: 1.03,
    y: -5,
    transition: { duration: 0.2 }
  }
};