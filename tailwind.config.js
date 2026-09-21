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
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      // Accent de marque : ambre chaud. Remplace l'ancien violet (tell #1 des UI
      // generees par IA) par une signature couleur intentionnelle. Echelle calee
      // sur #FB9E3A pour garder les rapports clair/fonce des anciennes nuances.
      colors: {
        accent: {
          300: "#FDBE6B",
          400: "#FB9E3A",
          500: "#F4851B",
          600: "#DB6E12",
        },
      },
      // Courbes d'accélération (basées sur "Animations on the Web").
      // ease-out : éléments qui entrent/sortent (ressenti instantané).
      // ease-in-out : éléments déjà à l'écran qui se déplacent.
      transitionTimingFunction: {
        "out-cubic": "cubic-bezier(0.215, 0.61, 0.355, 1)",
        "out-quint": "cubic-bezier(0.23, 1, 0.32, 1)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "in-out-quart": "cubic-bezier(0.77, 0, 0.175, 1)",
      },
      keyframes: {
        // Entrée : fondu + léger glissement. On part de scale(0.98),
        // jamais de scale(0) (sinon l'apparition semble "surgir de nulle part").
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px) scale(0.985)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        // Marketing : des durées un peu plus longues sont acceptables ici.
        "fade-up": "fade-up 600ms cubic-bezier(0.19, 1, 0.22, 1) both",
        "fade-in": "fade-in 500ms cubic-bezier(0.19, 1, 0.22, 1) both",
      },
    },
  },
  plugins: [],
};
