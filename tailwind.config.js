/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [ "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
      extend: {
        animation: {
          "glow": "glow 3s linear infinite",
          "spin-slow": "spinInfinite 20s linear infinite", 
          "bounce": "bouncy 4s linear infinite",
          "fade-in": "fade-in ease forwards 0.5s",
          "wave1": 'wave 12s ease-in-out infinite',
          "wave2": 'wave 8s ease-in-out infinite 0.5s',
          "wave3": 'wave 14s ease-in-out infinite 1s',
          "wave4": 'wave 16s ease-in-out infinite 1.5s',
          "wave5": 'wave 12s ease-in-out infinite 2s',
          "wave6": 'wave 14s ease-in-out infinite 1s',
        },
        fontFamily: {
          "ralewayBlack": ['Raleway-Black', 'sans-serif'],
          "ralewayLight": ['Raleway-Light', 'sans-serif'],
          "ralewayRegular": ['Raleway-Regular', 'sans-serif'],
          "ralewayMedium": ['Raleway-Medium', 'sans-serif'],
          "ralewayThin": ['Raleway-Thin', 'sans-serif'],
        },
        dropShadow: {
          "wedge": "0 3px 1px rgba(0, 0, 0, 0.15)",
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: "0"},
            "100%": { opacity: "1"}
          },
          glow: {
            "0%": { filter: "drop-shadow(0 0px 0px rgba(255, 255, 255, 0))" },
            "50%": { filter: "drop-shadow(2px 2px 10px rgb(255, 208, 108))" },
            "100%": { filter: "drop-shadow(0 0px 0px rgba(255, 255, 255, 0))" },
          },
          bouncy: {
            "0%": { transform: "scale(0.95) translateY(0)"},
            "50%": { transform: "scale(1.0) translateY(3px)"},
            "100%": { transform: "scale(0.95) translateY(0)"},

          },
          spinInfinite: {
            "0%": { transform: "rotate(0deg)" },
            "50%": { transform: "rotate(180deg)"},
            "100%": { transform: "rotate(360deg)" },
          },
          wave: {
            '0%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(10px) scale(1.1)', },
            '100%': { transform: 'translateY(0)' },
          },
          }
        },
      },
    plugins: [],
  }
  
  