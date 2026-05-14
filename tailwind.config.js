const baseFontSize = 16;

const typography = {
  xs: `${baseFontSize - 2}px`,
  sm: `${baseFontSize}px`,
  base: `${baseFontSize + 2}px`,
  lg: `${baseFontSize + 4}px`,
  xl: `${baseFontSize + 6}px`,
  "2xl": `${baseFontSize + 10}px`,
};

export default {
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        sans: ["Outfit", "sans-serif"],
      },
      fontSize: typography,
    },
  },
};
