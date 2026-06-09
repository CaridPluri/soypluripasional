import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        verde: {
          DEFAULT: "#2A5C45",
          dark: "#1C3D2D",
          darker: "#0F2218",
          light: "#4A8C6B",
          pale: "#EDF5F0",
        },
        crema: {
          DEFAULT: "#F5F0E6",
          dark: "#EDE7D9",
          light: "#FAF8F3",
        },
        oro: {
          DEFAULT: "#C9A84C",
          light: "#E5CE8C",
          dark: "#9B7A28",
        },
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
