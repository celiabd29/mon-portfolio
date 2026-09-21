/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "md:hidden",
    "md:block",
    "hidden",
    "block",
    "sm:hidden",
    "sm:block",
  ],
  theme: {
    extend: {
      // Monde "clair / bleu-gris frais" : fond froid, encre navy, un seul accent
      // chaud (corail) pour la personnalite. Materiau "clay" pour le perso 3D.
      colors: {
        ground: { DEFAULT: "#eef2f7", deep: "#d7e1ec" },
        ink: "#16233a",
        muted: "#5a6a7e",
        surface: "#ffffff",
        line: "#dbe3ec",
        accent: {
          DEFAULT: "#f5714e",
          300: "#f9a58e",
          400: "#f5714e",
          500: "#e2542f",
          ink: "#b8482b",
        },
        clay: {
          hi: "#e6edf5",
          1: "#c6d5e6",
          2: "#a7bdd4",
          3: "#8aa4c0",
        },
      },
      fontFamily: {
        // display expressif + corps humaniste (pas l'Inter/Space Grotesk "safe IA")
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        sans: ['"Hanken Grotesk"', "system-ui", "sans-serif"],
        // les anciennes classes font-raleway pointent desormais sur le corps
        raleway: ['"Hanken Grotesk"', "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        "out-cubic": "cubic-bezier(0.215, 0.61, 0.355, 1)",
        "out-quint": "cubic-bezier(0.23, 1, 0.32, 1)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "in-out-quart": "cubic-bezier(0.77, 0, 0.175, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px) scale(0.985)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 600ms cubic-bezier(0.19, 1, 0.22, 1) both",
        "fade-in": "fade-in 500ms cubic-bezier(0.19, 1, 0.22, 1) both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
