export const fade_in = {
  initial: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 800,
      ease: "easeOut",
    },
  },
};

export const hero_text = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1000,
      ease: [0.215, 0.61, 0.355, 1.0],
    },
  },
};

export const slide_left = {
  initial: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 700,
      ease: "easeOut",
    },
  },
};

export const slide_down = {
    initial: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
        duration: 700,
        ease: "easeOut",
        },
    },
}

export const zoom_in = {
  initial: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 600,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 300,
    },
  },
};

export const slide_right = {
  initial: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 700,
      ease: "easeOut",
    },
  },
};

export const card_enter = {
  initial: { y: 100, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 800,
      ease: "easeOut",
    },
  },
  hover: {
    y: -5,
    transition: {
      duration: 200,
    },
  },
};

export const bounce_in = {
  initial: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export const reveal = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 500,
      ease: "easeOut",
    },
  },
};

export const stagger_fade = {
  initial: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 500,
      ease: "easeOut",
    },
  },
};
